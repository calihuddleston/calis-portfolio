import React, { Component, useState } from "react";
import { projectData } from "../projectData.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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
    <div id="portfolio-section">
      <h2>Take a look at some of my work</h2>
      <img src={project.image} className="portfolio-images"></img>
      <h4>{project.name}</h4>
      <h5>Technology Used: {project.techUsed}</h5>
      <button onClick={handleBackClick} className="project-navBtns">
        Back
      </button>
      <button onClick={handleClick} className="project-navBtns">
        Next
      </button>
    </div>
  );
}
