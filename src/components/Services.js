import React from "react";
import servicesImg from "../images/services.jpg";
import { AiFillDownCircle, AiOutlineHeart } from "react-icons/ai";

export default function Services() {
  return (
    <div id="column">
      <div id="services">
        <div className="card">
          <img src={servicesImg} width="350px"></img>
          <div className="bg-change">
            <h2 className="service-title">Landing/Brochure Page</h2>
            <h3>$50/Mo. or $500/Yr.</h3>
            <details>
              <div className="details">
                <p>Includes:</p>
                <ul className="service-list">
                  <li>• Custom Domain (ex: mywebsite.com)</li>
                  <li>• Monthly Content Updates & Maintenence (5 Hours/Mo.)</li>
                </ul>
              </div>
            </details>
          </div>
        </div>
        <div className="card">
          <img src={servicesImg} width="350px"></img>
          <div className="bg-change">
            <h2 className="service-title">E-Commerce Website</h2>
            <h3>$200/mo. or $2000/yr.</h3>
            <details>
              <p>Includes:</p>
              <ul className="service-list">
                <li>• Custom Domain (ex: mywebsite.com)</li>
                <li>• Monthly Content Updates & Maintenence (20 Hours/Mo.)</li>
                <li>• Site Customer Service Support</li>
              </ul>
              <div id="best-value">
                <h5>$$ BEST VALUE!! $$</h5>
              </div>
            </details>
          </div>
        </div>
        <div className="card">
          <img src={servicesImg} width="350px"></img>
          <div className="bg-change">
            <h2 className="service-title">Interactive Website</h2>
            <h3>$150/mo. or $1600/yr.</h3>
            <details>
              <p>Includes:</p>
              <ul className="service-list">
                <li>• Custom Domain (ex: mywebsite.com)</li>
                <li>• Monthly Content Updates & Maintenence (10 Hours/Mo.)</li>
              </ul>
            </details>
          </div>
        </div>
      </div>
      <div id="more">
        <p>
          Looking for something more? Let's get in touch for a
          <span> personlized</span> quote
          <AiOutlineHeart />
        </p>
        <a href="#contact" id="contact-link-down">
          <AiFillDownCircle id="bounce" />
        </a>
      </div>
    </div>
  );
}
