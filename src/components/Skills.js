import React, { Component } from "react";
import { PieChart, Pie, Legend, Cell, Tooltip } from "recharts";

export default class Skills extends Component {
  render() {
    let personalData = this.props.personalData;
    const skillData = [
      {
        skillName: "SEO",
        percentage: 85,
      },
      {
        skillName: "HTML5",
        percentage: 90,
      },
      {
        skillName: "CSS3",
        percentage: 75,
      },
      {
        skillName: "JavaScript",
        percentage: 45,
      },
      {
        skillName: "jQuery",
        percentage: 25,
      },
      {
        skillName: "REST API's",
        percentage: 25,
      },
      {
        skillName: "Git",
        percentage: 45,
      },
      {
        skillName: "Webpack",
        percentage: 20,
      },
      {
        skillName: "MySQL",
        percentage: 55,
      },
      {
        skillName: "MongoDB",
        percentage: 70,
      },
      {
        skillName: "Express",
        percentage: 65,
      },
      {
        skillName: "Sequelize",
        percentage: 65,
      },
      {
        skillName: "React.js",
        percentage: 70,
      },
      {
        skillName: "Node.js",
        percentage: 60,
      },
      {
        skillName: "Handlebars",
        percentage: 45,
      },
      {
        skillName: "MVC",
        percentage: 85,
      },
      {
        skillName: "GraphQL",
        percentage: 35,
      },
      {
        skillName: "JSON",
        percentage: 65,
      },
      {
        skillName: "Apollo",
        percentage: 45,
      },
    ];

    let COLORS = [
      "#383923",
      "#9F907E",
      "#382921",
      "#5C4734",
      "#41402A",
      "#191318",
      "#827058",
      "#2C1E1D",
      "#C3AE96",
      "#2F2C28",
      "#73794F",
      "#D3D3C8",
      "#BAB8AC",
      "#151B0E",
      "#A69D8C",
      "#989586",
      "#596742",
      "#A7A78C",
      "#2B321C",
      "#435827",
      "#EDF1F2",
      "#DCDED7",
    ];

    return (
      <div id="skill-section">
        <h2 id="skill-header">Education & Skillset</h2>
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
        <PieChart width={700} height={700} loading="lazy" id="pie">
          <Pie
            data={skillData}
            dataKey="percentage"
            nameKey="skillName"
            outerRadius={250}
            fill="green"
            className="pie-data"
          >
            {skillData.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </div>
    );
  }
}
