import React from "react";
import "./About.css";
import { ExpandMore } from "@material-ui/icons";

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
        <ExpandMore className="animate-flicker"/>
        asd
      </div>
    </div>
  );
};

export default About;
