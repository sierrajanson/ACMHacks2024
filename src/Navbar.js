import React from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import logo from './acmlogo.png'; 

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="icon-container">
        <Link to="/home">
          <img src={logo} alt="Logo" className="logo" />
        </Link>
      </div>
      <div className="link_container">
        <li>
          <Link to="/" className="link">Login</Link>
        </li>
        <li>
          <Link to="/home" className="link">Home</Link>
        </li>
      </div>
    </nav>
  );
}

export default Navbar;
