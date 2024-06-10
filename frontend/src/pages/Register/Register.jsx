import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';

function Register() {

	const navigate = useNavigate();
	const [formData, setFormData] = useState({
		username: '',
		email: '',
		password: '',
	});

	const handleChange = e => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = async e => {
		e.preventDefault();
		try {

			const response = await axios.post('http://localhost:5000/users/register', formData);
			console.log('Registration success:', response.data);

			alert('Registration successful!');
			
			navigate('/login');

		} catch (error) {
			if (error.response) {
		
				console.error('Registration failed:', error.response.data);

			} else if (error.request) {
				
				console.error('No response received:', error.request);

			} else {
				
				console.error('Error:', error.message);
				
			}
		}
	};

	return (
		<section id='register' className='register'>
			<div className='container'>
				<div className='register__wrapper'>
					<h2>Sign up</h2>
					<form className='register__form' onSubmit={handleSubmit}>
						<div>
							<label>Username: </label>
							<input type='text' name='username' className='form__username' required onChange={handleChange} />
						</div>
						<div>
							<label>Email: </label>
							<input type='email' name='email' className='form__email' required onChange={handleChange} />
						</div>
						<div>
							<label>Password: </label>
							<input type='password' name='password' className='form__password' required onChange={handleChange} />
						</div>
						<div className='register__button'>
							<button type='submit'>Register</button>
						</div>
						<Link to='/login'>Already have an account? Sign in!</Link>
					</form>
				</div>
			</div>
		</section>
	);
}

export default Register;
