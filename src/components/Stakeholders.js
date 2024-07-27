import React from 'react';
import './Stakeholders.css';

const stakeholderData = [
    { abbr: 'BRO', full: 'Border Roads Organisation', desc: 'Agency under Indian Army responsible for road construction in border areas.' },
    { abbr: 'DSA', full: 'Defence Space Agency', desc: 'Responsible for space warfare and space situational awareness.' },
    { abbr: 'DCyA', full: 'Defence Cyber Security Agency', desc: 'Handles cyber security threats and related issues for the defence forces.' },
    { abbr: 'CISC', full: 'Chairman Chiefs of Staff Committee', desc: 'Senior-most military appointment in India\'s armed forces.' },
    { abbr: 'NSCS', full: 'National Security Council Secretariat', desc: 'Assists the National Security Advisor in national security matters.' },
    { abbr: 'NCSCO', full: 'National Cyber Security Coordinator Office', desc: 'Coordinates cyber security activities across various agencies.' },
    { abbr: 'DRDO', full: 'Defence Research and Development Organisation', desc: 'Premier agency for military research and development in India.' },
    { abbr: 'DPSUs', full: 'Defence Public Sector Units', desc: 'Government-owned corporations involved in defence production.' },
    { abbr: 'DGQA', full: 'Directorate General Quality Assurance', desc: 'Ensures quality of defence equipment and stores.' },
    { abbr: 'DGAQA', full: 'Directorate General of Aeronautical Quality Assurance', desc: 'Responsible for quality assurance of aeronautical equipment.' },
    { abbr: 'DGNAI', full: 'Directorate General of Naval Armament Inspection', desc: 'Ensures quality of naval armaments and equipment.' },
    { abbr: 'MSQAA', full: 'Missile Systems Quality Assurance Agency', desc: 'Ensures quality of missile systems and related equipment.' },
    { abbr: 'DOS', full: 'Department of Space', desc: 'Manages India\'s space program and related activities.' },
    { abbr: 'DAE', full: 'Department of Atomic Energy', desc: 'Responsible for India\'s nuclear program and related research.' },
    { abbr: 'DGS', full: 'Directorate General of Security', desc: 'Oversees security aspects of various sensitive organizations.' },
    { abbr: 'ARC', full: 'Aviation Research Centre', desc: 'Intelligence gathering agency focusing on aerial reconnaissance.' },
    { abbr: 'SFF', full: 'Special Frontier Force', desc: 'Special forces unit of India for covert operations.' },
    { abbr: 'IB', full: 'Intelligence Bureau', desc: 'Domestic intelligence agency of India.' },
    { abbr: 'CISF', full: 'Central Industrial Security Force', desc: 'Provides security to industrial units and other government installations.' },
    { abbr: 'CRPF', full: 'Central Reserve Police Force', desc: 'Largest central armed police force in India.' },
    { abbr: 'BSF', full: 'Border Security Force', desc: 'Primary border guarding force of India.' },
    { abbr: 'ITBP', full: 'Indo-Tibetan Border Police', desc: 'Central armed police force for India\'s border with China.' },
    { abbr: 'SSB', full: 'Sashastra Seema Bal', desc: 'Border guarding force for India\'s borders with Nepal and Bhutan.' },
    { abbr: 'NIA', full: 'National Investigation Agency', desc: 'Counter-terrorism law enforcement agency.' },
    { abbr: 'CBI', full: 'Central Bureau of Investigation', desc: 'Premier investigating agency of India.' },
    { abbr: 'OCTOPUS', full: 'Organisation for Counter Terrorist Operations', desc: 'Elite anti-terror outfit of Andhra Pradesh and Telangana.' }
  ];

function Stakeholders({ title }) {
  return (
    <section className="stakeholders">
      <h2>{title}</h2>
      <div className="stakeholder-grid">
        {stakeholderData.map((stakeholder, index) => (
          <div key={index} className="stakeholder-item">
            <div className="abbr">{stakeholder.abbr}</div>
            <div className="details">
              <h3>{stakeholder.full}</h3>
              <p>{stakeholder.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Stakeholders;