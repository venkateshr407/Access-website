import React from 'react'
import Img from 'react-image'
import Img1 from "../images/languages.png";
// import html from "../logo/languages.png";
import github from "../logo/github-1.svg";
import html from "../logo/html-css.png";
import css from "../logo/css-3.svg";
import JavaScript from "../logo/javascript.svg";
import react from "../logo/react.svg";
import nodejs from "../logo/nodejs-icon.svg";
import api from "../logo/api.png"

function Aboutaccess() {
    return (
        <div class="gain">
     
        <div class="skills" id="about">
            <section className="teach-skills">
            <h1 className="teach-1" data-aos="fade-up">Build A Strong Technical Foundation</h1>
            <Img src={Img1} className="skillsimage" data-aos="fade-up"/>
            </section>
        <div class="grid-container">
        <div class="one" data-aos="fade-up">
            <h2>Github</h2>
            <img src={github} className="svg-logo"/>
            <p>GitHub is a code hosting platform for version control and collaboration. It lets you and others work together on projects from anywhere. </p>
        </div>
        <div class="one" data-aos="fade-up">
            <h2>HTML5 & CSS3</h2> 
            <img src={html} className="svg-logo"/>
            <p>HTML is the standard markup language for documents designed to be displayed in a web browser. It can be assisted by technologies such as CSS.</p>
        </div>
        <div class="one" data-aos="fade-up">
            <h2>Javascript & ES6</h2>
            <img src={JavaScript} className="svg-logo"/>
            <p>JavaScript is a client-side scripting language, which means the source code is processed by the client's web browser rather than on the web server.</p>
        </div>
        <div class="one" data-aos="fade-up">
            <h2>ReactJS</h2>
            <img src={react} className="svg-logo"/>
            <p>A JavaScript library for building user interfaces.React makes it painless to create interactive UIs.</p>
        </div>
        <div class="one" data-aos="fade-up">
            <h2>Node.JS</h2>
            <img src={nodejs} className="svg-logo"/>
            <p>Node.js is an open-source, cross-platform, JavaScript runtime environment that executes JavaScript code outside of a browser.</p><br/>
        </div>
        <div class="one" data-aos="fade-up">
            <h2>RESTful</h2>
            <img src={api} className="svg-logo"/>
            <p>Representational state transfer (REST) is web standards based architecture and uses HTTP Protocol.</p>
        </div>
  
        </div><br/>
        
    </div>
  
    </div>
    

    )
}

export default Aboutaccess;
