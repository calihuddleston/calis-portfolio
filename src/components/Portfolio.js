import React, { Component } from "react";

export default class Portfolio extends Component {
  render() {
    let personalData = this.props.personalData;
    return (
      <div id="portfolio-section">
        <ul id="project-list">
          {personalData.projects &&
            personalData.projects.map((project) => {
              return (
                <li key={project.name}>
                  <img src={project.image} className="portfolio-images"></img>
                  <a
                    href={project.repositoryLink}
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub Repo
                  </a>
                  <p>{project.techUsed}</p>
                </li>
              );
            })}
        </ul>
      </div>
    );
  }
}
