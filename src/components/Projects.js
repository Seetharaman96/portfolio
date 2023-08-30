import { NavLink } from "react-router-dom";
import "./ProjectsStyles.css";
import React from "react";

const Projects = ({pro}) => {
  return (
    <div className="project-card">
      <img
        src={pro.imgsrc}
        alt="projectImage"
      />
      <h2 className="project-title">{pro.title}</h2>
      <div className="project-details">
        {/* <p>{pro.description}</p> */}
        <div className="project-btns">
          <NavLink
            to={pro.view}
            className="btn"
            target="_blank"
          >
            LIVE SITE
          </NavLink>
          {pro.frontendsource ? <NavLink
            to={pro.frontendsource}
            className="btn"
            target="_blank"
          >
            FRONT-END SOURCE CODE
          </NavLink> : null}
          {pro.backendsource ? <NavLink
            to={pro.backendsource}
            className="btn"
            target="_blank"
          >
            BACK-END SOURCE CODE
          </NavLink> : null}
        </div>
      </div>
    </div>
  );
};

export default Projects;
