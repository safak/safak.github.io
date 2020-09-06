import React, { useState, useEffect } from "react";
import "./Page.css";
import { useLocation } from "react-router-dom";
import { Apps } from "./Apps";
import { Cancel } from "@material-ui/icons";

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

  console.log(bigImg);
  return (
    <>
      <div className="page" style={bigImg && { opacity: "0.3" }}>
        <div className="appFeature">
        <iframe
            title="react app"
            src="https://player.vimeo.com/video/455097381"
            width="500"
            height="315"
            frameborder="0"
            allow="autoplay; fullscreen"
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
      </div>
      {bigImg && (
        <div data-aos="fade" data-aos-duration="800" className="bigImg">
          <Cancel className="cancel" onClick={() => setBigImg(null)} />
          <img src={require(`../../assets/${bigImg}`)} alt={info?.title} />
        </div>
      )}
    </>
  );
};

export default Page;
