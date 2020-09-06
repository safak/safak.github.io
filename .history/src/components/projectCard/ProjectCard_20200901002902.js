import React, { forwardRef } from "react";
import "./ProjectCard.css";

const ProjectCard = forwardRef(({ img, title, desc, tech }, ref) => {
  return (
    <div ref={ref} className="projectCard">
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
});

export default ProjectCard;
