import { createHashRouter } from 'react-router-dom';
import App from './App';
import Home from './pages/Home/Home';
import Book from './pages/Book/Book';
import Cart from './pages/Cart/Cart';
import Error from './pages/Error/Error';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';

export const router = createHashRouter([
	{
		path: '/',
		element: <App />,
		children: [
			{
				index: true,
				element: <Home />,
			},
			{
				path: '/book',
				element: <Book />,
			},
			{
				path: '/cart',
				element: <Cart />,
			},
			{
				path: '/login',
				element: <Login />,
			},
			{
				path: '/register',
				element: <Register />,
			},
			{
				path: '*',
				element: <Error />,
			},
		],
	},
]);