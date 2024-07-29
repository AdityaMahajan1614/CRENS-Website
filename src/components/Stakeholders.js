import React from "react";
import "./Stakeholders.css";

const stakeholderData = [
  {
    abbr: "INA",
    full: "Indian Army",
    desc: "Primary land-based branch of the Indian Armed Forces.",
  },
  {
    abbr: "IAF",
    full: "Indian Air Force",
    desc: "Air arm of the Indian Armed Forces.",
  },
  {
    abbr: "IN",
    full: "Indian Navy",
    desc: "Naval branch of the Indian Armed Forces.",
  },
  {
    abbr: "ICG",
    full: "Indian Coast Guard",
    desc: "Maritime law enforcement and search and rescue agency of India.",
  },
  {
    abbr: "BRO",
    full: "Border Roads Organisation",
    desc: "Road construction agency under the Indian Army.",
  },
  {
    abbr: "DSA",
    full: "Defence Space Agency",
    desc: "Agency responsible for space warfare and space situational awareness.",
  },
  {
    abbr: "DCyA",
    full: "Defence Cyber Security Agency",
    desc: "Agency handling cyber security for defence forces.",
  },
  {
    abbr: "CISC",
    full: "Chairman Chiefs of Staff Committee",
    desc: "Senior-most military appointment in India's armed forces.",
  },
  {
    abbr: "NSCS",
    full: "National Security Council Secretariat",
    desc: "Secretariat for the National Security Council.",
  },
  {
    abbr: "NCSCO",
    full: "National Cyber Security Coordinator Office",
    desc: "Office coordinating cyber security efforts across agencies.",
  },
  {
    abbr: "DRDO",
    full: "Defence Research and Development Organisation",
    desc: "Agency responsible for military research and development.",
  },
  {
    abbr: "ARDB",
    full: "Aeronautics Research & Development Board",
    desc: "Board promoting aeronautics research and development.",
  },
  {
    abbr: "DPSUs",
    full: "Defence Public Sector Units",
    desc: "Government-owned corporations in defence production.",
  },
  {
    abbr: "DGQA",
    full: "Directorate General Quality Assurance",
    desc: "Agency ensuring quality of defence equipment.",
  },
  {
    abbr: "DGAQA",
    full: "Directorate General of Aeronautical Quality Assurance",
    desc: "Quality assurance for aeronautical equipment.",
  },
  {
    abbr: "DGNAI",
    full: "Directorate General of Naval Armament Inspection",
    desc: "Quality assurance for naval armaments.",
  },
  {
    abbr: "MSQAA",
    full: "Missile Systems Quality Assurance Agency",
    desc: "Quality assurance for missile systems.",
  },
  {
    abbr: "DOS",
    full: "Department of Space",
    desc: "Department managing India's space program.",
  },
  {
    abbr: "DAE",
    full: "Department of Atomic Energy",
    desc: "Department responsible for India's nuclear program.",
  },
  {
    abbr: "DGS",
    full: "Directorate General of Security",
    desc: "Agency overseeing security for sensitive organizations.",
  },
  {
    abbr: "ARC",
    full: "Aviation Research Center",
    desc: "Intelligence gathering agency for aerial reconnaissance.",
  },
  {
    abbr: "SFF",
    full: "Special Frontier Force",
    desc: "Special forces unit for covert operations.",
  },
  {
    abbr: "MHA",
    full: "Ministry of Home Affairs",
    desc: "Ministry responsible for internal security and domestic policy.",
  },
  {
    abbr: "IB",
    full: "Intelligence Bureau",
    desc: "India's domestic intelligence agency.",
  },
  {
    abbr: "CISF",
    full: "Central Industrial Security Force",
    desc: "Force providing security to industrial units and government installations.",
  },
  {
    abbr: "CRPF",
    full: "Central Reserve Police Force",
    desc: "Largest central armed police force in India.",
  },
  {
    abbr: "BSF",
    full: "Border Security Force",
    desc: "India's primary border guarding organization.",
  },
  {
    abbr: "ITBP",
    full: "Indo-Tibetan Border Police",
    desc: "Central armed police force for India's border with China.",
  },
  {
    abbr: "SSB",
    full: "Seema Suraksha Bal",
    desc: "Border guarding force for Nepal and Bhutan borders.",
  },
  {
    abbr: "NIA",
    full: "National Investigation Agency",
    desc: "Counter-terrorism law enforcement agency.",
  },
  {
    abbr: "CBI",
    full: "Central Bureau of Investigation",
    desc: "Premier investigating agency of India.",
  },
  {
    abbr: "OCTOPUS",
    full: "Organisation for Counter Terrorist Operations",
    desc: "Elite anti-terror unit of Andhra Pradesh and Telangana.",
  },
];

function Stakeholders({ title }) {
  return (
    <section className="stakeholders">
      <h2>{title}</h2>
      <p className="stakeholder-para">
        Following are the key stakeholders who are engaged in the national
        security domain across the country, putting their concerted efforts in
        various fields to strengthen the homeland security from external
        aggression as well as internal threats. The members, apart from State
        Police Services, State Police Departments, State Cyber Security and
        Industries in both Public Sector and Private Sector, are as follows:
      </p>
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
