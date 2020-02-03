import React from 'react'
import Img from 'react-image'
import Img1 from "../images/programming.png";
function Aboutaccess() {
    return (
        <div class="gain" data-aos="fade-up">
     
<div class="skills" id="about" data-aos="fade-up">
        <h1 data-aos="fade-up">Skills you learn here!</h1>
        <p data-aos="fade-up">Learn modern web development in access.</p>
     <Img src={Img1} data-aos="fade-up"/>
        
        
<div class="grid-container">
    {/* <div class="wrapper"> */}
        <div class="one" data-aos="fade-up">
            <h2>Github</h2>
            <p>GitHub is a code hosting platform for version control and collaboration. It lets you and others work together on projects from anywhere. 
                GitHub is a open source community platform. </p>
        </div>
        <div class="two" data-aos="fade-up">
            <h2>HTML5 & CSS3</h2>
            <p>HTML is the standard markup language for documents designed to be displayed in a web browser. It can be assisted by technologies such as CSS and scripting languages such as JavaScript.</p>
        </div>
        <div class="three" data-aos="fade-up">
            <h2>Javascript</h2>
            <p>JavaScript is a client-side scripting language, which means the source code is processed by the client's web browser rather than on the web server.</p>
        </div>
        <div class="four" data-aos="fade-up">
            <h2>ReactJS</h2>
            <p>A JavaScript library for building user interfaces.React makes it painless to create interactive UIs.</p>
        </div>
        </div>
    </div>
    </div>
    

    )
}

export default Aboutaccess;
