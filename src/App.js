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

function App() {
  return (
    <div className="App">
      <Navbar />
      <About title="Center for Research Excellence in National Security" />
      <Research title="Research Plans" />
      <Mission title="Mission" />
      <Training  />
      <Objectives title="Objectives" />
      <Timeline />
      <Contact title="Contact" />
      <Footer />
    </div>
  );
}

export default App;
