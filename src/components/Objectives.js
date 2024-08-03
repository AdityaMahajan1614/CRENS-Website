import React from 'react';
import './Objectives.css';

function Objectives({ title }) {
  return (
    <section className="Objectives" id="objectives">
        
      <div className='Objectives-content'>
        <h1>{title}</h1>
        <ul>
          <li>To identify all the research collaborative projects being undertaken by various faculty across all the campuses of BITS Pilani under Dean R & I which have got relevance to the national security and bring them under the umbrella of CRENS. </li>
          <li>To interact with all the stake holders who are engaged in national security domain and assimilate their operational filed challenges, science & technology challenges and skill challenges of human resources in order to translate them in to collaborative research projects to evolve innovative solutions and to develop indigenous technologies for national security.</li>
          <li>To brainstorm among the faculty, research scholars and students of the institute to harness innovative technology ideas that align with the present or future roadmaps of stake holders in their working domain and carryout ab initio research at the institute and converge them in to cutting edge solutions to the stake holders.</li>
          <li>To study and assimilate the international scenario and state of art technologies and evolve the gaps with respect to domestic scenario and technologies and workout a road map to bridge the gap over a period of time.</li>
          <li>To design and conduct short-term and long-term certification courses to enhance the skill sets of working professionals in science, technology, management, and leadership domains within the national security sector.</li>
          <li>To encourage and support young entrepreneurs in incubating start-ups that translate developed technologies into prototypes and commercial products.</li>
        </ul>
      </div>
      <div class="container">
          <div class="box">
            <img src="Apparatus1.png" alt="Apparatus" />
            {/* <span>Lab 1</span> */}
          </div>
          <div class="box">
            <img src="Apparatus2.png" alt="Apparatus" />
            {/* <span>Lab 2</span> */}
          </div>
          <div class="box">
            <img src="Apparatus3.png" alt="Apparatus" />
            {/* <span>Lab 3</span> */}
          </div>
          <div class="box">
            <img src="Apparatus4.png" alt="Apparatus" />
            {/* <span>Lab 4</span> */}
          </div>
        </div>
    </section>
  );
}

export default Objectives;
