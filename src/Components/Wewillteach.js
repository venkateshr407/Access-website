import React, { Component } from 'react'
import teachimg from '../images/learn.png'

export default class Wewillteach extends Component {
    render() {
        return (
            <div className="container-teach">
                <div className="teach">
                    <img src={teachimg}/>
                        <h1>New to tech & development?
                    <p>Don't worry. If you have a strong will to learn, we are here to teach you all the things required and make you ready for the Interview. </p>
                </h1>
                </div>
                
            </div>
        )
    }
}
