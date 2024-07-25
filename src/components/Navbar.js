import React, { useEffect } from 'react';
import './Navbar.css';

function scrollToSection(elementId) {
  const element = document.getElementById(elementId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
}

function Navbar() {
  useEffect(() => {
    // Add smooth scrolling on all links inside the navbar
    const navbarLinks = document.querySelectorAll('.Navbar-links a');
    navbarLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = e.target.getAttribute('href').substring(1);
        scrollToSection(targetId);
      });
    });
  }, []);

  return (
    <nav className="Navbar">
      <img className='Crens' src='crens-text.png' alt='crens-text' />
      <ul className="Navbar-links">
        <li><a href="#about" onClick={(e) => scrollToSection('about')}>About</a></li>
        <li><a href="#research" onClick={(e) => scrollToSection('research')}>Research</a></li>
        <li><a href="#mission" onClick={(e) => scrollToSection('mission')}>Mission</a></li>
        <li><a href="#objectives" onClick={(e) => scrollToSection('objectives')}>Objectives</a></li>
        <li><a href="#contact" onClick={(e) => scrollToSection('contact')}>Contact Us</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;