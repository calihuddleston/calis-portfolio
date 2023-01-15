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

import React, { useState } from "react";
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
          <div className="info">{project.description}</div>
          <div className="intro">
            {project.techUsed}
            <a href={project.repositoryLink}>
              <i className="fa fa-github project-repo"></i>
            </a>
          </div>
        </div>

        <div id="image-row">
          <button onClick={handleBackClick} id="project-button">
            Back
          </button>

          <img src={project.image} width="55%" className="project-image"></img>
          <button onClick={handleClick} id="project-button">
            Next
          </button>
        </div>
      </div>
    </>
  );
}
