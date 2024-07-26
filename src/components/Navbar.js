import React, { useEffect } from 'react';
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

  useEffect(() => {
    const links = document.querySelectorAll('.Navbar-links a');

    // Add smooth scrolling on all links inside the navbar
    links.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = e.target.getAttribute('href').substring(1);
        scrollToSection(targetId);
        updateActiveNav(links); // Update active nav after clicking
      });
    });

    // Update active nav on scroll
    window.addEventListener('scroll', () => {
      updateActiveNav(links);
    });

    return () => {
      // Clean up event listeners
      links.forEach(link => {
        link.removeEventListener('click', scrollToSection);
      });
      window.removeEventListener('scroll', () => updateActiveNav(links));
    };
  }, []);

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