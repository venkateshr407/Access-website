import React from 'react'
import theImg from '../images/salman sir.jpg';
import theImg2 from '../images/tajammul sir.jpg';
import theImg3 from '../images/karthik sir.jpg';


function Team() {
    return (
            <div className="skills" data-aos="fade-up">
                <h1>Our team</h1>
            <section className="wrapper" data-aos="fade-up">
                <div className="grid-card" data-aos="fade-up">
                    <div className="cards" data-aos="fade-up">
                        <img src={theImg3}/>
                            <h1  className="team-head" data-aos="fade-up">Karthik Tabjul</h1>
                            <p className="parateam" data-aos="fade-up">Chief Financail Officer || Speaker</p>
                            <a href="https://twitter.com/KarthikTabjul" data-aos="fade-up"><i class="fa fa-twitter"></i></a>
                            <a href="https://www.linkedin.com/in/karthik-tabjul-ab9801150/" data-aos="fade-up"><i class="fa fa-linkedin"></i></a>
                    </div>
                </div>
                <div className="grid-card" data-aos="fade-up">
                    <div className="cards">
                        <img src={theImg}/>
                            <h1 className="team-head" data-aos="fade-up">Salman Khan</h1>
                            <p className="parateam" data-aos="fade-up">Software Engineer || Teacher || Speaker</p>
                            <a href="https://twitter.com/Salman18Dev"><i  class="fa fa-twitter" data-aos="fade-up"></i></a>
                            <a href="https://www.linkedin.com/in/salman18/"><i class="fa fa-linkedin" data-aos="fade-up"></i></a>
                    </div>
                </div>
                <div className="grid-card" data-aos="fade-up" data-aos="fade-up">
                    <div className="cards">
                        <img src={theImg2}/>
                            <h1 className="team-head" data-aos="fade-up">Tajammul Pasha</h1>
                            <p className="parateam" data-aos="fade-up">Software Engineer || Educator || Speaker</p>
                            <a href="https://twitter.com/Tajammul1996" data-aos="fade-up"><i class="fa fa-twitter" data-aos="fade-up"></i></a>
                            <a href="https://www.linkedin.com/in/tajammul1996/"><i class="fa fa-linkedin" data-aos="fade-up"></i></a>
                    </div>
                </div>
            </section>
            </div>
    

    )
}

export default Team;
