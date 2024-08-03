import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import About from './components/About';
import './App.css';
import Research from './components/Research';
import Mission from './components/Mission';
import Objectives from './components/Objectives';
import Contact from './components/Contact';
import Timeline from './components/Timeline';
import Training from './components/Training';
import Stakeholders from './components/Stakeholders';
import Showslide from './components/Showslide'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Showslide/>
      <About title="Center for Research Excellence in National Security" />
      <Stakeholders title="Key Stakeholders" />
      <Research title="Research Plans" />
      <Mission title="Mission" />
      <Training title="Training of Working Professionals with Custom-Designed Certification Courses" />
      <Objectives title="Objectives" />
      <Timeline title="Way Forward"/>
      <Contact title="Contact Us" />
      <Footer />
    </div>
  );
}

export default App;
