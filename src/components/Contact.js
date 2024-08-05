import React from 'react';
import './Contact.css';

function Contact({ title }) {
  return (
    <section className="Contact" id="contact">
      <div className='Contact-content'>
        <h1>{title}</h1>
        <p>Email us at crens@bits-pilani.ac.in or research@bits-pilani.ac.in</p>
      </div>
    </section>
  );
}

export default Contact;
