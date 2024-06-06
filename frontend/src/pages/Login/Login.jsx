import React, { useState } from 'react';
import axios from 'axios';

function Login() {
	const [formData, setFormData] = useState({ username: '', password: '' });
	const [error, setError] = useState(null);

	const handleChange = e => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const handleSubmit = async e => {
		e.preventDefault();
		try {
			const response = await axios.post('http://localhost:5000/users/login', formData);
			console.log('Login success:', response.data);
			localStorage.setItem('token', response.data.token);
		} catch (error) {
			if (error.response) {
				setError(error.response.data.error);
				console.error('Login failed:', error.response.data);
			} else if (error.request) {
				setError('No response received from server.');
				console.error('No response received:', error.request);
			} else {
				setError('Error occurred during login.');
				console.error('Error:', error.message);
			}
		}
	};

	return (
		<section id='login' className='login'>
			<div className='container'>
				<div className='login__wrapper'>
					<h2>Login</h2>
					{error && <p style={{ color: 'red' }}>{error}</p>}
					<form className='login__form' onSubmit={handleSubmit}>
						<div>
							<label>Username: </label>
							<input type='text' name='username' className='form__username' required onChange={handleChange} />
						</div>
						<div>
							<label>Password: </label>
							<input type='password' name='password' className='form__password' required onChange={handleChange} />
						</div>
						<div className='login__button'>
							<button type='submit'>Login</button>
						</div>
					</form>
				</div>
			</div>
		</section>
	);
}

export default Login;
