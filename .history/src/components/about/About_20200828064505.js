import React, { useState } from "react";
import "./About.css";
import { ExpandMore } from "@material-ui/icons";
import Facebook from "../../assets/facebook.svg";
import Instagram from "../../assets/instagram.svg";
import Gmail from "../../assets/gmail.svg";
import Linkedin from "../../assets/linkedin.svg";

const About = () => {
  const [mailArea, setMailArea] = useState(false);
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
          <img onClick={() => setMailArea(!mailArea)} src={Gmail} alt="mail" />
          <img src={Instagram} alt="instagram" />
          <img src={Facebook} alt="facebook" />
        </div>
        <div className="mail">
          <span className="mailAddress">kocaoglusafak@gmail.comm</span>
          <button
            onClick={() =>
              navigator.clipboard.writeText("kocaoglusafak@gmail.com")
            }
            className="copyButton"
          >
            Copy
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
