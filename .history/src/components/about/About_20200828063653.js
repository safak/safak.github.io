import React from "react";
import "./About.css";
import { ExpandMore } from "@material-ui/icons";
import Facebook from "../../assets/facebook.svg";
import Instagram from "../../assets/instagram.svg";
import Gmail from "../../assets/gmail.svg";
import Linkedin from "../../assets/linkedin.svg";

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
        <div className="aboutContact">
          <img src={Linkedin} alt="linkedin" />
          <img src={Gmail} alt="mail" />
          <span>sadsad</span>
          <img src={Instagram} alt="instagram" />
          <img src={Facebook} alt="facebook" />
        </div>
        <div>
          <span
            onClick={() => {
              navigator.clipboard.writeText("kocaoglusafak@gmail.com".textToCopy);
            }}
          >
            kocaoglusafak@gmail.comm
          </span>
        </div>
      </div>
    </div>
  );
};

export default About;
