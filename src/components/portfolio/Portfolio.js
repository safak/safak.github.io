import React from "react";
import "./Portfolio.css";
import ProjectCard from "../projectCard/ProjectCard";
import { Link } from "react-router-dom";
import { cardWebData, cardMobileData } from "../../data";

const Portfolio = ({ web, mobile }) => {
  const data = web ? cardWebData : cardMobileData;
  return (
    <>
      <h1 className="portfolioTitle">
        {web ? "WEB PROJECTS" : "MOBILE PROJECTS"}
      </h1>
      <div className="portfolio">
        {data.map((d) =>
          d.link ? (
            <Link
              to={d.link}
              style={{ color: "inherit", textDecoration: "inherit" }}
            >
              <ProjectCard
                key={d.id}
                img={require(`../../assets/${d.img}`)}
                title={d.title}
                desc={d.desc}
                tech={d.tech}
              />
            </Link>
          ) : (
            <ProjectCard
              key={d.id}
              img={require(`../../assets/${d.img}`)}
              title={d.title}
              desc={d.desc}
              tech={d.tech}
            />
          )
        )}
      </div>
    </>
  );
};

export default Portfolio;
