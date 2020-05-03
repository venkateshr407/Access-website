import React, { Component } from 'react'
import Img from 'react-image'
import Img1 from "../images/Engineering.jpg";
import Img2 from "../images/worktogether.png";
import Img3 from "../images/codeandgit.png";

export default class About extends Component {
    render() {
        return (
            <div className="container" id="about">
                <div className="about">
                <h1 class="title">What is <span className="classaccess"> Access</span> ?</h1>
                    <section className="titles-grid" data-aos="fade-up">
                        
                    <p data-aos="fade-up"><br/><span class="access">Access</span> is an initiative started by a bunch of professional's from various disciplines (engineering/ education/ finance) with 
                                only one goal <span class="access" data-aos="fade-up">"Make technology education accessible in rural area's".</span></p>
                    <Img src={Img1} data-aos="fade-up"></Img>                        
    </section>  
                </div>
                <div className="about-1">
                    <h1 className="title">Why <span className="classaccess">Access</span> ? </h1>                       
                        <div class="titles">
                            <p>The courses under <span class="access">access</span> are carefully crafted and heavily foused on helping students to build real world skils in the opted area interest. These courses are taught by industry professional's and the curriculum is always updated and maintained up to the industry standards.</p>                      
                            <img src={Img3} className="codetogit"/>
                             <p data-aos="fade-up">Although the aim of <span class="access">access</span> is to provide courses across all the disciplines, for the initial offering we have introduced two courses in ComputerScience /Programming /Development.</p>
                        </div>
                        <ul className="list" data-aos="fade-up">
                                 <li> <p className="accesspara"><h3>Access 101 </h3> Introduction to modern web development.</p></li>
                                 <li> <p className="accesspara"><h3>Access 102 </h3> Introduction to cross platform app development using <span class="access">react native</span>.</p></li>                             </ul>
                </div>
                <section className="container-gain">
                <div className="todays">
                    <h1 className="demand">Gain the skill's you need to start your career.</h1>
                    <p>Just want to try something new.</p>
                    <img src={Img2} className="skillimage"/>
                    </div>
                    </section>
                </div>
        
        )
    }
}

