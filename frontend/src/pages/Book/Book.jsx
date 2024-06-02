function Book() {

    return (
			<section id='book' className='book'>
				<div className='container'>
					<div className='book__wrapper'>
						<div className='book__image'>
							<img src='https://placehold.co/400x500' alt='' />
						</div>
						<div className='book__data'>
							<h2>Title</h2>
							<p>Author</p>
							<hr />
							<p>Description</p>
							<hr />
							<p>ISBN</p>
							<hr />
							<p>Price</p>
							<div className='cart__button'>
								<button>Add to Cart</button>
							</div>
						</div>
					</div>
				</div>
			</section>
		);

}

export default Book;