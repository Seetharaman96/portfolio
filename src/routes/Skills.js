import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Heroimg2 from "../components/Heroimg2";
import SkillList from "../components/SkillList";

const Skills = () => {
  return (
    <div>
      <NavBar />
      <Heroimg2 heading="Skills" text="Take a look at some of my  skills" />
      <SkillList />
      <Footer />
    </div>
  );
};

export default Skills;
