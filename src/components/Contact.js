import React from 'react';
import './Contact.css';

function Contact({ title }) {
  return (
    <section className="Contact" id="contact">
      <div className='Contact-content'>
        <h1>{title}</h1>
        <div className="contact-links">
          <a href="https://drive.google.com/file/d/1gBO_LoTy5UnOrc-XMiKSSM6UfCyQGUhD/view" className="contact-link" target="_blank">CRENS Brochure</a>
          <a href="https://drive.google.com/file/d/1971X1H7iYf83ykqHwDyyLSA0lKgWuXQY/view" className="contact-link" target="_blank">Research Compendium</a>
          <a href="https://sites.google.com/view/crens/home" className="contact-link" target="_blank">Know More</a>
        </div>
        <p>Email us at crens@bits-pilani.ac.in or research@bits-pilani.ac.in</p>
      </div>
    </section>
  );
}

export default Contact;
