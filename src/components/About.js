import React from "react";
import "./About.css";

function About({ title }) {
  return (
    <div id="about">
      <section className="About active">
        <div className="About-image">
          <img
            className="About-image"
            src="crens_logo_final.png"
            alt="CRENS Logo"
          />
        </div>
        <div className="About-content">
          <h1>{title}</h1>
          <p>
            The proposed Centre of Excellence for Homeland Security at BITS
            Pilani Hyderabad named as Centre of Research Excellence for National
            Security (CRENS) represents a strategic initiative to enhance the
            nation's security capabilities through indigenous technology
            development. By fostering collaboration, innovation, and skill
            development, the CRENS will play a crucial role in making the
            country self-reliant in the national security domain. The success of
            this initiative will significantly contribute to the nation's
            strategic and economic growth, ensuring a secure and prosperous
            future.
          </p>
        </div>
      </section>
      <section className="Section-2">
        <div className="Section-2-content">
          <h1>Birla Institute of Technology & Science (BITS), Pilani</h1>
          <p>
            The institute was established in its present form in 1964. During
            this period, the institute's transformation from a regional
            engineering college to a national university was backed by G.D.
            Birla. The university has expanded its campuses from Pilani to Goa,
            Hyderabad and Dubai. After expansion to a campus in Dubai, it has
            become the first international deemed university, spearheading
            research in science and engineering with four established campuses
            and fifteen academic departments. Backed by the Aditya Birla Group,
            the institute secures extramural research funds from industries and
            various government agencies.
          </p>
        </div>
        <div className="Section-2-image">
          <img
            className="Section-2-image"
            src="bits-logo-bg.png"
            alt="BITS Logo"
          />
        </div>
      </section>
    </div>
  );
}

export default About;
