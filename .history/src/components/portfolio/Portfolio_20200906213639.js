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
          desc="Est officia deserunt laborum pariatur nulla fugiat ea Lorem. Lorem reprehenderit ullamco labore nisi labore tempor ea commodo in quis."
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
          desc="Aliqua in ut nostrud excepteur ea. In qui do ullamco cillum irure ad irure ex sint aliqua."
          tech={["React.js", "Html", "Css", "Movie Api"]}
        />
      </Link>
      <Link
        to="/apps/shop"
        style={{ color: "inherit", textDecoration: "inherit" }}
      >
        <ProjectCard
        style={{border:"solid 1px black"}}
          img={require("../../assets/shop/shop1.png")}
          title="React Shopping App"
          desc="Sit Lorem qui nostrud ea ad aliquip ad. Sunt quis eiusmod tempor id laborum sit qui cupidatat nostrud ut labore laborum sint."
          tech={["React.js", "Html", "Css", "Google Api"]}
        />
      </Link>
      <Link
        to="/apps/youtube"
        style={{ color: "inherit", textDecoration: "inherit" }}
      >
        <ProjectCard
          img="https://cdn.vox-cdn.com/thumbor/szR7Ec1Qjx3ku0RPrpriEXM-Ze0=/0x0:1200x800/1200x800/filters:focal(504x304:696x496)/cdn.vox-cdn.com/uploads/chorus_image/image/65784178/homepage.0.jpeg"
          title="React Youtube Clone"
          desc="Sit Lorem qui nostrud ea ad aliquip ad. Sunt quis eiusmod tempor id laborum sit qui cupidatat nostrud ut labore laborum sint."
          tech={["React.js", "Html", "Css", "Google Api"]}
        />
      </Link>

      <Link
        to="/apps/airbnb"
        style={{ color: "inherit", textDecoration: "inherit" }}
      >
        <ProjectCard
          img="https://airbnb.design/wp-content/uploads/2016/05/livethere-1.jpg"
          title="React Airbnb Clone"
          desc="Labore enim occaecat consectetur in. Minim culpa eiusmod fugiat esse magna sit est ipsum."
          tech={["React.js", "Html", "Css"]}
        />
      </Link>
      <Link
        to="/apps/twitter"
        style={{ color: "inherit", textDecoration: "inherit" }}
      >
        <ProjectCard
          img={require("../../assets/twitter/twitter1.png")}
          title="React Twitter Clone"
          desc="Sit Lorem qui nostrud ea ad aliquip ad. Sunt quis eiusmod tempor id laborum sit qui cupidatat nostrud ut labore laborum sint."
          tech={["React.js", "Html", "Css", "Google Api"]}
        />
      </Link>
      <Link
        to="/apps/hulu"
        style={{ color: "inherit", textDecoration: "inherit" }}
      >
        <ProjectCard
          img={require("../../assets/hulu/hulu1.png")}
          title="React Hulu Clone"
          desc="Sit Lorem qui nostrud ea ad aliquip ad. Sunt quis eiusmod tempor id laborum sit qui cupidatat nostrud ut labore laborum sint."
          tech={["React.js", "Html", "Css", "Google Api"]}
        />
      </Link>
      <Link
        to="/apps/google"
        style={{ color: "inherit", textDecoration: "inherit" }}
      >
        <ProjectCard
          img={require("../../assets/google/google1.png")}
          title="React Google Clone"
          desc="Sit Lorem qui nostrud ea ad aliquip ad. Sunt quis eiusmod tempor id laborum sit qui cupidatat nostrud ut labore laborum sint."
          tech={["React.js", "Html", "Css", "Google Api"]}
        />
      </Link>

      <Link
        to="/apps/slack"
        style={{ color: "inherit", textDecoration: "inherit" }}
      >
        <ProjectCard
          img={require("../../assets/slack/slack1.png")}
          title="React Slack Clone"
          desc="Sit Lorem qui nostrud ea ad aliquip ad. Sunt quis eiusmod tempor id laborum sit qui cupidatat nostrud ut labore laborum sint."
          tech={["React.js", "Html", "Css", "Google Api"]}
        />
      </Link>
      <Link
        to="/apps/chat"
        style={{ color: "inherit", textDecoration: "inherit" }}
      >
        <ProjectCard
          img="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/9e8f6c35446557.56f7cdb535c7e.jpg"
          title="Instant Chat App"
          desc="Consectetur duis deserunt velit culpa ex duis sint commodo occaecat pariatur qui. Et exercitation aute fugiat ullamco."
          tech={[
            "React.js",
            "Socket.io",
            "Node,js",
            "MongoDb",
            "Css",
            "Google Api",
          ]}
        />
      </Link>
      <Link
        to="/apps/blog"
        style={{ color: "inherit", textDecoration: "inherit" }}
      >
        <ProjectCard
          img="https://bashooka.com/wp-content/uploads/2019/01/blog-layout-design-15.jpg"
          title="Multiuser Blog Application"
          desc="In eiusmod adipisicing ex proident consectetur dolor enim nostrud sunt excepteur et."
          tech={["React.js", "Node.js", "Context Api", "Google Firebase"]}
        />
      </Link>
    </div>
  );
};

export default Portfolio;
