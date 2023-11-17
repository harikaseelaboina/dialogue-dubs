import React from 'react';
import "./Styles/navbar.css";
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="nav-items">
      <a href="/">Home</a>
        <a href="/#about">About</a>
        <a href="/#services">Services</a>
        <a href="/#gallery">Gallery</a>
        <a href="/#contact">Contact</a>
      </div>
      <div className="button-container">
      <Link to="/demo"> <button>Try Demo</button></Link> 
      </div>
    </div>
  );
};

export default Navbar;
