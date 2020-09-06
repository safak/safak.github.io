import React, { useState, useEffect } from "react";
import "./Page.css";
import { useLocation } from "react-router-dom";
import { Apps } from "./Apps";

const Page = () => {
  const [info, setInfo] = useState();
  const [bigImg, setBigImg] = useState();
  const location = useLocation();
  const appName = location.pathname.split("/")[2];

  useEffect(() => {
    Apps.map((a) => {
      a.name === appName && setInfo(a);
    });
  }, [appName]);

  console.log(bigImg)
  return (
    <div className="page">
      <div className="appFeature">
        <iframe
          title="appVideo"
          className="pageVideo"
          width="500"
          height="315"
          src={info?.video}
          frameborder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <div className="technologies">
          {info?.tech?.map((i) => (
            <span>{i}</span>
          ))}
        </div>
      </div>
      <div className="appInfo">
        <h1 data-aos="fade-left">{info?.title}</h1>
        <p>{info?.desc}</p>
        <span className="demo">
          <a href={info?.url}>Demo</a>
        </span>
        |
        <span className="demo">
          <a href={info?.url}>Github</a>
        </span>
        <div className="appImages">
          {info?.images?.map((image) => (
            <img
              onClick={() => setBigImg(image)}
              className="appImagesItem"
              src={require(`../../assets/${image}`)}
              alt={info?.title}
            />
          ))}
        </div>
      </div>
      {bigImg && (
          <img className="bigImg" src={require(`../../assets/${bigImg}`)} alt={info?.title} />
      )}
    </div>
  );
};

export default Page;