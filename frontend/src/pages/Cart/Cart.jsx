function Cart() {

    return (
			<section id='cart' className='cart'>
				<div className='container'>
					<div className='cart__wrapper'>
						<h2>Your cart</h2>
						<div className='cart__item'>
							<div className='item__image'>
								<img src='https://placehold.co/100x125' alt='' />
							</div>
							<div className='item__data'>
								<h3>Title</h3>
								<div className='item__quantity'>
									<button>+</button>
									<p>69</p>
									<button>-</button>
									<p>420.00</p>
									{/* This is the remove item button */}
									<button>x</button>
								</div>
							</div>
						</div>
						<hr />
						<div className='cart__total'>
							<p>
								Total: <span>420.00</span>
							</p>
							<button className='cart__checkoutBtn'>Checkout</button>
						</div>
					</div>
				</div>
			</section>
		);

}

export default Cart;