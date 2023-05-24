import React from "react";
import "./Futur.css";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { BsPersonWorkspace } from "react-icons/bs";

const WorkExperience = () => {
  const data = [
    {
      compagnyname: "ESGI",
      position: "Igenieurie du web",
      loc: "Paris, France",
      year: "2023 - 2024",
      
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
    <div className="container workexperience-section-f" id="futur">
      <div className="section-title">
        <h5>Futur</h5>
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

            {/* <div className="row">
              {item.techskills.map((tec, index) => (
                <div
                  className="col-xl-3 col-lg-3 col-md-6 col-sm-12"
                  key={index}
                >
                </div>
              ))}
            </div> */}
            <p>{item.des}</p>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
     </div>
    </div>
  );
};

export default WorkExperience;
