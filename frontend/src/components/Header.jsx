function Header() {

    return (
			<section id='header' className='header'>
				<div className='container'>
					<div className='header__wrapper'>
						<div className='header__logo'>
							<a href="#"><h1>Book Store</h1></a>
						</div>
						<nav className='header__nav'>
							<ul>
								<li>Login</li>
								<li>Cart(0)</li>
							</ul>
						</nav>
					</div>
				</div>
			</section>
		);

}

export default Header;