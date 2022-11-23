import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';
import login from './img/login.jpg';

const Login = (props) => {
  const [enteredEmail, setEnteredEmail] = useState('');
  const [enteredPassword, setEnteredPassword] = useState('');
  const [validEmail, setValidEmail] = useState(false);
  const [validPassword, setValidPassword] = useState(false);


  const onEmailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
    if(enteredEmail.includes('@') && event.target.value.trim().length > 0)
      setValidEmail(true);
    else
      setValidEmail(false);
  }

 const onPasswordChangeHandler = (event) => {
   setEnteredPassword(event.target.value);
   if(enteredPassword.trim().length >= 8)
     setValidPassword(true);
   else
     setValidPassword(false);

 }

 const onSubmitHandler = () => {
   const data = {
     email: enteredEmail,
     password: enteredPassword
   }

   props.onCheckLogin(data);
 }

  return(
    <div className="login">
      <div className="login__img">
        <img src={login} alt="nothing"/>
      </div>
      <div className="login__form-page">
        <form className="login__form" onSubmit={onSubmitHandler}>
            <h1>Welcome Back!</h1>
            { !validEmail && <p className="error">Email is not valid</p>}
            { !validPassword && <p className="error">Password is not correct</p>}
            <div className="login__form-inputs">
              <input type="email" placeholder="Email" onChange={onEmailChangeHandler}/>
              <input type="password" placeholder="Password" onChange={onPasswordChangeHandler}/>
            </div>
            <div className="login__form-inf">
              <Link to="/forgotpassword" className="login__form-inf-link">Forgot password</Link>
              <Link to="/signup" className="login__form-inf-link">Signup</Link>
            </div>
          <button className="login__form-btn">Login</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
