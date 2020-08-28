import React from "react";
import "./Portfolio.css";
import ProjectCard from "../projectCard/ProjectCard";

const Portfolio = () => {
  return <div className="portfolio">
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
  </div>;
};

export default Portfolio;
