import React from "react";
import "./Portfolio.css";
import ProjectCard from "../projectCard/ProjectCard";

const Portfolio = () => {
  return (
    <div className="portfolio">
      <ProjectCard
        img="https://cdn.vox-cdn.com/thumbor/szR7Ec1Qjx3ku0RPrpriEXM-Ze0=/0x0:1200x800/1200x800/filters:focal(504x304:696x496)/cdn.vox-cdn.com/uploads/chorus_image/image/65784178/homepage.0.jpeg"
        title="ReactYoutube Clone"
        desc=""
      />
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
    </div>
  );
};

export default Portfolio;
