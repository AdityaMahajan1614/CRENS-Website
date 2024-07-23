import React from 'react';
import './Section.css';

function Section({ title }) {
  return (
    <section className="Section">
      <div className="Section-image">
        <img className="Section-image" src="crens-logo.png" alt="CRENS Logo" />
      </div>
      <div className='Section-content'>
        <h1>{title}</h1>
        <p>The proposed Centre of Excellence for Homeland Security at BITS Pilani Hyderabad named as Centre of Research Excellence for National Security (CRENS) represents a strategic initiative to enhance the nation's security capabilities through indigenous technology development. By fostering collaboration, innovation, and skill development, the CRENS will play a crucial role in making the country self-reliant in the national security domain. The success of this initiative will significantly contribute to the nation's strategic and economic growth, ensuring a secure and prosperous future.</p>
      </div>
      
    </section>
  );
}

export default Section;
