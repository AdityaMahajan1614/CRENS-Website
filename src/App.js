import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import About from './components/About';
import './App.css';
import Research from './components/Research';
import Mission from './components/Mission';
import Objectives from './components/Objectives';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Navbar />
      <About title="Center for Research Excellence in National Security" />
      <Research title="Research Plans" />
      <Mission title="Mission" />
      <Objectives title="Objectives" />
      <Contact title="Contact" />
      <Footer />
    </div>
  );
}

export default App;
