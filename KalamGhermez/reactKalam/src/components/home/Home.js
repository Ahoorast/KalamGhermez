import React from 'react';
import { Link } from "react-router-dom";
import './Home.css';

const Home = () => {

	return(
			<div className="header">
				<div className="header__nav">
					<div className="header__nav-right">
						<input type="text" placeholder="Search..."/>
						<div className="header__nav-btns">
							<Link to="/login" className="header__nav-links">Login</Link>
							<Link to="/signup" className="header__nav-links signup">Signup</Link>
						</div>
					</div>
				</div>
				<div className="header__fsection">
					<h1>ASK YOUR QUESTIONS!</h1>
				</div>
				<div className="header__ssection">
				</div>
			</div>
	);

}


export default Home;
