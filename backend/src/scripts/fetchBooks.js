import axios from 'axios';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const fetchBooksFromApi = async (searchTerm) => {
    
    const response = await axios.get(`https://openlibrary.org/search.json?q=${searchTerm}`);

    return response.data.docs.map((book) => ({

        title: book.title,
        author: book.autho_name ? book.author_name[0] : 'Unknown',
        isbn: book.isbn ? book.isbn[0] : 'N/A',
        price: Math.random() * 50,

    }));

};

const saveBooksToDb = async (books) => {

    for (const book of books) {
        
        try {
            
            await prisma.book.create({ data: book });

        } catch (error) {
            
            console.error(`Failed to save book: ${book.title}`, error);

        }

    }

};

const main = async () => {

    const searchTerm = 'Harry Potter';
    const books = await fetchBooksFromApi(searchTerm);

    await saveBooksToDb(books);

    console.log(`Successfully saved ${books.length} books to the database.`);

    await prisma.$disconnect();

};

main().catch((error) => {

    console.error(error);

    prisma.$disconnect();

    process.exit(1);

});