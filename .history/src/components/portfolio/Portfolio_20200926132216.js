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
          img={require("../../assets/projectcover/social.jpg")}
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
        to="/apps/blog"
        style={{ color: "inherit", textDecoration: "inherit" }}
      >
        <ProjectCard
          img={require("../../assets/projectcover/blog.jpg")}
          title="Blog Application"
          desc="Mern blog application that users can share their stories and manage them."
          tech={[
            "Node.js",
            "React.js",
            "Express",
            "MongoDB",
            "Redux",
            "Amazon S3",
          ]}
        />
      </Link>
      <Link
        to="/apps/netflix"
        style={{ color: "inherit", textDecoration: "inherit" }}
      >
        <ProjectCard
          img={require("../../assets/projectcover/netflix.png")}
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
          img={require("../../assets/projectcover/youtube.jpeg")}
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
          img={require("../../assets/projectcover/google.jpg")}
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
          img={require("../../assets/projectcover/twitter.jpeg")}
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
          img={require("../../assets/projectcover/slack.png")}
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
        img={require("../../assets/projectcover/chat.jpg")}
        title="Instant Chat App"
        desc="Soon"
        tech={["React.js", "Socket.io", "Node,js", "Express", "MongoDb", "Css"]}
      />
      {/* </Link> */}
      <Link
        to="/apps/airbnb"
        style={{ color: "inherit", textDecoration: "inherit" }}
      >
        <ProjectCard
          img={require("../../assets/projectcover/airbnb.jpg")}
          title="React Airbnb Clone"
          desc="Nonfunctional Airbnb ui clone with React.js"
          tech={["React.js", "Html", "Css"]}
        />
      </Link>
    </div>
  );
};

export default Portfolio;
