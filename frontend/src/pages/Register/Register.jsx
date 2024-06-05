import React, { useState } from 'react';
import axios from 'axios';

function Register() {

    const [formData, setFormData] = useState({

        username: '',
        email: '',
        password: ''

    });

    const handleChange = (e) => {

        setFormData({

            ...formData,
            [e.target.name]: e.target.value

        });

    };

    const handleSubmit = async (e) => {

        e.preventDefault();

        try {
            
            const response = await axios.post('/users/register', formData);

            console.log(response.data);

        } catch (error) {
            
            console.error('Registration failed', error.response.data.error);

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
								<input type='text' className='form__username' required onChange={handleChange} />
							</div>
							<div>
								<label>Email: </label>
								<input type='email' className='form__email' required onChange={handleChange} />
							</div>
							<div>
								<label>Password: </label>
								<input type='password' className='form__password' required onChange={handleChange} />
							</div>
							<div className='register__button'>
								<button type='submit'>Register</button>
							</div>
						</form>
					</div>
				</div>
			</section>
		);

}

export default Register;