import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import { router } from './routes.jsx'
import { CartProvider } from './contexts/CartContext.jsx';
import { AuthProvider } from './contexts/AuthContext.jsx';

//* Pages Styles *//
import './index.css'
import './pages/Home/home.css'
import './pages/Register/register.css'
import './pages/Login/login.css'
import './pages/Book/book.css'
import './pages/Cart/cart.css'
import './pages/Error/error.css'

//* Leave default code here, just in case *//
{ 
	/* <React.StrictMode>
    <App />
  </React.StrictMode>, */
}

ReactDOM.createRoot(document.getElementById('root')).render(
	<AuthProvider>
		<CartProvider>
			<RouterProvider router={router} />
		</CartProvider>
	</AuthProvider>
);
