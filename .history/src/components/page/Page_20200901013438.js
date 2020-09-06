import React from "react";
import "./Page.css";

const Page = () => {
  return (
    <div
      className="page"
      style={{
        background: `url(
          "https://images.pexels.com/photos/4286956/pexels-photo-4286956.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
        ), noRepeat`
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
