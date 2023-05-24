import React from "react";
import ProjectsList from "./ProjectsList";
import "./Projects.css";

const Projects = () => {
  const data = [
    {
      name: "0papier",
      des: "description du projet 0papier lorem dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
      projectlink: "https://github.com/TOP-SIO/Projet0Papier",
      techused: [
        {
          techname: "PHP",
        },
        {
          techname: "PhpMyAdmin",
        },
        {
          techname: "Html",
        },
        {
          techname: "Css",
        },
      ],
    },
    {
      name: "Portfolio",
      des: "description du projet 0papier dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
      projectlink: "https://github.com/TOP-SIO/Projet0Papier",
      techused: [
        {
          techname: "React JS",
        },
        {
          techname: "JavaScript",
        },
        {
          techname: "Html",
        },
        {
          techname: "Css",
        },
      ],
    },
    {
      name: "Weather App",
      des: "description du projet Weather App dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
      projectlink: "https://github.com/fayesarah555/weather-app",
      techused: [
        {
          techname: "PHP",
        },
        {
          techname: "PhpMyAdmin",
        },
        {
          techname: "Html",
        },
        {
          techname: "Css",
        },
      ],
    },
    {
      name: "Liberty Commerce",
      des: "description du projet Liberty commerce dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
      projectlink: "https://github.com/fayesarah555/liberty-commerce",
      techused: [
        {
          techname: "PHP",
        },
        {
          techname: "PhpMyAdmin",
        },
        {
          techname: "Html",
        },
        {
          techname: "Css",
        },
      ],
    },
    {
      name: "Clicker Game",
      des: "description du projet Clicker game dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
      projectlink: "https://github.com/fayesarah555/clicker-game",
      techused: [
        {
          techname: "Html",
        },
        {
          techname: "Css",
        },
        {
          techname: "JavaScript",
        },
      ],
    },
    {
      name: "My ls",
      des: "description du projet My ls dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
      projectlink: "https://github.com/fayesarah555/my-ls",
      techused: [
        {
          techname: "C",
        },
      ],
    },
  ];

  return (
    <div className="container project-section" id="projet">
      <div className="section-title">
        <h5>Réalisations</h5>
        <span className="tech-line"></span>
      </div>
      <div className="row">
        {data.map((item, index) => (
          <div className="col-xl-6 col-lg-6 col-md-6 col-sm-12" key={index}>
            <ProjectsList {...item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
