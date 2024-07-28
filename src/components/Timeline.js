import React, { useState } from 'react';
import './Timeline.css';

const svgs = [
          <svg width="100px" height="100px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0_429_10992)">
          <circle cx="12" cy="12" r="9" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M9.5 9.5C9.5 8.8602 9.74408 8.2204 10.2322 7.73224C11.2085 6.75593 12.7915 6.75593 13.7678 7.73224C14.7441 8.70856 14.7441 10.2915 13.7678 11.2678L9.93934 15.0962C9.65804 15.3775 9.5 15.759 9.5 16.1569L9.5 17H14.5" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </g>
          <defs>
          <clipPath id="clip0_429_10992">
          <rect width="24" height="24" fill="white"/>
          </clipPath>
          </defs>
          </svg>,
          <svg width="100px" height="100px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0_429_10991)">
          <circle cx="12" cy="12" r="9" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M10 16.2361C10.5308 16.7111 11.2316 17 12 17C13.6569 17 15 15.6569 15 14C15 12.3431 13.6569 11 12 11L15 7H10" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </g>
          <defs>
          <clipPath id="clip0_429_10991">
          <rect width="24" height="24" fill="white"/>
          </clipPath>
          </defs>
          </svg>,
          <svg width="100px" height="100px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0_429_11136)">
          <circle cx="12" cy="12" r="9" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          <path d="M10.5 7L9.22841 11.4506C8.86337 12.7282 9.8227 14 11.1515 14H14.5M14.5 14V10M14.5 14V17" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </g>
          <defs>
          <clipPath id="clip0_429_11136">
          <rect width="24" height="24" fill="white"/>
          </clipPath>
          </defs>
          </svg>
];

const TimelinePhase = ({ children, index}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div>
      <div
      className={`timeline-phase ${isHovered ? 'hovered' : ''}`} 
      id={`phase-${index}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}>
      {svgs[index-2]}
      <div className="phase-index">Phase {index} </div>
      </div>  
      <div className={`content ${isHovered ? 'visible' : 'hidden'}`} id={`phase-${index}`}>
        {children}
      </div>
    </div>
  );
};

const Timeline = ({title}) => {

  return (
    <div className="timeline-container">
      <h1>{title}</h1>
      <div className="timeline">
      <div>
        <div className={'timeline-phase hovered' } id='phase-1'>
            <svg width="100px" height="100px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_429_11095)">
            <path d="M12.5 17V7L10.5 9" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <circle cx="12" cy="12" r="9" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </g>
            <defs>
            <clipPath id="clip0_429_11095">
            <rect width="24" height="24" fill="white"/>
            </clipPath>
            </defs>
            </svg>
          <div className="phase-index">Phase 1</div>
        </div>  
          <div className={'content visible'} id='phase-1'>
            <p>Establish the Center of Excellence CRENS, build infrastructure, induct the members of CRENS by domain experts, and form an Advisory Board. Consolidate all ongoing national security-relevant research projects by BITS Pilani faculty under the umbrella of CRENS.</p>
          </div>
        </div>
        <TimelinePhase index={2}>
          <p>Initiate interaction and partnership with various stakeholders to identify and execute collaborative research projects based on mutual interests and national security priorities and launch initial certification courses for working professionals.</p>
        </TimelinePhase>
        <TimelinePhase index={3}>
          <p>Expand partnerships, increase the number of research projects based on stakeholders' requirements, internal brainstorming, study of international scenarios etc., and scale up training programs.</p>
        </TimelinePhase>
        <TimelinePhase index={4}>
          <p>Foster the growth of start-ups, secure additional funding, and continuously evaluate and refine the CRENS activities based on feedback and evolving needs.</p>
        </TimelinePhase>
      </div>
    </div>
  );
};

export default Timeline;