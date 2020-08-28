import React from "react";
import "./Portfolio.css";
import ProjectCard from "../projectCard/ProjectCard";

const Portfolio = () => {
  return (
    <div className="portfolio">
      <ProjectCard
        img="https://cdn.vox-cdn.com/thumbor/szR7Ec1Qjx3ku0RPrpriEXM-Ze0=/0x0:1200x800/1200x800/filters:focal(504x304:696x496)/cdn.vox-cdn.com/uploads/chorus_image/image/65784178/homepage.0.jpeg"
        title="React Youtube Clone"
        desc="Sit Lorem qui nostrud ea ad aliquip ad. Sunt quis eiusmod tempor id laborum sit qui cupidatat nostrud ut labore laborum sint."
        tech={["React.js", "Html", "Css", "Google Api"]}
      />
      <ProjectCard
        img="https://miro.medium.com/max/3200/1*dMR3xmufnmKiw4crlisQUA.png"
        title="React Nexfix Clone"
        desc="Aliqua in ut nostrud excepteur ea. In qui do ullamco cillum irure ad irure ex sint aliqua."
        tech={["React.js", "Html", "Css", "Movie Api"]}
      />
      <ProjectCard
        img="https://airbnb.design/wp-content/uploads/2016/05/livethere-1.jpg"
        title="React Airbnb Clone"
        desc="Labore enim occaecat consectetur in. Minim culpa eiusmod fugiat esse magna sit est ipsum."
        tech={["React.js", "Html", "Css"]}
      />
      <ProjectCard
        img=""
        title="Social Media Application"
        desc=""
        tech={[
          "Java Spring Boot",
          "React.js",
          "Node.js",
          "Redux",
          "Redux Saga",
          "Socket.io",
          "Google Maps Api",
          "Amazon S3",
          "MySql",
          "MongoDb",
          "Html",
          "Css",
          "Bootstrap",
          "Sass"
        ]}
      />
      <ProjectCard
        img=""
        title="React Airbnb Clone"
        desc=""
        tech={["React.js", "Html", "Css", "Google Api"]}
      />
      <ProjectCard
        img=""
        title="React Airbnb Clone"
        desc=""
        tech={["React.js", "Html", "Css", "Google Api"]}
      />
    </div>
  );
};

export default Portfolio;
