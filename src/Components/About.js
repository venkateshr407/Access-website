import React, { Component } from 'react'
import Img from 'react-image'
import Img1 from "../images/web development1.png";
import Img2 from "../images/career-advencement.png";

export default class About extends Component {
    render() {
        return (
            <div className="container">
                <div className="about">
                <h1 class="title">What is Access ?</h1>
                    <div class="titles" data-aos="fade-up">                         
                    <p data-aos="fade-up"><Img src={Img1} data-aos="fade-up"></Img><br/><span class="access">Access</span> is an initiative started by a bunch of professional's from various disciplines (engineering/ education/ finance) with 
                     only one goal <span class="access" data-aos="fade-up">"Make technology education accessible in rural area's".</span></p>
                    </div>  
                </div>
                <div className="about-1">
                    <h1 className="title" id="skills" >Why Access ? </h1>                       
                        <div class="titles">
                            <p>The courses under <span class="access">access</span> are carefully crafted and heavily foused on helping students to build real world skils in the opted area interest. These courses are taught by industry professional's and the curriculum is always updated and maintained up to the industry standards.</p>                       <p data-aos="fade-up">Although the aim of <span class="access">access</span> is to provide courses across all the disciplines, for the initial offering we have introduced two courses in ComputerScience /Programming /Development.</p>
                        </div>
                        <ul className="list" data-aos="fade-up">
                                 <li> <p className="accesspara"><h3>Access 101 </h3> Introduction to modern web development.</p></li>
                                 <li> <p className="accesspara"><h3>Access 102 </h3> Introduction to cross platform app development using <span class="access">react native</span>.</p></li>                             </ul>
                </div>
                <div className="todays">
                    <h1 className="demand">Gain the skill's you need to start your career.</h1>
                    <p>Just want try something new.</p>
                    <img src={Img2} className="skillimage"/>
                </div>
            </div>
        )
    }
}

