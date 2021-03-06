import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <div className="grid-container-footer">
                    <div className="footer-about">
                        <h1>About us</h1>
                        <p>We are a bunch of professionl's from various discipline's
                         who are trying to bring change in the tech education.</p>
                    </div>
                    <div className="footer-about">

                        <h1>Technologies</h1>
                        <ul>
                            <li><a  href="https://github.com/">Github</a></li>
                            <li><a href="https://www.w3.org/">HTML5 and CSS3</a></li>
                            <li><a href="https://www.javascript.com/">Javascript</a></li>
                            <li><a href="https://reactjs.org/">React.js</a></li>
                         </ul>
                    </div>
                    <div className="footer-about">
                        <h1>Get in touch </h1>
                        <p class="footpara">Email Us:<a href="mailto:access@codeonetech.com"> access@codeonetech.com </a></p>
                        <p class="footpara">Call Us: +91 8147564935 , +91 9535386618</p>
                    </div>
                    
                    {/* <div className="footer-about">
                        <h1>Developed by:</h1>
                        <p><span class="access"><a  href="https://venkycreations.netlify.com/" className="footer-dev">Venkatesh.R</a></span>
                        <br/>Access-101 Student</p>
                     <span className="move-up"><a class="btn" href="#"><i class="fa fa-arrow-circle-up fa-2x " aria-hidden="true"></i></a></span>
                    </div> */}
                    <span className="move-up"><a class="btn" href="#"><i class="fa fa-arrow-circle-up fa-2x " aria-hidden="true"></i></a></span>
                </div>
                
                <div class="footer-bottoms">
                    &copy; Access 2020, All Rights Reserved
                </div>
                
                
            </div>
            
        )
    }
}
