import React from "react";
import servicesImg from "../images/services.jpg";
import { AiFillDownCircle, AiOutlineHeart } from "react-icons/ai";
import graphic from "../images/graphic.jpg";
import photo from "../images/photo.jpg";
import social from "../images/social.jpg";
import landing from "../images/landing.jpg";
import ecommerce from "../images/ecommerce.jpg";

export default function Services() {
  return (
    <div id="column">
      <div id="services">
        <div className="card">
          <img src={landing} width="350px"></img>
          <div className="bg-change">
            <h2 className="service-title">Landing/Brochure Page</h2>
            <h3>$50/Mo. or $500/Yr.</h3>
            <div className="details">
              <p>Includes:</p>
              <ul className="service-list">
                <li>• Custom Domain (ex: mywebsite.com)</li>
                <li>• Monthly Content Updates & Maintenence (5 Hours/Mo.)</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="card">
          <img src={ecommerce} width="350px"></img>
          <div className="bg-change">
            <h2 className="service-title">E-Commerce Website</h2>
            <h3>$200/mo. or $2000/yr.</h3>

            <p>Includes:</p>
            <ul className="service-list">
              <li>• Custom Domain (ex: mywebsite.com)</li>
              <li>• Monthly Content Updates & Maintenence (20 Hours/Mo.)</li>
              <li>• Site Customer Service Support</li>
              <li>• Website Promotion & Marketing (Ads)</li>
            </ul>
            <div id="best-value">
              <h5>$$ BEST VALUE!! $$</h5>
            </div>
          </div>
        </div>
        <div className="card">
          <img src={servicesImg} width="350px"></img>
          <div className="bg-change">
            <h2 className="service-title">Interactive Website</h2>
            <h3>$150/mo. or $1600/yr.</h3>
            <p>Includes:</p>
            <ul className="service-list">
              <li>• Custom Domain (ex: mywebsite.com)</li>
              <li>• Monthly Content Updates & Maintenence (10 Hours/Mo.)</li>
              <li>• Website Promotion & Marketing (Ads)</li>
            </ul>
          </div>
        </div>
      </div>
      <div id="services">
        <div className="card">
          <img src={graphic} width="350px"></img>
          <div className="bg-change">
            <h2 className="service-title">Graphic Design</h2>
            <p>(Add On Service)</p>
            <h3>$250</h3>
            <details>
              <p>Includes:</p>
              <ul className="service-list">
                <li>• Logo Design</li>
                <li>• Business Cards</li>
                <li>• Stationery</li>
                <li>• Promotional Material</li>
                <li>• Brochures/Menu/Flyers</li>
                <li>• Stickers/Labels</li>
              </ul>
            </details>
          </div>
        </div>
        <div className="card">
          <img src={photo} width="350px"></img>
          <div className="bg-change">
            <h2 className="service-title">Photography</h2>
            <p>(Add On Service)</p>
            <h3>$100 +</h3>
            <details>
              <p>1 Hour Session</p>
              <p>Includes:</p>
              <ul className="service-list">
                <li>• 10 Edited Photos</li>
                <li>• Access to All Photos Taken</li>
                <li>• $25 per half hour added w/ 5 additional edited photos</li>
              </ul>
            </details>
          </div>
        </div>
        <div className="card">
          <img src={social} width="350px"></img>
          <div className="bg-change">
            <h2 className="service-title">Social</h2>
            <p>(Add On Service)</p>
            <h3>$100</h3>
            <details>
              <p>Includes:</p>
              <ul className="service-list">
                <li>• Profile Banners</li>
                <li>• Instagram/Facebook Posts</li>
                <li>• Facebook Ads</li>
                <li>• LinkedIn Profiles</li>
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
