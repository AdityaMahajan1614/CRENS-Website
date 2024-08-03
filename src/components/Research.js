import React from 'react';
import './Research.css';

function Research({ title }) {
  return (
    <section className="Research" id="research">
      
      <div className='Research-content'>
        <h1>{title}</h1>
        <p>In an increasingly complex global security landscape, there is a critical need for developing indigenous technologies to ensure national security encompassing security at international borders as well as internal security. Many Government agencies both at centre level as well as states level and industries (both in public sector and private sector) are engaged in the domain of homeland security putting their brains in various fields like strategic planning, security implementation on the field, state of art technology design & development and production of various security systems & services. </p>
        <p>The CRENS will actively seek collaborations with other research centres and academic institutions, both nationally and internationally. Joint research projects, knowledge exchange programs, and academic partnerships will enhance the research capabilities and broaden the impact of the CRENS.</p>
        <p>The Innovation and Incubation Cell will support budding entrepreneurs in developing start-ups focused on national security technologies. The cell will provide mentorship, access to funding, laboratory facilities, and networking opportunities with industry leaders and investors. The aim is to translate research outcomes into viable products and solutions. The existing Technology Incubation Centres of all the campuses of BITS Pilani can extend their services to this end.</p>
      </div>
      <div className="Research-image">
        <div class="container">
          <div class="box">
            <img src="Research1.png" alt="Lab" />
            {/* <span>Lab 1</span> */}
          </div>
          <div class="box">
            <img src="Research2.png" alt="Lab" />
            {/* <span>Lab 2</span> */}
          </div>
          <div class="box">
            <img src="Research3.png" alt="Lab" />
            {/* <span>Lab 3</span> */}
          </div>
          <div class="box">
            <img src="Research4.png" alt="Lab" />
            {/* <span>Lab 4</span> */}
          </div>
         </div>
      </div>
      
    </section>
  );
}

export default Research;
