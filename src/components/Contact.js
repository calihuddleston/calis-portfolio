import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class Contact extends Component {
  render() {
    let personalData = this.props.personalData;
    return (
      <div>
        <div id="contact-info">
          <div>
            <h4>{personalData.email}</h4>
            <h4>{personalData.phone}</h4>
            <h4>{personalData.address}</h4>
          </div>
          <form>
            <input type="text" placeholder="First Name"></input>
            <input type="text" placeholder="Last Name"></input>
            <input type="email" placeholder="Email"></input>
            <input type="text" placeholder="Type your message here..."></input>
            <button>Send</button>
          </form>
        </div>

        <footer id="social">
          <h5>Thank you for taking the time to look at my portfolio.</h5>
          <h6>Made with ❤️</h6>
          <ul id="footer-social">
            {personalData.socialLinks &&
              personalData.socialLinks.map((social) => {
                return (
                  <li key={social.name} className="social-links">
                    <a href={social.url} target="_blank">
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
