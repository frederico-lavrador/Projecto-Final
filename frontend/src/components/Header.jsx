import {Link} from 'react-router-dom';

function Header() {

    return (
			<section id='header' className='header'>
				<div className='container'>
					<div className='header__wrapper'>
						<div className='header__logo'>
							<Link to='/'>
								<h1>Book Store</h1>
							</Link>
						</div>
						<nav className='header__nav'>
							<ul>
								<li>
									<Link to='/login'>Login</Link>
								</li>
								<li>
									<Link to='/cart'>Cart(0)</Link>
								</li>
							</ul>
						</nav>
					</div>
				</div>
			</section>
		);

}

export default Header;