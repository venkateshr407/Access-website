import React from 'react'
import Typical from 'react-typical'
// import Button from 'muicss/lib/react/button';
import Button from "@material-ui/core/Button";
import theImg from '../images/mountain.png';


export default function Display() {
    return (
            <div class="contain">
                <div className="typed">
        <p>Access for   <Typical 
        steps={['career!',1500,  
                'learn!',1500,
                'tomorrow!',1500,
      ]}
        loop={Infinity}
        wrapper="b"
        
      /> </p>
       <h3 className="header3" data-aos="fade-up"><span className="spantext">A launchpad for your</span><br/> career!</h3>

      </div>
      <div className="container-head">
          <img src={theImg}/>
      </div>

            </div>
    )
}
