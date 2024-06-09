import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

function Header() {

	const {isLoggedIn, authUser} = useAuth();

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
								{isLoggedIn ? (
								<>
									<li>
										<p>Welcome, {authUser}</p>
									</li>
										<li>
											<Link to='/'>Logout</Link>
										</li>
										<li>
											<Link to='/cart'>Cart(0)</Link>
										</li>
									</>
								) : (
									<>
										<li>
											<Link to='/login'>Login</Link>
										</li>
										<li>
											<Link to='/register'>Register</Link>
										</li>
										{/* O carrinho vai ficar exclusivamente para logged in users */}
										<li>
											<Link to='/cart'>Cart(0)</Link>
										</li>
									</>
								)}
							</ul>
						</nav>
					</div>
				</div>
			</section>
		);

}

export default Header;