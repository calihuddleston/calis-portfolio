//

// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// export default function Portfolio() {

//   let project = projectData;
//   return (

//       <h2>Take a look at some of my work</h2>

//       <h4>{project.name}</h4>
//       <h5>Technology Used: {project.techUsed}</h5>
//       <button onClick={handleBackClick} className="project-navBtns">
//         Back
//       </button>
//       <button onClick={handleClick} className="project-navBtns">
//         Next
//       </button>
//     </div>
//   );
// }

import React, { Component, useState } from "react";
import { projectData } from "../projectData.js";

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
    <>
      <div class="blog">
        <div className="title-box">
          <h3 className="title">{project.name}</h3>
          <hr />
          <div className="intro">
            {project.techUsed}
            <a href={project.repositoryLink}>
              <i className="fa fa-github project-repo"></i>
            </a>
          </div>
        </div>

        {/* <div className="info">
          <span>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim.
          </span>
        </div> */}

        <div>
          <img src={project.image} width="55%" className="project-image"></img>
        </div>
        <div className="overlay">
          {project.description} Hi this is my overlay
        </div>
        <div>
          <button onClick={handleBackClick}>Back</button>
          <button onClick={handleClick}>Next</button>
        </div>
      </div>
    </>
  );
}
