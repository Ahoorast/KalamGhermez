import React from 'react';
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";
import './Home.css';

const Header = () => {

	return(
		<Router>
			<div className="header">
				<div className="header__nav">
					<div className="header__nav-right">
						<input type="text" placeholder="Search..."/>
						<div className="header__nav-btns">
							<Link to="/login">Login</Link>
							<Linnk to="/signup">Signup</Link>
						</div>
					</div>
				</div>
				<div className="header__fsection">
					<h1>ASK YOUR QUESTIONS!</h1>
				</div>
				<div className="header__ssection">
				</div>
			</div>
		</Router>
	);

}


export default Header;
