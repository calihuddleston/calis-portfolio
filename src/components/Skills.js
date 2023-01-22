import React, { Component } from "react";
import skillsImg from "../images/code.png";

export default class Skills extends Component {
  render() {
    let personalData = this.props.personalData;

    return (
      <div id="skills">
        {personalData.education &&
          personalData.education.map((item) => {
            return (
              <div id="education">
                <img src={item.image}></img>
                <h2>{item.name}</h2>
                <h3>{item.course}</h3>
                <h3>{item.dateOfGraduation}</h3>
              </div>
            );
          })}
        <div id="skillsImg">
          <img src={skillsImg}></img>
        </div>
      </div>
    );
  }
}
