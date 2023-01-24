import React, { Component } from "react";
import aboutImg from "../images/aboutImg.jpg";

export default class About extends Component {
  render() {
    let personalData = this.props.personalData;
    return (
      <div id="about">
        <img
          src={aboutImg}
          height="500px"
          alt="Cali sitting at a table outside, looking at laptop while coding"
          id="about-img"
        ></img>
        <p id="paragraph">{personalData.about}</p>
      </div>
    );
  }
}
