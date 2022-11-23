import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';
import login from './img/login.jpg';

const Login = () => {
  return(
    <div className="login">
      <div className="login__img">
        <img src={login} alt="image"/>
      </div>
      <div className="login__form-page">
        <form className="login__form">
            <h1>Welcome Back!</h1>
            <div className="login__form-inputs">
              <input type="email" placeholder="Email"/>
              <input type="password" placeholder="Password"/>
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
