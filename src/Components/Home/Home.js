import React from "react";
import "./Home.css";
import Typewriter from "typewriter-effect";
import MyCV from "./Sarah_Faye_CV.pdf";
import {BsFillMoonStarsFill} from "react-icons/bs";
import {RiSunFill} from "react-icons/ri";
import Fade from 'react-reveal/Fade';

const Home = ({theme,changeTheme}) => {
  return (
    
    <div className="container-fluid home" id="home">
      <div className="theme-change" onClick={changeTheme}>
        {theme === "light" ? (
          <p><BsFillMoonStarsFill  size={48}/></p>
        ): (
         <p className="sumT"><  RiSunFill size={48}/></p>
        )}
      </div>

      <div className="container home-content">

      <Fade left>
        <h1>Hey ! Je suis une </h1>
        <h3>
          <Typewriter
            options={{
              strings: ["Junior developpeuse web", "Apprentie"],
              autoStart: true,
              loop: true,
              delay: 10,
            }}
          />
        </h3>
        </Fade>
        <Fade bottom>
        <div className="button-for-action">
          <div className="hire-me-button">Embauchez moi !</div>
          <div className="get-resume-button">
            <a href={MyCV} download="SARAH_FAYE_CV.pdf">
              Téléchargez mon CV !
            </a>
          </div>
        </div>
        </Fade>
      </div>
    </div>
  );
};

export default Home;
