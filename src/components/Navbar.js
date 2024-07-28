import React, { useEffect, useState } from 'react';
import './Navbar.css';

function scrollToSection(elementId) {
  const element = document.getElementById(elementId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
}

function updateActiveNav(navLinks) {
  const fromTop = window.scrollY;
  navLinks.forEach(link => {
    const section = document.getElementById(link.getAttribute('href').substring(1));
    if (section) {
      const sectionTop = section.offsetTop;
      const sectionBottom = sectionTop + section.clientHeight;

      if (fromTop >= sectionTop && fromTop < sectionBottom) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    }
  });
}

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const links = document.querySelectorAll('.Navbar-links a');

    links.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = e.target.getAttribute('href').substring(1);
        scrollToSection(targetId);
        updateActiveNav(links);
      });
    });

    window.addEventListener('scroll', () => {
      updateActiveNav(links);
    });

    return () => {
      links.forEach(link => {
        link.removeEventListener('click', scrollToSection);
      });
      window.removeEventListener('scroll', () => updateActiveNav(links));
    };
  }, []);

  return (
    <nav className="Navbar">
      <img className='Crens' src='crens-text.png' alt='crens-text' />
      <div className={`menu-icon ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={`Navbar-links ${isMenuOpen ? 'open' : ''}`}>
        <li><a href="#about" onClick={() => setIsMenuOpen(false)}>About</a></li>
        <li><a href="#research" onClick={() => setIsMenuOpen(false)}>Research</a></li>
        <li><a href="#mission" onClick={() => setIsMenuOpen(false)}>Mission</a></li>
        <li><a href="#objectives" onClick={() => setIsMenuOpen(false)}>Objectives</a></li>
        <li><a href="#contact" onClick={() => setIsMenuOpen(false)}>Contact Us</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;