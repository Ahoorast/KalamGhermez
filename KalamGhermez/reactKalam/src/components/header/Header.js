import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return(
    <div className="header__nav">
      <div className="header__nav-left">
        <div className="header__nav-left-logo"><Link to="/" className="header__nav-left-links">LOGO</Link></div>
        <div className="header__nav-left-tabs">
          <ul>
            <li><Link to="/products" className="header__nav-left-links">Products</Link></li>
            <li><Link to="/heros" className="header__nav-left-links">Heros</Link></li>
            <li><Link to="/lastquestion" className="header__nav-left-links">LQ</Link></li>
            <li><Link to="/about" className="header__nav-left-links">About</Link></li>
            <li><Link to="/articles" className="header__nav-left-links">Articles</Link></li>
            <li><Link to="/articles" className="header__nav-left-links">Teams</Link></li>

          </ul>
        </div>
      </div>
      <div className="header__nav-right">
        <input type="text" placeholder="Search..."/>
        <div className="header__nav-btns">
          <Link to="/login" className="header__nav-links">Login</Link>
          <Link to="/signup" className="header__nav-links signup">Signup</Link>
        </div>
      </div>
    </div>

  );
}

export default Header;
