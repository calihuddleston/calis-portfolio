import React from "react";
import servicesImg from "../images/services.jpg";

export default function Services() {
  return (
    <div id="services">
      <div className="card">
        <img src={servicesImg} width="350px"></img>
        <div className="bg-change">
          <h2>Landing/Brochure Page</h2>
          <h3>$50/Mo. or $500/Yr.</h3>
          <p>Includes:</p>
          <ul className="service-list">
            <li>• Custom Domain (ex: mywebsite.com)</li>
            <li>• Monthly Content Updates & Maintenence (5 Hours/Mo.)</li>
          </ul>
        </div>
      </div>
      <div className="card">
        <img src={servicesImg} width="350px"></img>
        <div className="bg-change">
          <h2>E-Commerce Website</h2>
          <h3>$200/mo. or $2000/yr.</h3>
          <p>Includes:</p>
          <ul className="service-list">
            <li>• Custom Domain (ex: mywebsite.com)</li>
            <li>• Monthly Content Updates & Maintenence (20 Hours/Mo.)</li>
            <li>• Site Customer Service Support</li>
          </ul>
          <div id="best-value">
            <h5>$$ BEST VALUE!! $$</h5>
          </div>
        </div>
      </div>
      <div className="card">
        <img src={servicesImg} width="350px"></img>
        <div className="bg-change">
          <h2>Interactive Website</h2>
          <h3>$150/mo. or $1600/yr.</h3>
          <p>Includes:</p>
          <ul className="service-list">
            <li>• Custom Domain (ex: mywebsite.com)</li>
            <li>• Monthly Content Updates & Maintenence (10 Hours/Mo.)</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
