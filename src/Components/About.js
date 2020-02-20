import React from 'react'
import Img from 'react-image'
import Img1 from "../images/web development.png";
import Img2 from "../images/career-advencement.png";

export default function About() {
    return (
       <section class="myg-hero-image">
            <header class="myg-hero-image__content" >
                <div class="myg-hero-image__content--container">
                    <h1 class="title">What is Access ?</h1>
                    <div class="titles" data-aos="fade-up">
                        <p data-aos="fade-up"><Img src={Img1} data-aos="fade-up"></Img>Access is an initiative started by a bunch of professional's from various disciplines (engineering/ education/ finance) with 
                        only one goal <span class="access" data-aos="fade-up">"Make technology education accessible in rural area's".</span></p>
                    </div>           

                </div>
                
<br/>
                <header class="myg-hero-image__content">
                <div class="myg-hero-image__content--container">
                    <h1 className="title" id="skills" >Why Access ? </h1>  
                    <div class="titles">
                        <p data-aos="fade-up">The courses under <span class="access">access</span> are carefully crafted and heavily foused on helping students to build real world skils in the opted area interest. These courses are taught by industry professional's and the curriculum is always updated and maintained up to the industry standards.</p>
                        <p data-aos="fade-up">Although the aim of <span class="access">access</span> is to provide courses across all the disciplines, for the initial offering we have introduced two courses in ComputerScience /Programming /Development.</p>
                      
                            <ul className="list" data-aos="fade-up">
                                <li data-aos="fade-up"> <p className="accesspara"><h3 data-aos="fade-up">Access 101 </h3> Introduction to modern web development.</p></li>
                                <li data-aos="fade-up"> <p className="accesspara"><h3 data-aos="fade-up">Access 102 </h3> Introduction to cross platform app development using <span class="access">react native</span>.</p></li>
                            </ul>
                    </div>           

                </div>
            </header>
            </header>
            <section class="category-buttons">
                <h2 class="category-buttons__title" data-aos="fade-up">Gain today's most in-demand skills</h2>
                <p class="category-buttons__copy" data-aos="fade-up">Gain the skills you need, whether you're growing your business, starting a career, or just want to try something new.</p>
         <Img src={Img2} / >
            </section>
        </section>
            
    
    )
}
