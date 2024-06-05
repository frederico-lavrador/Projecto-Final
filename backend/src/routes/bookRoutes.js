import express from 'express';
import axios from 'axios';
import { PrismaClient } from '@prisma/client';

const router = express.Router();
const prisma = new PrismaClient();

router.get('/fetch-and-insert', async (req, res) => {
	const searchTerm = req.query.q;

	if (!searchTerm) {
		return res.status(400).json({ error: 'Search term is required' });
	}

	try {
		const booksInDB = await prisma.book.findMany({
			where: {
				OR: [{ title: { contains: searchTerm.toLowerCase() } }, { author: { contains: searchTerm.toLowerCase() } }, { isbn: { contains: searchTerm } }],
			},
		});

		if (booksInDB.length > 0) {
			return res.json({ bookData: booksInDB });
		}

		const response = await axios.get(`https://openlibrary.org/search.json?q=${searchTerm}`);
		const books = response.data.docs;

		const bookData = books.map(book => ({
			isbn: book.isbn ? book.isbn[0] : 'N/A',
			title: book.title.length > 255 ? book.title.substring(0, 255) : book.title,
			author: book.author_name && book.author_name.length > 0 ? book.author_name[0] : 'Unknown Author',
			price: Math.random() * 50,
		}));

		for (const book of bookData) {
			await prisma.book.upsert({
				where: { isbn: book.isbn },
				update: { isbn: book.isbn, title: book.title, author: book.author, price: book.price },
				create: { isbn: book.isbn, title: book.title, author: book.author, price: book.price },
			});
		}

		res.json({ message: 'Books fetched and inserted successfully', bookData });
	} catch (error) {
		console.error('Error fetching or inserting books:', error);
		res.status(500).json({ error: 'An error occurred while fetching or inserting books' });
	} finally {
		await prisma.$disconnect();
	}
});

export default router;
