// import headerImg from "../headerImg.png";
import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class Header extends Component {
  render() {
    let personalData = this.props.personalData;
    return (
      <div>
        <nav id="nav">
          <a href="#home" className="nav-links">
            Home
          </a>
          <a href="#about" className="nav-links">
            About Me
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
          <h1 className="banner-text">Hello! I'm Cali</h1>
          <ul className="social-links banner-text">
            {personalData.socialLinks &&
              personalData.socialLinks.map((social) => {
                return (
                  <li key={social.name} className="social-links">
                    <a href={social.url} target="_blank">
                      <FontAwesomeIcon
                        icon={social.icon}
                        color="black"
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
