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
        <p>{pro.description}</p>
        <div className="project-btns">
          <NavLink
            to={pro.view}
            className="btn"
          >
            VIEW
          </NavLink>
          <NavLink
            to={pro.source}
            className="btn"
          >
            SOURCE
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Projects;
