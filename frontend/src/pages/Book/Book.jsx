import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from '../../api/axios';
import { useCart } from '../../contexts/CartContext';

function Book() {

	const { isbn } = useParams();
	const [bookData, setBookData] = useState(null);
	const { addToCart } = useCart();

	useEffect(() => {

		const fetchBookData = async () => {

			try {
				
				const response = await axios.get(`/books/${isbn}`);

				setBookData(response.data);

			} catch (error) {
				
				console.error('Error fetching book data', error);

			}

		};

		if (isbn) {

			fetchBookData();

		}

	}, [isbn]);

	if (!bookData) {
		
		return <div>Loading...</div>;

	}

    return (
			<section id='book' className='book'>
				<div className='container'>
					<div className='book__wrapper'>
						<div className='book__image'>
							<img src={`https://covers.openlibrary.org/b/isbn/${bookData.isbn}-L.jpg` || 'https://placehold.co/400x500'} alt={bookData.title} />
						</div>
						<div className='book__data'>
							<h2>
								<span>Title: </span>
								{bookData.title}
							</h2>
							<p>
								<span>Author: </span>
								{bookData.author}
							</p>
							<hr />
							<p>
								<span>ISBN: </span>
								{bookData.isbn}
							</p>
							<hr />
							<p>{bookData.price.toFixed(2)}€</p>
							<div className='cart__button'>
								<button onClick={() => addToCart(bookData)}>Add to Cart</button>
							</div>
						</div>
					</div>
				</div>
			</section>
		);

}

export default Book;