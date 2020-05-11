import React from 'react';
import Nav1 from './Components/Nav1';
import Display from './Components/Display';
import About from './Components/About';
import Aboutaccess from './Components/Aboutaccess';
import Roadmap from './Components/Roadmap';
import Certificate from './Components/Certificate'
import Team from './Components/Team';
import Footer from './Components/Footer';
import Quote from './Components/Quote';

import './App.css';

function App() {
  return (
    
      <div>
        <Nav1/>
        <Display/> 
        <About/>
        <Aboutaccess/>
        <Roadmap/>
        <Certificate/>
        <Team/>
        <Quote/>
        <Footer/>
      </div>
    );
}

export default App;
