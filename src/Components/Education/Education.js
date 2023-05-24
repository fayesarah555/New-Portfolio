import React from "react";
import "./Education.css";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { MdOutlineSchool} from "react-icons/md";

const Education = () => {
  const data = [
    {
      ecolename: "Apple fondation",
      des: "Conception application Ios",
      loc: "Montreuille, Île de France ",
      year: "2021",
      techskills: [
        {
          techname: "Xcode",
        },
        {
          techname: "Figma",
        },
        {
          techname: "MarvelApp",
        },
        {
          techname: "Swift",
        },
        {
          techname: "Firebase",
        },
      ],
    },
    {
      ecolename: "Etna",
      des: "Anne preparatoir chef de projet",
      loc: "Ivry sur seine, Île de France ",
      year: "2021 - 2022",
      techskills: [
        {
          techname: "Xcode",
        },
        {
          techname: "Figma",
        },
        {
          techname: "MarvelApp",
        },
        {
          techname: "Swift",
        },
        {
          techname: "Firebase",
        },
        {
          techname: "React Js",
        },
        {
          techname: "Node JS",
        },
        {
          techname: "Bash",
        },
        {
          techname: "PHP",
        },
        {
          techname: "C",
        },
        {
          techname: "Mysql",
        },
      ],
    },
    {
      ecolename: "Aforp",
      des: "BTS SIO 2éme année",
      loc: "Issy les Moulineaux, Île de France ",
      year: "2022 -2023",
      techskills: [
        {
          techname: "PHP",
        },
        {
          techname: "React JS",
        },
        {
          techname: "Figma",
        },
        {
          techname: "Mysql",
        },
        // s
        {
          techname: "MAMP",
        },
      ],
    },
  ];
  const color = ["#B797D8", "#7C47D4", "#B089F0"];
  return (
    <div className="container edu-section" id="education">
      <div className="section-title">
        <h5>Education</h5>
        <span className="tech-line"></span>
      </div>
     
      <div className="timeline-section">
      <VerticalTimeline lineColor="#9E7BC2">
      
        {data.map((item, index) => (
         
          <VerticalTimelineElement
         
            className="vertical-timeline-element--work"
            contentStyle={{ backgroundColor: color[index], color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
            date={item.year}
            dateClassName="date-class"
            iconStyle={{ backgroundColor: color[index], color: "#fff" }}
            icon={<MdOutlineSchool />}
          > 
            <h3 className="vertical-timeline-element-title">
              {item.ecolename}
            </h3>{" "}
            <br />
            <h4 className="vertical-timeline-element-subtitle">{item.des}</h4>
            <h6 className="vertical-timeline-element-subtitle">{item.loc}</h6>
            <div className="row">
              {item.techskills.map((tec, index) => (
                <div
                  className="col-xl-3 col-lg-3 col-md-6 col-sm-12"
                  key={index}
                >
                  <div className="tech-skills">
                    <p>{tec.techname}</p>
                  </div>
                </div>
              ))}
            </div>
            
          </VerticalTimelineElement>
          
        ))}
      </VerticalTimeline>
    </div>
    
    </div>
  );
};

export default Education;
