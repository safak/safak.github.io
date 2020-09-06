import React from "react";
import "./Page.css";

const Page = () => {
  return (
    <div
      className="page"
      style={{
        background: `url(
          ${require("../../assets/pageImg/youtube.png")}
        )`,
        backgroundPosition: "top:0, left:0",
        backgroundSize: "height:100vh",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
      }}
    >
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
