import React from 'react';
import './Section.css';

function Section({ title }) {
  return (
    <section className="Section">
      <h2>{title}</h2>
      <p>Insert text here...</p>
    </section>
  );
}

export default Section;
