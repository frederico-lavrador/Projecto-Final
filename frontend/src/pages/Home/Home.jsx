import React, { useState } from 'react';
import axios from '../../api/axios';

function Home() {
	const [query, setQuery] = useState('');
	const [results, setResults] = useState([]);
	const [searched, setSearched] = useState(false);

	const handleInputChange = e => {
		setQuery(e.target.value);
	};

	const handleSearch = async e => {
		e.preventDefault();
		try {
			const response = await axios.get('/books/fetch-and-insert', { params: { q: query } });
			setResults(response.data.bookData);
			setSearched(true);
		} catch (error) {
			console.error('Error searching books', error);
		}
	};

	return (
		<section id='home' className='home'>
			<div className='container'>
				<div className='home__wrapper'>
					<div className='home__searchbar'>
						<input type='text' placeholder='Search a book...' value={query} onChange={handleInputChange} />
						<button className='home__searchBtn' onClick={handleSearch}>Search</button>
					</div>
					<div className='search__results'>
						{searched && Array.isArray(results) && results.length === 0 ? (
							<h3>No results found</h3>
						) : (
							results.map((book, index) => (
								<div key={book.isbn || `${book.title}-${book.author}-${index}-${Math.random().toString(36).substring(7)}`} className='home__bookItem'>
									<h3>{book.title}</h3>
									<p>{book.author}</p>
									<p>{book.price.toFixed(2)}€</p>
									<hr />
								</div>
							))
						)}
					</div>
					{/* <div className="home__recentBooks">
                        <h2>New Releases</h2>
                        <div className="home__recentList">
                            <h3>Under Construction...</h3>
                        </div>
                    </div> */}
				</div>
			</div>
		</section>
	);
}

export default Home;
