import React from 'react';
import { useCart } from '../../contexts/CartContext.jsx';

function Cart() {
	const { cart, updateQuantity, removeFromCart, calculateTotal } = useCart();

	return (
		<section id='cart' className='cart'>
			<div className='container'>
				<div className='cart__wrapper'>
					<h2>Your cart</h2>
					{cart.length === 0 ? (
						<div className='no__items'>
							<p>No items in the cart</p>
						</div>
					) : (
						cart.map(item => (
							<>
								<div key={item.isbn} className='cart__item'>
									<div className='item__image'>
										<img src={`https://covers.openlibrary.org/b/isbn/${item.isbn}-S.jpg`} alt={item.title} />
									</div>
									<div className='item__data'>
										<h3>{item.title}</h3>
										<div className='item__quantity'>
											<button onClick={() => updateQuantity(item.isbn, item.quantity + 1)}>
												<i className='fa fa-plus' style={{ fontSize: 30 + 'px' }} />
											</button>
											<p>{item.quantity}</p>
											<button onClick={() => updateQuantity(item.isbn, Math.max(item.quantity - 1, 1))}>
												<i className='fa fa-minus' style={{ fontSize: 30 + 'px' }} />
											</button>
											<p>{(item.price * item.quantity).toFixed(2)}€</p>
											<button onClick={() => removeFromCart(item.isbn)}>
												<i className='fa fa-close' style={{ fontSize: 30 + 'px' }} />
											</button>
										</div>
									</div>
								</div>
								<hr />
							</>
						))
					)}
					{cart.length > 0 && (
						<>
							<div className='cart__total'>
								<p>
									Total: <span>{!isNaN(calculateTotal()) ? calculateTotal() : '0.00'}€</span>
								</p>
								<button className='cart__checkoutBtn'>Checkout</button>
							</div>
						</>
					)}
				</div>
			</div>
		</section>
	);
}

export default Cart;
