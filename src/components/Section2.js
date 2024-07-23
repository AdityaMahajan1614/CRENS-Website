import React from 'react';
import './Section2.css';

function Section2({ title }) {
  return (
    <section className="Section-2">
      <div className='Section-2-content'>
        <h1>{title}</h1>
        <p>Birla Institute of Technology & Science (BITS), Pilani has established itself as the premier Institution in India for excellence in high quality education in Engineering, Science and Management with mission to cultivate scientific minds in the young men and women enabling them to become leaders of economic and industrial development of the nation. The institute across all the campuses has built reputation in handling cutting edge research projects by collaborating with various government research departments as well as industries.  The institute has been handling about Rs 12 Cr worth of research projects for DRDO and about Rs 3.5 Cr worth of projects for Space Research. The policy of the Government of India to give an impetus to innovation leading to self-reliance in key sectors by reforming the functioning of various research departments to encourage more participation by the academia is opening wide opportunities for BITS to engage the students and faculty to focus on the innovative participation in developing state of art scientific and technological areas needed for the nation. </p>
      </div>
      <div className="Section-2-image">
        <img className="Section-2-image" src="bits-logo-bg.png" alt="BITS Logo" />
      </div>
    </section>
  );
}

export default Section2;