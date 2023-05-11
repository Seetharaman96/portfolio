import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Heroimg2 from "../components/Heroimg2";
import ProjectDetails from "../components/ProjectDetails";

const Project = () => {
  return (
    <div>
      <NavBar />
      <Heroimg2 heading="PROJECTS" text="Some Of my works" />
      <ProjectDetails />
      <Footer />
    </div>
  );
};

export default Project;
