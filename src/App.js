import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Section from './components/Section';
import Section2 from './components/Section2';
import './App.css';
import Research from './components/Research';
import Mission from './components/Mission';
import Objectives from './components/Objectives';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Section title="Center for Research Excellence in National Security" />
      <Section2 title="Birla Institute of Technology & Science (BITS), Pilani" />
      <Research title="Research Plans" />
      <Mission title="Mission" />
      <Objectives title="Objectives" />
      <Contact title="Contact" />
      <Footer />
    </div>
  );
}

export default App;
