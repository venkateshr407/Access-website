import React, { Component } from 'react'
import Img from 'react-image'
import Img1 from "../images/Group.svg";
import code from "../images/code1.svg";
import Img2 from "../images/worktogether.png";
import Img3 from "../images/codeandgit.png";
import access101 from "../images/Image-1.svg";
import access102 from "../images/coding3.png";
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
                    
                    <h1 className="title-1">Why <span className="classaccess">Access</span> ? </h1>                       
                    
                        <div class="titles">
                        <section className="section-flex">
                            <img src={code} className="why"/>
                             </section>
                             <p>The courses under <span class="access">access</span> are carefully crafted and heavily foused on helping students to build real world skils in the opted area interest. These courses are taught by industry professional's and the curriculum is always updated and maintained up to the industry standards. <br/>
                            <br/>                  
                            <img src={Img3} className="codetogit"/>
                            
                             Although the aim of <span class="access">access</span> is to provide courses across all the disciplines, for the initial offering we have introduced two courses in ComputerScience /Programming /Development.</p>
                            
                        </div>
                
                    
                        <div className="sections" data-aos="fade-up">
                            <div className="one">
                                 <p className="accesspara"><h3>Access 101 </h3> Introduction to modern web development.</p>
                            </div>
                            <div className="two">
                                <p className="accesspara"><h3>Access 102 </h3> Introduction to cross platform app development using <span class="access">react native</span>.</p>                     
                            </div>
                        </div>
        
                </div>
                </div>
        
        )
    }
}

