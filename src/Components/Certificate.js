import React, { Component } from 'react'
import certificate from '../logo/certificate.svg'


export default class Certificate extends Component {
    render() {
        return (
            <div className="certificate">
                 <h1>Programme certificate & <br/> references</h1>
                <div className="grid-certificate">
                        <img src={certificate}/>
                    <p>You will be provided with a certificate of completion, which will be valid for your career ! <br/>
                    <br/>We’ll provide reference & feedback to companies that reach out to us to validate your experience</p>
                </div>
                
            </div>
        )
    }
}
