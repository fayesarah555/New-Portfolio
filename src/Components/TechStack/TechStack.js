import React from 'react'
import "./TechStack.css";
import { useState } from 'react';
import Flip from 'react-reveal/Flip';
const TechStack = () => {
    const data = [
        {
            name:"Full Stack Developpeuse"

        },
        {
            name:"HTML 5.2/CSS 3 "

        },
        {
            name:"JavaScript(13 - ECMA-262)"

        },
        {
            name:"PHP 8.0.0"

        },
        {
            name:"Laravel 10"

        },
        {
            name:"Python  3.11.2"

        },
        {
            name:"PhpMyAdmin  5.2.1"
        },
        {
            name:"Ruby  3.2.2"
        },
        {
            name:"xampp  8.0.28"
        },
        {
            name:"Figma"
        },
        {
            name:"Jira, Confluence"
        },
        {
            name:"react 18.1.0 "

        },
        {
            name:"Node JS  20.2.0"

        },
        {
            name:"Java 20.0.1"
        },
        {
            name:"SQL 8.0.33 "

        },
        {
            name:"Visual Studio Code  1.78"

        },
        {
            name:"Toad 16.3"

        },
        {
            name:"Intellij  2023.1.2"

        },
        {
            name:"GitHub"

        },
    ];

    const color = [
        "#7C36C7",
        "#9756DD",
        "#6B25B6",
        "#9E7BC2",
        "#6406C8",
        "#826C99",
        "#483B57",
        "#B46FFC",
        "#C5C0CA",
        "#5B04B6",
        "#E5D1F9",
        "#8F2AF9",
        "#6B11C8",
        "#B797D8",
        "#9F4DF4",
        "#5E407D",
        "#7C47D4",
        "#B089F0",   
    ]

    const [showMoreTechStack,setShowMoreTechStack] = useState(6);

    const loadMore= () => {
        setShowMoreTechStack((prev)=>prev+6);
    }
  return (
    <div className='container techstack-section' id='teckstack'>
        <div className='section-title'>
           <h5>Languages Frameworks Outils</h5>
           <span className='tech-line'></span>
         
        </div>
        <Flip left cascade>
        <div className='row'>

                {data.slice(0,showMoreTechStack).map((item,index)=>(
                    <div className='col-xl-4 col-lg-4 col-md-6 col-sm-12' key={index}>
                        <div className={index===0?'tech-content-marked tech-content':'tech-content'}>
                            <span className='tech-number' style={{backgroundColor:color[index]}}>
                                {index+1}
                            </span>
                            <p>
                            {item.name}
                            </p>
                        </div>
                     </div>
                ))}
        </div>
        </Flip>
       {showMoreTechStack >= data.length ? null : (
         <span className='load-more-tech-stack' onClick={loadMore}>
         Voir plus
     </span>
       )}
    </div>
    
  );
};

export default TechStack 