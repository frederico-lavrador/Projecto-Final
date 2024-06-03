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
									<button>
										<i class='fa fa-plus' style={{ fontSize: 30 + 'px' }} />
									</button>
									<p>69</p>
									<button>
										<i class='fa fa-minus' style={{ fontSize: 30 + 'px' }} />
									</button>
									<p>420.00€</p>
									<button>
										<i class='fa fa-close' style={{ fontSize: 30 + 'px' }}/>
									</button>
								</div>
							</div>
						</div>
						<hr />
						<div className='cart__total'>
							<p>
								Total: <span>420.00€</span>
							</p>
							<button className='cart__checkoutBtn'>Checkout</button>
						</div>
					</div>
				</div>
			</section>
		);

}

export default Cart;