import { Link } from "react-router-dom";
import "./AboutContentStyles.css";
import React from "react";

const AboutContent = () => {
  return (
    <div className="about">
      <div className="left">
        <h1>Who Am I</h1>
        <p>
          I am a FullStack Developer(MERN). I create responsive secured web
          application as per the need
        </p>
        <Link to="/contact">
          <button className="btn btn-light">Contact</button>
        </Link>
      </div>
      <div className="right">
        <div className="img-container">
          <div className="img-stack top">
            <img
              className="img"
              src="https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
              alt="react"
            />
          </div>
          <div className="img-stack bottom">
            <img
              className="img"
              src="https://images.unsplash.com/photo-1579820010410-c10411aaaa88?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1497&q=80"
              alt="node"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutContent;
