import React from "react";
import "./Page.css";

const Page = () => {
  return (
    <div className="page">
      <div className="appFeature">
        <img
          src={require("../../assets/pageImg/youtube.png")}
          alt="React Youtube Clone"
        />
        <div className="technologies">
          <span>React.js</span>
          <span>Youtube Api</span>
          <span>Html</span>
          <span>Css</span>
        </div>
      </div>
      <div className="appInfo">
        <h1 data-aos="fade-left">Youtube Clone</h1>
        <p data-aos="fade-right">
          Functional react components, effective hook functions, clean and
          responsive design. Enhanced with Google Youtube API.
        </p>
        <span className="demo">
            <a href="/#">Demo</a>
        </span>
      </div>
    </div>
  );
};

export default Page;
