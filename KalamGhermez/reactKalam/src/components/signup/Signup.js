import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Signup.css';

const Signup = (props) => {

	const [enteredEmail, setEnteredEmail] = useState('');
	const [enteredPassword, setEnteredPassword] = useState('');
	const [enteredConfirmPassword, setEnteredConfirmPassword] = useState('');
	const [enteredUsername, setEnteredUsername] = useState('');
	const [validEmail, setValidEmail] = useState(true);
	const [passwordColor, setPasswordColor] = useState('#ddd');
	const [emailColor, setEmailColor] = useState('#ddd');

	const usernameCahngeHandler = (event) => {
		setEnteredUsername(event.target.value);

	}

	const emailCahngeHandler = (event) => {
		setEnteredEmail(event.target.value);
		if(event.target.value.trim().length === 0 || !enteredEmail.includes('@'))
			setValidEmail(false);
		else
			setValidEmail(true);
	}

	const passwordChangeHandler = (event) => {
		setEnteredPassword(event.target.value);
	}

	const confirmPasswordCahngeHandler = (event) => {
		setEnteredConfirmPassword(event.target.value);

	}

	const check = () => {
		if(validEmail)
			setEmailColor('#ddd');
		else
			setEmailColor('salmon');

		if(enteredPassword === enteredConfirmPassword)
			setPasswordColor('#ddd');
		else
			setPasswordColor('salmon');
	}
	async function onSubmitHandler(event){
		event.preventDefault();
		const userData =  {
			username: enteredUsername,
			email: enteredEmail,
			password: enteredPassword,
			confirmPassword: enteredConfirmPassword
		}

		 const response = await fetch('127.0.0.1:8000/api-auth/register', {
			method: 'POST',
			body: JSON.stringify(userData),
			headers: {
				'Content-Type': 'application/json'
			}
		});
		const data = await response.json();
		console.log(data);

	}
	return(

			<div className="signup-page">
				<div className="square-top"></div>
				<div className="signup-page__img" style={{query: 'min-width: 600px'}}>
					<p>Welcome to KalamGhermez.</p>
				</div>
				<form className="signup-page__form" onSubmit={onSubmitHandler}>
					<h1>Signup</h1>
					<div className="signup-page__form-inputs">
						{ !validEmail && <p className="error">Email is not valid</p> }
						{ (enteredPassword !== enteredConfirmPassword) && <p className="error">Passwords are not matched.</p>}
						<input type="text" placeholder="username" onChange={usernameCahngeHandler}/>
						<input type="email" placeholder="Email" onChange={emailCahngeHandler} onBlur={check} style={{borderColor: emailColor}}/>
						<input type="Password" placeholder="Password" onChange={passwordChangeHandler} onBlur={check} style={{borderColor: passwordColor}}/>
						<input type="password" placeholder="confirm password" onChange={confirmPasswordCahngeHandler} onBlur={check} style={{borderColor: passwordColor}}/>
					</div>
					<div className="signup-page__inf">
						<div className="signup-page__policy">
							<input type="checkbox"/>
							<p>I'm agree with policies</p>
						</div>
						<div>
							<Link to="/login" className="signup-page__haveaccount">Have Account?</Link>
						</div>
					</div>
					<button>Signup</button>
				</form>
			</div>

	);

}

export default Signup;
