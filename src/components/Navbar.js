import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="Navbar">
          <img className='Crens' src='crens-text.png' alt='crens-text' />
      <ul className="Navbar-links">
        <li><a href="#about">About</a></li>
        <li><a href="#research">Research</a></li>
        <li><a href="#mission">Mission</a></li>
        <li><a href="#objectives">Objectives</a></li>
        <li><a href="#contact">Contact Us</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
