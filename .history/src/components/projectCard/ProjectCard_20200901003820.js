import React from "react";
import "./ProjectCard.css";

const ProjectCard = ({ img, title, desc, tech }) => {
  return (
    <div className="projectCard">
      <img src={img} alt={title} />
      <h2>{title}</h2>
      <p>{desc}</p>
      <div className="technologies">
        {tech.map((t) => (
          <span>{t}</span>
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;
