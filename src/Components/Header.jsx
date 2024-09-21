import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header>
      <a href="#" className="logo">Royal <span>Fitness</span></a>
      <div className="bx bx-menu" id="menu-icon"></div>
      <ul className="navbar">
        <li><a href="#home">Home</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#about">About Us</a></li>
        <li><a href="#plans">Pricing</a></li>
        <li><a href="#review">Review</a></li>
      </ul>
      <div className="top-btn">
        <a href="#contact" className="nav-btn">Join Us</a>
      </div>
    </header>
  );
};

export default Header;
