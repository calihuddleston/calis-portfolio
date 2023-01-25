import React, { useState } from "react";
import { projectData } from "../projectData.js";
import { MdOutlineArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";
import bunniGif from "../images/bunnigif.png";
import bunniCover from "../images/bunnicover.png";
import bunniMenu from "../images/bunnimenu.png";

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
        <h1 className="title" id="web">
          Web Development:
        </h1>
        <div className="title-box">
          <h3 className="title">{project.name}</h3>
          <div className="intro">
            {project.techUsed}
            <a href={project.repositoryLink}>
              <i className="fa fa-github project-repo"></i>
            </a>
          </div>
        </div>

        <div id="image-row">
          <button onClick={handleBackClick} className="project-button">
            <MdOutlineArrowBackIosNew />
          </button>

          <img src={project.image} width="55%" className="project-image"></img>
          <button onClick={handleClick} className="project-button">
            <MdArrowForwardIos />
          </button>
        </div>
        <div>
          <h1 className="title" id="graphic">
            Graphic Design:
          </h1>
          <div id="bunnis-kitchen">
            <h2 className="title" id="bunni-title">
              Bunni's Kitchen
            </h2>
            <div id="bunni-images">
              <img
                src={bunniCover}
                width="575px"
                className="bunni"
                id="change-size"
              ></img>
              <img
                src={bunniGif}
                width="325px"
                className="bunni"
                id="change-size"
              ></img>
              <img src={bunniMenu} width="250px" className="bunni"></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
