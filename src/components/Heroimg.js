import { Link } from "react-router-dom";
import "./HeroimgStyles.css";

import React from "react";

const Heroimg = () => {
  return (
    <div className="hero">
      <div className="image-dash">
        <img
          className="image-1"
          src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80"
          alt="wrok-img"
        />
      </div>
      <div className="content">
        <p>Hello, this is Seetharaman</p>
        <h1>Software Developer (MERN)</h1>
        <div>
            <Link className="btn" to="/project">Projects</Link>
            <Link className="btn btn-light" to="/contact">Contact</Link>
        </div>
      </div>
    </div>
  );
};

export default Heroimg;
