import React, { useState } from "react";
import { FcExpand, FcCollapse } from "react-icons/fc";

const ProjectsList = ({ name, des, projectlink, techused }) => {
  const [show, setShow] = useState(false);

  const handleShowandCollapse = () => {
    setShow(!show);
  };

  return (
    <div
      className={show ? "project-list-opned project-list" : "project-list"}
      onClick={handleShowandCollapse}
      onMouseEnter={()=>setShow(true)}
    //   onMouseLeave={()=>setShow(false) }
    >
      <div className="title-and-collapse-option">
        <h1>{name} </h1>
        <p>{show ? <FcCollapse size={20} /> : <FcExpand size={20} />}</p>
      </div>
      <div className="descritpion">
        {show ? (<p>{des}</p>) : (<p>{des.substring(0, 70)} ... </p>)}
      </div>
      <div className="row">
        {techused &&
          techused.map((item, index) => (
            <div className="col-xl-3 col-lg-3 col-md-6 col-sm-12" key={index}>
              <div className="tech-used-in-project">
                <p>{item.techname}</p>
              </div>
            </div>
          ))}
      </div>
      <div className="live-demo-button">
        <a target="_" href={projectlink}>
          GitHub
        </a>
      </div>
    
    </div>
  );
};

export default ProjectsList;
