function Login() {

    return (
			<section id='login' className='login'>
				<div className='container'>
					<div className='login__wrapper'>
						<h2>Welcome!</h2>
						<form className='login__form'>
							<div>
								<label>Username: </label>
								<input type='text' className='form__username' required />
							</div>
							<div>
								<label>Password: </label>
								<input type='text' className='form__password' required />
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