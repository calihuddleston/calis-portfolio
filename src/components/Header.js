import React, { Component, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import headerImg from "../images/portrait.png";

export default class Header extends Component {
  render() {
    let personalData = this.props.personalData;

    return (
      <div id="home">
        <nav id="nav">
          <a href="#home" className="nav-links">
            Home
          </a>
          <a href="#about" className="nav-links">
            About Me
          </a>
          <a href="#services" className="nav-links">
            Services
          </a>
          <a href="#skills" className="nav-links">
            Skills
          </a>
          <a href="#projects" className="nav-links">
            Projects
          </a>
          <a href="#experience" className="nav-links">
            Experience
          </a>
          <a href="#contact" className="nav-links">
            Contact
          </a>
        </nav>

        <header>
          <div className="headerComponent">
            <img
              src={headerImg}
              width="450px"
              id="image"
              alt="Self-portrait of me smiling with glasses on"
            ></img>
          </div>
          <ul id="social-header" className="banner-text">
            {personalData.socialLinks &&
              personalData.socialLinks.map((social) => {
                return (
                  <li key={social.name} className="social-links">
                    <a href={social.url} target="_blank" rel="noreferrer">
                      <FontAwesomeIcon
                        icon={social.icon}
                        color="white"
                        size="2x"
                      />
                    </a>
                  </li>
                );
              })}
          </ul>
        </header>
      </div>
    );
  }
}
