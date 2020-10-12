import React, { useState, useEffect } from "react";
import "./Page2.css";
import { useLocation } from "react-router-dom";
import { pageWebData } from "../../data";
import { PlayCircleFilledOutlined } from "@material-ui/icons";

const Page2 = () => {
  return (
    <div className="page">
      <div
        className="coloredArea"
        style={{ backgroundColor: `${pageWebData[0].color}` }}
      ></div>
      <div className="pagelLeft">
        <PlayCircleFilledOutlined className="playButton" />
      </div>
      <div className="pagelRight">
        <h1 data-aos="fade-left" className="pageTitle">
          {pageWebData[0].title}
        </h1>
        <p dangerouslySetInnerHTML={{ __html: pageWebData[0].desc }} />
        <div className="pageLinks">
          <span className="demo">
            {pageWebData[0].url ? (
              <a href={pageWebData[0].url}>Demo</a>
            ) : (
              "Demo: (Preparing)"
            )}
          </span>
          |
          <span className="demo">
            {pageWebData[0].github ? (
              <a href={pageWebData[0].github}>Github</a>
            ) : (
              "Github: (Private)"
            )}
          </span>
        </div>
        <div className="pageImages">
          <img
            className="pageImage"
            src={require(`../../assets/${pageWebData[0].images[0]}`)}
            alt=""
          />
          <img
            className="pageImage"
            src={require(`../../assets/${pageWebData[0].images[0]}`)}
            alt=""
          />
          <img
            className="pageImage"
            src={require(`../../assets/${pageWebData[0].images[0]}`)}
            alt=""
          />
        </div>
        <div className="technologies">
          {pageWebData[0].tech?.map((i) => (
            <span>{i}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page2;
