import React, { useState } from 'react';
import './Timeline.css';

const TimelinePhase = ({ children, isLeftSide, index,}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`timeline-phase ${isHovered ? 'hovered' : ''} ${isLeftSide ? 'left' : 'right'}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="phase-index">Phase {index} </div>
      <div className={`content ${isHovered ? 'visible' : 'hidden'}`}>
        {children}
      </div>
    </div>
  );
};

const Timeline = () => {

  return (
    <div className="timeline-container">
      <h1>Way Forward</h1>
      <div className="timeline">
        <TimelinePhase isLeftSide={true} index={1}>
          <p>Establish the Center of Excellence CRENS, build infrastructure, induct the members of CRENS by domain experts, and form an Advisory Board. Consolidate all ongoing national security-relevant research projects by BITS Pilani faculty under the umbrella of CRENS.</p>
        </TimelinePhase>
        <TimelinePhase isLeftSide={false} index={2}>
          <p>Initiate interaction and partnership with various stakeholders to identify and execute collaborative research projects based on mutual interests and national security priorities and launch initial certification courses for working professionals.</p>
        </TimelinePhase>
        <TimelinePhase isLeftSide={true} index={3}>
          <p>Expand partnerships, increase the number of research projects based on stakeholders' requirements, internal brainstorming, study of international scenarios etc., and scale up training programs.</p>
        </TimelinePhase>
        <TimelinePhase isLeftSide={false} index={4}>
          <p>Foster the growth of start-ups, secure additional funding, and continuously evaluate and refine the CRENS activities based on feedback and evolving needs.</p>
        </TimelinePhase>
      </div>
    </div>
  );
};

export default Timeline;