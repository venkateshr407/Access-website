import React from 'react'
import Typical from 'react-typical'
// import Button from 'muicss/lib/react/button';
// import Button from "@material-ui/core/Button";
import theImg from '../images/mountain-bg.png';


export default function Display() {
    return (
            <div class="contain">
                <div className="typed">
                        <p>Access for   <Typical 
                                steps={['career!',1500,  
                                        'learn!',1500,
                                        'tomorrow!',1500, ]}
                                loop={Infinity}
                                wrapper="b"/> 
                        </p>

                        </div>
        <div className="container-head">
                <div className="landing">
                        <h1 className="landing-text"> A launchpad for your career!</h1>
                        <p className="landing-para">Let us lead you to the top of the mountain with step-by-step guidance through implementation's, project's and ongoing success!</p>
                        <img src={theImg}/>
               
        </div>
        </div>
</div>
    )
}
