import React from "react";
import "./Portfolio.css";
import ProjectCard from "../projectCard/ProjectCard";
import { Link } from "react-router-dom";

const Portfolio = () => {
  return (
    <div className="portfolio">
      <Link
        to="/apps/social"
        style={{ color: "inherit", textDecoration: "inherit" }}
      >
        <ProjectCard
          img="https://cdn.vox-cdn.com/thumbor/Cz2FwJR57tTVWwpFhi9MTo1W7S0=/1400x788/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/16202304/facebook_website_redesign_1.jpg"
          title="Social Media Application"
          desc="Advanced social media and messenger application with Spring boot and React.js."
          tech={[
            "Java Spring Boot",
            "React.js",
            "Node.js",
            "Redux",
            "MySql",
            "Amazon S3",
            "Google Maps Api",
            "Socket.io",
            "MongoDb",
          ]}
        />
      </Link>
      <Link
        to="/apps/netflix"
        style={{ color: "inherit", textDecoration: "inherit" }}
      >
        <ProjectCard
          img="https://miro.medium.com/max/3200/1*dMR3xmufnmKiw4crlisQUA.png"
          title="React Nexfix Clone"
          desc="Netflix movie and series application with React.js and The Movie Database Api."
          tech={["React.js", "Movie Api", "Html", "Css", "Bootstrap"]}
        />
      </Link>

      <Link
        to="/apps/youtube"
        style={{ color: "inherit", textDecoration: "inherit" }}
      >
        <ProjectCard
          img="https://cdn.vox-cdn.com/thumbor/szR7Ec1Qjx3ku0RPrpriEXM-Ze0=/0x0:1200x800/1200x800/filters:focal(504x304:696x496)/cdn.vox-cdn.com/uploads/chorus_image/image/65784178/homepage.0.jpeg"
          title="React Youtube Clone"
          desc="Youtube watching video application with React.js and Google Youtube Api."
          tech={["React.js", "Youtube Search Api", "Html", "Css"]}
        />
      </Link>
      <Link
        to="/apps/shop"
        style={{ color: "inherit", textDecoration: "inherit" }}
      >
        <ProjectCard
          img={require("../../assets/shop/shop4.png")}
          title="React Shopping App"
          desc="Online shopping application with React.js, Google firebase database, Redux state manager and Stripe payment method."
          tech={[
            "React.js",
            "Google Firebase",
            "Redux",
            "Redux Saga",
            "Html",
            "Css",
          ]}
        />
      </Link>
      <Link
        to="/apps/hulu"
        style={{ color: "inherit", textDecoration: "inherit" }}
      >
        <ProjectCard
          img={require("../../assets/hulu/hulu1.png")}
          title="React Hulu Clone"
          desc="Hulu movie and series application with React.js and The Movie Database Api."
          tech={["React.js", "The Movie Api", "Html", "Css"]}
        />
      </Link>
      <Link
        to="/apps/google"
        style={{ color: "inherit", textDecoration: "inherit" }}
      >
        <ProjectCard
          img="https://www.komando.com/wp-content/uploads/2019/07/Google-Search.jpg"
          title="React Google Clone"
          desc="Google web searching application wirh React.js and Google Search Api."
          tech={["React.js", "Google Api", "Html", "Css"]}
        />
      </Link>
      <Link
        to="/apps/twitter"
        style={{ color: "inherit", textDecoration: "inherit" }}
      >
        <ProjectCard
          img="https://cdn.vox-cdn.com/thumbor/vs84cJS7MxJ110H83QfVii6yBgU=/52x327:1453x1169/1200x800/filters:focal(636x207:876x447)/cdn.vox-cdn.com/uploads/chorus_image/image/64731424/Light_Mode_Home_1500x1500_Eng_JV.png.img.fullhd.medium.0.png"
          title="React Twitter Clone"
          desc="Twitter social media application with React.js and Google firebase firestore database."
          tech={["React.js", "Context Api", "Google Firebase", "Html", "Css"]}
        />
      </Link>

      <Link
        to="/apps/slack"
        style={{ color: "inherit", textDecoration: "inherit" }}
      >
        <ProjectCard
          img="https://a.slack-edge.com/a084c/marketing/img/downloads/screenshots/windows/windows-hero-desktop.png"
          title="React Slack Clone"
          desc="Slack instant messaging application with React.js and Google firebase firestore database."
          tech={["React.js", "Context Api", "Google Firebase", "Html", "Css"]}
        />
      </Link>
      {/* <Link
        to="/apps/chat"
        style={{ color: "inherit", textDecoration: "inherit" }}
      > */}
      <ProjectCard
        img="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/9e8f6c35446557.56f7cdb535c7e.jpg"
        title="Instant Chat App"
        desc="Soon"
        tech={["React.js", "Socket.io", "Node,js", "Express", "MongoDb", "Css"]}
      />
      {/* </Link> */}
      {/* <Link
        to="/apps/blog"
        style={{ color: "inherit", textDecoration: "inherit" }}
      > */}
      <ProjectCard
        img="https://bashooka.com/wp-content/uploads/2019/01/blog-layout-design-15.jpg"
        title="Multiuser Blog Application"
        desc="Soon"
        tech={["React.js", "Context Api", "Google Firebase"]}
      />
      {/* </Link> */}
      <Link
        to="/apps/airbnb"
        style={{ color: "inherit", textDecoration: "inherit" }}
      >
        <ProjectCard
          img="https://airbnb.design/wp-content/uploads/2016/05/livethere-1.jpg"
          title="React Airbnb Clone"
          desc="Nonfunctional Airbnb ui clone with React.js"
          tech={["React.js", "Html", "Css"]}
        />
      </Link>
    </div>
  );
};

export default Portfolio;
