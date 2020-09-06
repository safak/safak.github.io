import React, { useState } from "react";
import "./About.css";
import { ExpandMore, Done } from "@material-ui/icons";
import Facebook from "../../assets/facebook.svg";
import Instagram from "../../assets/instagram.svg";
import Gmail from "../../assets/gmail.svg";
import Github from "../../assets/github.svg";

const About = () => {
  const [mailArea, setMailArea] = useState(false);
  const [copied, setCopied] = useState(false);

  return (
    <div className="about">
      <div className="aboutInfo">
        <h1 data-aos="fade-left">Who am I?</h1>
        <p data-aos="fade-right">
          Pasionate full stack web developer and UX/UI enthusiast who wants to
          make things different that make difference. For more information
          contact me.
        </p>
        <ExpandMore className="animate-flicker" />
        <div className="aboutContact" data-aos="fade-up">
          <img src={Github} alt="github" />
          <img
            onMouseEnter={() => {
              setMailArea(!mailArea);
              setCopied(false);
            }}
            src={Gmail}
            alt="mail"
          />
          <img src={Instagram} alt="instagram" />
          <img src={Facebook} alt="facebook" />
        </div>
        <div className={mailArea ? "activeMail" : "mail"}>
          <span className="mailAddress">kocaoglusafak@gmail.com</span>
          <button
            onClick={() => {
              navigator.clipboard.writeText("kocaoglusafak@gmail.com");
              setCopied(true);
            }}
            className="copyButton"
          >
            Copy
          </button>
          <Done className={copied ? "doneActive" : "done"} />
        </div>
      </div>
    </div>
  );
};

export default About;
