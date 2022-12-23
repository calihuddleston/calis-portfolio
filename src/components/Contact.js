import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class Contact extends Component {
  render() {
    let personalData = this.props.personalData;
    return (
      <div id="contact-info">
        <div>
          <h4>{personalData.email}</h4>
          <h4>{personalData.phone}</h4>
          <h4>{personalData.address}</h4>
        </div>

        <div className="social">
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
        </div>
      </div>
    );
  }
}
