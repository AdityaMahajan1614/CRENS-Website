import React from 'react';
import './Footer.css';

const today = new Date();

function Footer() {
  return (
    <footer className="Footer">
    <div className='Footer-logos'>
      <img className='Footer-logo-bits' src='bits-logo-bg.png' alt='bits-logo' />
      <div className='Footer-headings'>
        <h2 className='Footer-h2'>Birla Institute of Technology And Science, Pilani</h2> 
        <h2 className='Footer-h2'>Center for Research Excellence in National Security (CRENS)</h2>
      </div>
      <img className='Footer-logo' src='crens-logo.png' alt='crens-logo' />
    </div>
      <div className="Footer-contact">
      <p>Address</p>
      <hr className='Footer-hr'/>
        <p>crens@bits-pilani.ac.in</p>
      <hr className='Footer-hr'/>
        <p>Phone</p>
      </div>
    <hr />
    <div>Center for Research Excellence in National Security (CRENS) is a Center of Excellence of BITS Pilani</div>
      <div className='Footer-copyight'> 
      All rights reserved © {today.getFullYear()} | Designed and Developed by CRENS, BITS Pilani
      </div>
    </footer>
  );
}

export default Footer;
