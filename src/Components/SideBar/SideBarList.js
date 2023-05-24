import React from "react";
import "./SideBarList.css";
import ProfilePic from "../../Images/a.JPG";
import { ImHome } from "react-icons/im";
import { ImWoman } from "react-icons/im";
import { ImOffice } from "react-icons/im";
import { ImFolderOpen } from "react-icons/im";
import { ImStarFull } from "react-icons/im";
import { ImNewspaper } from "react-icons/im";
import { ImAirplane } from "react-icons/im";
import { ImPhone } from "react-icons/im";
import { Link } from "react-scroll";

const SideBarList = ({ expandSideBar }) => {
  return (
    <React.Fragment>
      {expandSideBar ? (
        <div className="navbar-items">
          <div className="sidebar-profile-pic">
            <img src={ProfilePic} alt="photo de profil" />
          </div>

          <ul>
            <li className="nav-item">
              <Link to="home"  
              spy={true}
      smooth={true}
      hashSpy={true}
      offset={50}
      duration={50} >
                <ImHome size={25} /> Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="education"  
              spy={true}
      smooth={true}
      hashSpy={true}
      offset={50}
      duration={50}>
                <ImWoman size={25} />
                Me & Education
              </Link>
            </li>

            <li className="nav-item">
              <Link to="aboutO"  
              spy={true}
      smooth={true}
      hashSpy={true}
      offset={50}
      duration={50}>
                <ImOffice size={25} />
                Entreprise
              </Link>
            </li>
            <li className="nav-item">
              <Link to="projet"  
              spy={true}
      smooth={true}
      hashSpy={true}
      offset={50}
      duration={50}> 
                <ImFolderOpen size={25} />
                Réalisations
              </Link>
            </li>
            <li className="nav-item">
              <Link to="teckstack"  
              spy={true}
      smooth={true}
      hashSpy={true}
      offset={50}
      duration={50}>
                <ImStarFull size={25} />
                Compétances
              </Link>
            </li>
            <li className="nav-item">
              <Link to="vt"  
              spy={true}
      smooth={true}
      hashSpy={true}
      offset={50}
      duration={50}>
                <ImNewspaper size={25} />
                Veille Technologique
              </Link>
            </li>
            <li className="nav-item">
              <Link to="futur"  
              spy={true}
      smooth={true}
      hashSpy={true}
      offset={50}
      duration={50}>
                <ImAirplane size={25} />
                Futur
              </Link>
            </li>
            <li className="nav-item">
              <Link to="contact"  
              spy={true}
      smooth={true}
      hashSpy={true}
      offset={50}
      duration={50}>
                <ImPhone size={25} />
                Contact
              </Link>
            </li>
          </ul>
        </div>
      ) : (
        <div className="navbar-items-only-icons ">
          <ul>
            <li className="nav-item">
            <Link to="home"  
              spy={true}
      smooth={true}
      hashSpy={true}
      offset={50}
      duration={50} >
              <ImHome size={25} />
              </Link>
            </li>
            <li className="nav-item">
            <Link to="education"  
              spy={true}
      smooth={true}
      hashSpy={true}
      offset={50}
      duration={50}>
              <ImWoman size={25} />
              </Link>
            </li>
            <li className="nav-item">
            <Link to="aboutO"  
              spy={true}
      smooth={true}
      hashSpy={true}
      offset={50}
      duration={50}>
              <ImOffice size={25} />
              </Link>
            </li>
            <li className="nav-item">
            <Link to="projet"  
              spy={true}
      smooth={true}
      hashSpy={true}
      offset={50}
      duration={50}> 
              <ImFolderOpen size={25} />
              </Link>
            </li>
            <li className="nav-item">
            <Link to="teckstack"  
              spy={true}
      smooth={true}
      hashSpy={true}
      offset={50}
      duration={50}>
              <ImStarFull size={25} />
              </Link>
            </li>
            <li className="nav-item">
            <Link to="vt"  
              spy={true}
      smooth={true}
      hashSpy={true}
      offset={50}
      duration={50}>
              <ImNewspaper size={25} />
              </Link>
            </li>
            <li className="nav-item">
            <Link to="futur"  
              spy={true}
      smooth={true}
      hashSpy={true}
      offset={50}
      duration={50}>
              <ImAirplane size={25} />
              </Link>
            </li>
            <li className="nav-item">
            <Link to="contact"  
              spy={true}
      smooth={true}
      hashSpy={true}
      offset={50}
      duration={50}>
              <ImPhone size={25} />
              </Link>
            </li>
          </ul>
        </div>
      )}
    </React.Fragment>
  );
};

export default SideBarList;
