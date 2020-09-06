import React, { useState, useEffect } from "react";
import "./Page.css";
import { useLocation } from "react-router-dom";
import { Apps } from "./Apps";

const Page = () => {
  const [info, setInfo] = useState();
  const location = useLocation();
  const appName = location.pathname.split("/")[2];

  useEffect(() => {
    Apps.map((a) => {
      a.name === appName && setInfo(a);
    });
  }, [appName]);

  console.log(info);

  return (
    <div className="page">
      <div className="appFeature">
        <iframe
          title="appVideo"
          className="pageVideo"
          width="500"
          height="315"
          src="https://www.youtube.com/embed/e9YI5YCQzaA"
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <div className="technologies">
          <span>React.js</span>
          <span>Youtube Api</span>
          <span>Html</span>
          <span>Css</span>
        </div>
      </div>
      <div className="appInfo">
        <h1 data-aos="fade-left">Youtube Clone</h1>
        <p>
          Functional react components, effective hook functions, clean and
          responsive design. Enhanced with Google Youtube API.
        </p>
        <span className="demo">
          <a href="/#">Demo</a>
        </span>
        <div className="appImages">
          <img
            src={require("../../assets/pageImg/youtube.png")}
            alt="React Youtube Clone"
          />
          <img
            src={require("../../assets/pageImg/youtube.png")}
            alt="React Youtube Clone"
          />
          <img
            src={require("../../assets/pageImg/youtube.png")}
            alt="React Youtube Clone"
          />
        </div>
      </div>
    </div>
  );
};

export default Page;