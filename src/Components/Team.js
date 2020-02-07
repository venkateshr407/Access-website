import React from 'react'
import theImg from '../images/salman sir.jpg';
import theImg2 from '../images/tajammul sir.jpg';
import theImg3 from '../images/karthik sir.jpg';


function Team() {
    return (
        // <h1 class="skills">OUR TEAM</h1>
        <div class="skills-team" id="team" data-aos="fade-up">
            <h1 data-aos="fade-up">OUR TEAM</h1>
            <p className="teampara" data-aos="fade-up">Learn from our IT professional's, we help you to build you're career.</p>
        
       <div class="wrapper" >
            <div class="grid-card" data-aos="fade-up">
                <img class="card-img-top" src={theImg3} alt="Card image cap"/>
                <div class="card-body">
                    <h5 class="card-title" data-aos="fade-up">Karthik Tabjul</h5>
                    <p class="card-text" data-aos="fade-up">Chief Financail Officer || Speaker</p>
                    <a href="https://www.linkedin.com/in/karthik-tabjul-ab9801150/" class="btn btn-primary" data-aos="fade-up">LinkedIn</a>
                </div>
            </div>
            <div class="grid-card" data-aos="fade-up">
                <img class="card-img-top" src={theImg} alt="Card image cap"/>
                <div class="card-body">
                    <h5 class="card-title" data-aos="fade-up">Salman Khan</h5>
                    <p class="card-text" data-aos="fade-up">Software Engineer || Teacher || Speaker</p>
                  <a href="https://www.linkedin.com/in/salman18/" class="btn btn-primary" data-aos="fade-up">LinkedIn</a>
                </div>
            </div>
            <div class="grid-card" data-aos="fade-up">
                <img class="card-img-top" src={theImg2} alt="Card image cap"/>
                <div class="card-body">
                    <h5 class="card-title" data-aos="fade-up">Tajammul Pasha</h5>
                    <p class="card-text" data-aos="fade-up">Software Engineer || Educator || Speaker</p>
                    <a href="https://www.linkedin.com/in/tajammul1996/" class="btn btn-primary card-button" data-aos="fade-up">LinkedIn</a>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Team;
