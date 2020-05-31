import React, { Component } from 'react'
import Img from 'react-image'
import Img1 from "../images/tech.png";
import html from '../tech-logo/html5.svg';
import css from '../tech-logo/css-3.svg';
import git from '../tech-logo/git.svg';
import netlify from '../tech-logo/netlify.png'
import javascript from '../tech-logo/javascript.svg';
import react from '../tech-logo/reactjs.svg';
import vscode from '../tech-logo/vscode.png';


export default class Technology extends Component {
    render() {
        return (
            <div className="technology">
                 <section className="teach-skills">
                <h1 className="teach-1" data-aos="fade-up">Build A Strong Technical Foundation 
                <h6 className="teach-1">Become a master in <span className="why-access"> frontend development</span>..!</h6></h1>
                <Img src={Img1} className="skillsimage" data-aos="fade-up"/> 
            </section>
    
                <h2> Tech we use</h2>
                <div className="logo-icons">
                    <div class="box"><a href="https://github.com/"><Img src={git} alt="git"/></a></div>
                    <div class="box"><a href="https://html.spec.whatwg.org/multipage/"><Img src={html} alt="html"/></a></div>
                    <div class="box"><a href="https://html.spec.whatwg.org/multipage/"><Img src={css} alt="css"/></a></div>
                    <div class="box"><a href="https://code.visualstudio.com/"><Img src={vscode} alt="vscode"/></a></div>
                    <div class="box"><a href="https://www.javascript.com/"><Img src={javascript} alt="javascript"/></a></div>
                    <div class="box"><a href="https://reactjs.org/"><Img src={react} alt="react"/></a></div>
                    <div class="box"><a href="https://www.netlify.com/"><Img src={netlify} alt="netlify"/></a></div>
                </div>
            </div>
        )
    }
}
