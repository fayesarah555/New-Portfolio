import React from 'react'
import "./TechStack2.css";
import { useState } from 'react';
import Flip from 'react-reveal/Flip';
const TechStack2 = () => {
    const data = [
        {
            name:"Faire preuve de logique et de curiosité"

        },
        {
            name:"Analyser les besions du client"

        },
        {
            name:"Developpement d'application web"

        },
        {
            name:"Modelisation de base de données"

        },
        {
            name:"Cabaple de coordination avec différents intervenents"

        },
        {
            name:" Coordinantion de gestion de version (GitHub)"

        },
    ];

    const color = [
    
        "#C5C0CA",
        "#5B04B6",
       
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
    <div className='container techstack-section-2' id='teckstack2'>
        <div className='section-title'>
           <h5>Compétances</h5>
           <span className='tech-line'></span>
        </div>
        <Flip top cascade>
        <div className='row'>
                {data.slice(0,showMoreTechStack).map((item,index)=>(
                    <div className='col-xl-4 col-lg-4 col-md-6 col-sm-12' key={index}>
                        <div className={index===0?'tech-content-marked-t tech-content-t':'tech-content-t'}>
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

export default TechStack2 