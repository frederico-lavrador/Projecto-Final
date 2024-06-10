import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { useCart} from 	'../contexts/CartContext';

function Header() {

	const { isLoggedIn, setIsLoggedIn, setAuthUser, authUser } = useAuth();
	const { cart } = useCart();
	
	const handleLogout = () => {

		setAuthUser(null);
		setIsLoggedIn(false);

		localStorage.removeItem('token');
		console.log('Logout success!');

	};

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
											<Link to='/' onClick={handleLogout}>
												Logout
											</Link>
										</li>
										<li>
											<Link to='/cart'>Cart({cart.length})</Link>
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