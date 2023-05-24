import React from 'react'
import "./About.css";
import ProfilePic from "../../Images/a.JPG"
import Fade from 'react-reveal/Fade';

const About = () => {
  return (
    <div className='container about-section' id='about'>
        <div className='row'>
            < Fade bottom>
            <div className='col-xl-6 col-lg-6 col-md-12 col-sm-12'>
                <div className='about-image'>
                    <img src={ProfilePic}  alt="photo de profile"/>
                </div>
            </div>
            </Fade>
            < Fade right>
            <div className='col-xl-6 col-lg-6 col-md-12 col-sm-12'>
                <div className='about-title'>
                    <h5>
                        A propos de moi 
                    </h5>
                    <span className='line'></span>
                </div>
                <div className='about-details'>
                <p>Bonjour, je suis Sarah, une développeuse junior basée à Paris.</p>
            <p>Depuis que j'ai suivi ma première formation à la Fondation Apple, j'ai été séduite par les possibilités infinies qu'offre le codage.

              Je suis particulièrement passionnée par le développement d'applications web et la construction d'interfaces réactives et conviviales. Je maîtrise des langages tels que le HTML, CSS, JavaScript et PHP, et je suis toujours avide d'apprendre de nouvelles technologies et de nouveaux cadres.
              
              Pendant mon séjour à Etna et à l'Aforp, j'ai eu l'occasion de travailler sur plusieurs projets.</p>
            
                </div>
            </div> 
            </Fade>
        </div>
    </div>
  )
}

export default About