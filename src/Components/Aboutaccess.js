import React from 'react'
import Img from 'react-image'
import Img1 from "../images/languages.png";
function Aboutaccess() {
    return (
        <div class="gain" data-aos="fade-up">
     
        <div class="skills" id="about" data-aos="fade-up">
            <h1 data-aos="fade-up">Skill's!</h1><Img src={Img1} className="skillsimage" data-aos="fade-up"/>
        <div class="grid-container">
        <div class="one" data-aos="fade-up">
            <h2>Github</h2>
            <p>GitHub is a code hosting platform for version control and collaboration. It lets you and others work together on projects from anywhere. </p>
        </div>
        <div class="one" data-aos="fade-up">
            <h2>HTML5 & CSS3</h2>
            <p>HTML is the standard markup language for documents designed to be displayed in a web browser. It can be assisted by technologies such as CSS.</p>
        </div>
        <div class="one" data-aos="fade-up">
            <h2>Javascript & ES6</h2>
            <p>JavaScript is a client-side scripting language, which means the source code is processed by the client's web browser rather than on the web server.</p>
        </div>
        <div class="one" data-aos="fade-up">
            <h2>ReactJS</h2>
            <p>A JavaScript library for building user interfaces.React makes it painless to create interactive UIs.</p>
        </div>
        <div class="one" data-aos="fade-up">
            <h2>RESTful</h2>
            <p>Representational state transfer (REST) is web standards based architecture and uses HTTP Protocol.</p>
        </div>
        <div class="one" data-aos="fade-up">
            <h2>Node.JS</h2>
            <p>Node.js is an open-source, cross-platform, JavaScript runtime environment that executes JavaScript code outside of a browser.</p>
        </div>
        </div>
    </div>
    </div>
    

    )
}

export default Aboutaccess;
