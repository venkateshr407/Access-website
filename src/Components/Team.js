import React from 'react'
import theImg from '../images/salman sir.jpg';
import theImg2 from '../images/tajammul sir.jpg';
import theImg3 from '../images/karthik sir.jpg';



function Team() {
    return (
            <div className="team" id="team" data-aos="fade-up">
                <div className="ourteam">
                <h1>our mentour's</h1>
                </div>
                <br/>
            <section className="wrappers" data-aos="fade-up">
                <div className="grid-card" data-aos="fade-up">
                    <div className="cards" data-aos="fade-up">
                        <img src={theImg3}/>
                            <h1  className="team-head">Karthik Tabjul</h1>
                            <p className="parateam">Chief Financail Officer || Speaker</p>
                            <a href="https://twitter.com/KarthikTabjul"><i class="fa fa-twitter"></i></a>
                            <a href="https://www.linkedin.com/in/karthik-tabjul-ab9801150/"><i class="fa fa-linkedin"></i></a>
                    </div>
                </div>
                <div className="grid-card" data-aos="fade-up">
                    <div className="cards">
                        <img src={theImg}/>
                            <h1 className="team-head">Salman Khan</h1>
                            <p className="parateam">Software Engineer || Teacher || Speaker</p>
                            <a href="https://twitter.com/Salman18Dev"><i  class="fa fa-twitter"></i></a>
                            <a href="https://www.linkedin.com/in/salman18/"><i class="fa fa-linkedin"></i></a>
                    </div>
                </div>
                <div className="grid-card" data-aos="fade-up" data-aos="fade-up">
                    <div className="cards">
                        <img src={theImg2}/>
                            <h1 className="team-head">Tajammul Pasha</h1>
                            <p className="parateam">Software Engineer || Educator || Speaker</p>
                            <a href="https://twitter.com/Tajammul1996"><i class="fa fa-twitter"></i></a>
                            <a href="https://www.linkedin.com/in/tajammul1996/"><i class="fa fa-linkedin"></i></a>
                    </div>
                </div>
            </section>
            </div>
    

    )
}

export default Team;
