import React from "react";
import "./About.css";
import { ExpandMore } from "@material-ui/icons";
import Facebook from "../../assets/facebook.svg";

const About = () => {
  return (
    <div className="about">
      <div className="aboutInfo">
        <h1>Who am I?</h1>
        <p>
          Pasionate full stack web developer and UX/UI enthusiast who wants to
          make things different that make difference. For more information
          contact me.
        </p>
        <ExpandMore className="animate-flicker" />
        <div className="aboutContact"></div>
      </div>
    </div>
  );
};

export default About;
