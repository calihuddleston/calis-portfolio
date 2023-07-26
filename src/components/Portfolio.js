import React, { useState } from "react";
import { projectData } from "../projectData.js";
import { MdOutlineArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";

export default function Portfolio() {
  const [index, setIndex] = useState(0);

  let hasPrev = index > 0;
  let hasNext = index < projectData.length - 1;

  function handleClick() {
    if (hasNext) {
      setIndex(index + 1);
    }
  }

  function handleBackClick() {
    if (hasPrev) {
      setIndex(index - 1);
    }
  }

  let project = projectData[index];
  return (
    <div id="projects">
      <div class="blog">
        <div className="title-box">
          <h3 className="title">{project.name}</h3>
        </div>

        <div id="image-row">
          <button onClick={handleBackClick} className="project-button">
            <MdOutlineArrowBackIosNew />
          </button>
          <div id="image-column">
            <div className="container">
              <img
                src={project.image}
                width="85%"
                className="project-image"
              ></img>
            </div>
            <div className="intro overlay">
              {project.techUsed}
              <a href={project.repositoryLink}>
                <i className="fa fa-github project-repo"></i>
              </a>
              <p>{project.description}</p>
            </div>
          </div>
          <button onClick={handleClick} className="project-button">
            <MdArrowForwardIos />
          </button>
        </div>
      </div>
    </div>
  );
}
