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
      </div>
      <div className="appInfo">
        <h1 data-aos="fade-left">Youtube Clone</h1>
        <p data-aos="fade-right">
          Pasionate full stack web developer and UX/UI enthusiast who wants to
          make things different that make difference. For more information
          contact me.
        </p>
      </div>
    </div>
  );
};

export default Page;
