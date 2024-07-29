import React from "react";
import "./Mission.css";

function Mission({ title }) {
  return (
    <section className="Mission" id="mission">
      <div class="container">
        <div class="box">
          <img src="Lab1.png" alt="Lab" />
          <span>Lab 1</span>
        </div>
        <div class="box">
          <img src="Lab2.png" alt="Lab" />
          <span>Lab 2</span>
        </div>
        <div class="box">
          <img src="Lab3.png" alt="Lab" />
          <span>Lab 3</span>
        </div>
        <div class="box">
          <img src="Lab4.png" alt="Lab" />
          <span>Lab 4</span>
        </div>
      </div>
      <div className="Mission-content">
        <h1>{title}</h1>
        <p>
          The Centre of Research Excellence for National Security (CRENS) is
          proposed to be established at BITS Pilani Hyderabad campus owing to
          its prominent location with an aim to address this need by
          collaborating with key stakeholders involved in national security.{" "}
        </p>
        <p>
          Key Stakeholders of CRENS are engaged in national security domain
          across the country putting their concerted efforts in various fields
          in order to strengthen the homeland security from external aggression
          as well as internal threats.
        </p>
        <p>
          The Centre of Excellence, CRENS shall collaborate with all the stake
          holders and focus on advancing research, fostering innovation, and
          enhancing the skill sets of professionals to make the country
          self-reliant in the national security scientific and technological
          domain.
        </p>
      </div>
    </section>
  );
}

export default Mission;
