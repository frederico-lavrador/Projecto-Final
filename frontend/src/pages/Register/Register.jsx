function Register() {

    return (
        <section id='register' className='register'>
            <div className='container'>
                <div className='register__wrapper'>
                    <h2>Sign up</h2>
					<form className='register__form'>
						<div>
							<label>Username: </label>
							<input type='text' className='form__username' required />
                        </div>
						<div>
							<label>Email: </label>
							<input type='email' className='form__email' required />
                        </div>
                        <div>
                            <label>Password: </label>
                            <input type="password" className="form__password" required />
                        </div>
                        <div className="register__button">
                            <button type="submit">Register</button>
                        </div>
					</form>
				</div>
            </div>
        </section>
		);

}

export default Register;