import React from 'react'
import Typical from 'react-typical'
// import Button from 'muicss/lib/react/button';
import Button from "@material-ui/core/Button";
import theImg from '../images/display.png';


export default function Display() {
    return (
            <div class="container-sm">
                <div class="rc-HeroBanner__text-container ">
                <header className="typed">
        <p>Access for   <Typical 
        steps={['future!',1500,  
                'learn!',1500,
                'tomorrow!',1500,
      ]}
        loop={Infinity}
        wrapper="b"
        
      /> </p>
      </header >
                <h3 className="header3" data-aos="fade-up"><span className="spantext">Doing the right thing,</span><br/> at the right time.</h3>
                
                <Button className="containers" variant="contained" color="primary" href="#skills" >
                    Explore 
                </Button>
                <img src={theImg} data-aos="fade-up"></img>
                <br/>

                </div>

            </div>
        
    )
}
