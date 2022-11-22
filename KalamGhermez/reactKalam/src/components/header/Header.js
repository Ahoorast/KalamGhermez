import React from 'react';
import './Header.css';

const Header = () => {

	return(
		<div className="header">
			<div className="header__nav">
				<div className="header__nav-right">
					<input type="text" placeholder="Search..."/>
					<div className="header__nav-btns">
						<p>Login</p>
						<p>Signup</p>
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


export default Header;
