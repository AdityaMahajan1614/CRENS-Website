import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Button from './components/Button';
import Section from './components/Section';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <header className="App-header">
        <img src="crens-logo.jpg" className="App-image" alt="CRENS" />
        <h1>Center for Research Excellence in National Security (CRENS)</h1>
        <p>
          At the Center for Research Excellence in National Security (CRENS), we are committed to conducting technical research and solutions for the most pressing challenges in national security. Our team of experts is dedicated to developing innovative solutions and contributing to the global discourse on security issues.
        </p>
        <Button text="Our Research Focus" />
      </header>
      <Section title="Our Mission" />
      <Footer />
    </div>
  );
}

export default App;
