import React from "react";
import "../css/Project.css";
import { project } from "./constants";
function Project() {
  return (
    <div className="projects">
      <h1>PROJECTS</h1>
      <div className="project-cards">
        {project.map((project) => (
          <ProjectCard details={project} />
        ))}
      </div>
    </div>
  );
}

function ProjectCard({ details }) {
  return (
    <div>
      <div class="project-card project-shadow">
        <div class="img">
          <img src={details.image} alt="" className="project-img"></img>
        </div>
        <span>{details.title}</span>
        <p class="project-info">{details.info}</p>
        <div class="share">
          {details.tech.map((language) => (
            <div className="tooltip">
              <p>{language.icon}</p>
              <span class="tooltiptext">{language.id}</span>{" "}
            </div>
          ))}
        </div>
        <button>
          <a href={details.url} className="github">
            {" "}
            Github{" "}
          </a>
        </button>
      </div>
    </div>
  );
}
export default Project;
