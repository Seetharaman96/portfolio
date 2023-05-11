import "./ProjectsStyles.css";
import React from "react";
import Projects from "./Projects";
import ProjectsData from "./ProjectsData";

const ProjectDetails = () => {
  return (
    <div className="work-container">
      <h1 className="project-heading">Project</h1>
      <div className="project-container">
        {ProjectsData.map((val, indx) => {
            return(
                <Projects key={indx} pro={val}  />
            )
        })}
      </div>
    </div>
  );
};

export default ProjectDetails;
