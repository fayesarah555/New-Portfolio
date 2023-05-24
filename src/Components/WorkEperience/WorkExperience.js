import React from "react";
import "./WorkExperience.css";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { BsPersonWorkspace } from "react-icons/bs";

const WorkExperience = () => {
  const data = [
    {
      compagnyname: "Okayo",
      position: "Developpeuse web",
      loc: "Paris, France",
      des: "description du poste",
      year: "2023",
      techskills: [
        {
          techname: "Java",
        },
        {
          techname: "Mysql",
        },
        {
          techname: "ruby",
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
      compagnyname: "Votre entreprise ?",
      position: "Developpeuse web",
      loc: "Planète Terre",
      des: "description du poste",
      year: "2023 - ?",
      techskills: [
        {
          techname: "Java ?",
        },
        {
          techname: "Mysql ?",
        },
        {
          techname: "ruby ?",
        },
        {
          techname: "Html ?",
        },
        {
          techname: "Css ?",
        },
      ],
    },
  ];

  const color = [
    "#6B25B6",
    "#9E7BC2",
    "#6B11C8",
    "#B797D8",
    "#7C47D4",
    "#B089F0",
  ];
  return (
    <div className="container workexperience-section">
      <div className="section-title">
        <h5>Expériences</h5>
        <span className="tech-line"></span>
      </div>

     <div className="timeline-section">
     <VerticalTimeline lineColor="#B089F0">
        {data.map((item, index) => (
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ backgroundColor: color[index], color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
            date={item.year}
            dateClassName="date-class"
            iconStyle={{ backgroundColor: color[index], color: "#fff" }}
            icon={<BsPersonWorkspace />}
          >
            <h3 className="vertical-timeline-element-title">
              {item.compagnyname}
            </h3>

            <h5 className="vertical-timeline-element-subtitle">
              {item.position}
            </h5>
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
            <p>{item.des}</p>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
     </div>
    </div>
  );
};

export default WorkExperience;
