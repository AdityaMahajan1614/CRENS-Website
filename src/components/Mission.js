import React from 'react';
import './Mission.css';

function Mission({ title }) {
  return (
    <section className="Mission" id="mission">
      <div className="Mission-image">
        <img className="Mission-image" src="crens-logo.png" alt="CRENS Logo" />
      </div>
      <div className='Mission-content'>
        <h1>{title}</h1>
        <p>The Centre of Research Excellence for National Security (CRENS) is proposed to be established at BITS Pilani Hyderabad campus owing to its prominent location with an aim to address this need by collaborating with key stakeholders involved in national security. </p>
        <p>Following are the key stake holders who are engaged in national security domain across the country putting their concerted efforts in various fields in order to strengthen the homeland security from external aggression as well as internal threats:</p>
        <ul>
          <li>Indian Armed Forces</li>
          <li>Defence Space Agency (DSA)</li>
          <li>Defence Cyber Security Agency (DCyA)</li>
          <li>Chairman Chiefs of Staff Committee (CISC)</li>
          <li>National Security Council Secretariat (NSCS)</li>
          <li>National Cyber Security Coordinator Office (NCSCO)</li>
          <li>Defence Research and Development Organisation (DRDO)</li>
          <li>Defence Production</li>
          <li>Department of Space (DOS)</li>
          <li>Department of Atomic Energy (DAE)</li>
          <li>Directorate General of Security (DGS)</li>
          <li>Ministry of Home affairs</li>
          <li>State Police Services</li>
          <li>Industries in both Public Sector and Private Sector</li>
        </ul>
        <p>The Centre of Excellence, CRENS shall collaborate with all the above stake holders and  focus on advancing research, fostering innovation, and enhancing the skill sets of professionals to make the country self-reliant in the national security scientific and technological domain.</p>
      </div>
      
    </section>
  );
}

export default Mission;
