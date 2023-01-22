import React, { Component, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import emailjs from "@emailjs/browser";
import personalData from "../personalData";

export default function Contact() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === "first_name") {
      setFirstName(inputValue);
    } else if (inputType === "last_name") {
      setLastName(inputValue);
    } else if (inputType === "reply_to") {
      setEmail(inputValue);
    } else {
      setMessage(inputValue);
    }
  };

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_d1s178q",
        "template_xr2h71b",
        form.current,
        "ORbvSs4YtfOjJsmNZ"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    alert("Message sent!");
    setFirstName("");
    setLastName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div id="contact">
      <div id="contact-form">
        <h1>Like what you see? Send me a message! 📨</h1>
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            placeholder="First Name"
            id="first-name"
            name="first_name"
            value={firstName}
            onChange={handleInputChange}
          ></input>
          <input
            type="text"
            placeholder="Last Name"
            id="last-name"
            name="last_name"
            value={lastName}
            onChange={handleInputChange}
          ></input>
          <input
            type="email"
            placeholder="Email"
            id="email"
            name="reply_to"
            value={email}
            onChange={handleInputChange}
          ></input>
          <textarea
            type="text"
            placeholder="Type your message here..."
            id="message"
            name="message"
            value={message}
            onChange={handleInputChange}
          ></textarea>
          <input id="send-btn" type="submit" value="Send 📮"></input>
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
                <li key={social.name} className="footer-links">
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
