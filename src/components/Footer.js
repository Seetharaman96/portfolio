import {
  FaGithub,
  FaHome,
  FaLinkedin,
  FaMailBulk,
  FaPhone,
} from "react-icons/fa";
import "./FooterStyles.css";
import React from "react";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaHome size={20} style={{ color: "#fff", marginRight: "2rem" }} />
            <div>
              <p>13 Subramaniya Street</p>
              <p>Chidambaram</p>
              <p>Cuddalore District</p>
              <p>TamilNadu-608001</p>
              <p>India</p>
            </div>
          </div>
        </div>
        <div className="right">
          <div className="social">
            <h4>
              <FaPhone
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              8807305089
            </h4>
            <h4>
              <FaMailBulk
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              seetharam.ad96@gmail.com
            </h4>
            <a href="https://github.com/Seetharaman96">
              <FaGithub
                size={25}
                style={{ color: "#fff", marginRight: "1rem" }}
              />
            </a>
            <a href="https://www.linkedin.com/in/seetharaman-a-893784148/">
              <FaLinkedin
                size={25}
                style={{ color: "#fff", marginRight: "1rem" }}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
