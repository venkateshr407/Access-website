import React from 'react';
import Nav1 from './Components/Nav1';
import Display from './Components/Display';
import About from './Components/About';
import Aboutaccess from './Components/Aboutaccess';
import Timeline from './Components/Timeline';
import Roadmap from './Components/Roadmap';
import Certificate from './Components/Certificate'
import Team from './Components/Team';
import Footer from './Components/Footer';
import Quote from './Components/Quote';
import Teach from './Components/Wewillteach';
import './App.css';

function App() {
  return (
    
      <div>
        <Nav1/>
        <Display/> 
        <About/>
        <Teach/>
        <Aboutaccess/>
        {/* <Roadmap/> */}
        <Timeline/>
        <Certificate/>
        <Team/>
        <Quote/>
        <Footer/>
      </div>
    );
}

export default App;
