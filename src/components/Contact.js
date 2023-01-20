import React, { Component, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class Contact extends Component {
  render() {
    let personalData = this.props.personalData;

    return (
      <div id="contact">
        <div id="contact-form">
          <h1>Like what you see? Send me a message! 📨</h1>
          <form>
            <input type="text" placeholder="First Name" id="first-name"></input>
            <input type="text" placeholder="Last Name" id="last-name"></input>
            <input type="email" placeholder="Email" id="email"></input>
            <textarea
              type="text"
              placeholder="Type your message here..."
              id="message"
            ></textarea>
            <button id="send-btn">Send 📮</button>
          </form>
        </div>

        <footer id="social">
          <div id="contact-info">
            <h4>{personalData.email}</h4>
            <h4>{personalData.phone}</h4>
            <h4>{personalData.address}</h4>
          </div>
          <h5 id="thank-you">
            Thank you for taking the time to look at my portfolio. ❤️
          </h5>
          <ul id="footer-social">
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
        </footer>
      </div>
    );
  }
}
