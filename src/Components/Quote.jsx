import React, {useState} from 'react';
import  { css, cx } from "emotion"
const Quote = () =>{

    const quotes ={
        0:{
            client: "Student Name 1, access batch",
            quote: "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups."
        },
        1:{
            client: "Student Name 2, access batch",
            quote: "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups."
        },
        2:{
            client: "Student Name 3, access batch",
            quote: "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups."
        },
        3:{
            client: "Student Name 4, access batch",
            quote: "Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups."
        },
    }
    const [current, setCurrent] = useState(quotes[0])

    const [active, setActive] = useState(0)

    const handleSetClick=(event)=>{
       setCurrent(quotes[event.target.getAttribute("data-quote")])
       setActive(event.target.getAttribute("data-quote"))
    }

    return(
        <div className={css`
            display:flex;
            flex-direction: column;
            align-items:center;
            margin:40px auto ;
            margin-top:5rem;
            max-width:700px;
            text-align:center;
            font-family: 'Montserrat', sans-serif;
            color:rgb(39, 39, 243);

            h1{
                font-weight:700;
            
            }
            p{
                margin-bottom:20px;
                text-align:center;
                color:#4545d;
                transition:all 0.1s ease-in;
            }
            q{
                quote:""" """;
                font-size:21px;
                color:black;
            }
        `}>
            <h1>Student Review</h1>
            <p><q id="a">{current.quote}</q></p>
            <p>{current.client}</p>
            <div className={css`
            display:flex;
            
            span{
                height:20px;
                width:20px;
                margin:0 3px;
                display:inline-flex;
                align-items:center;
                justify-content: center;
                cursor:pointer;
                transition-timing-function: ease;
            }
            span::before{
                content:" ";
                height:6px;
                width:8px;
                background-color:#515bde;
                border-radius:100%;
               transition:background-color: 0.5s ease-in;
              
            }
            span:hover::before{
                background-color:#45454d;
            }

            span[data-quote="${active}"::before]
            `}>
            <div>
                {Object.keys(quotes).map(message => (
                    <span 
                    onClick={event => handleSetClick(event)}
                    data-quote={message}
                    key={message}
                    />
                ))}
            </div>
        </div>
        </div>
    )
}
export default Quote;