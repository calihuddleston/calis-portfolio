import React, { Component } from "react";
import oneCommunity from "../images/onecommunity.png";
import meijer from "../images/meijer.png";

export default class Resume extends Component {
  render() {
    return (
      <div id="experience">
        <div id="positions">
          <img src={oneCommunity}></img>
          <h2>Software Developer Volunteer</h2>
          <h4>December 2022 - Current</h4>
          <ul className="desc-list">
            <li className="list-item">
              • Solved bug issues in front-end and back-end software.
            </li>
            <li className="list-item">• Performed PR/code reviews.</li>
            <li className="list-item">• Implemented new features.</li>
            <li className="list-item">
              • Tested software and wrotedocumentation.
            </li>
          </ul>

          <img src={meijer} width="325px" id="margin-top"></img>
          <h2>Curbside Clerk</h2>
          <h4>November 2022 - Present</h4>
          <ul className="desc-list">
            <li className="list-item">
              • Demonstrated speed and accuracy in order item selection and
              substitutions
            </li>
            <li className="list-item">
              • Minimized shrink by carefully handling order items.
            </li>
            <li className="list-item">
              • Productively shopped 90 items an hour to fulfill customer orders
              on time.
            </li>
            <li className="list-item">
              • Thoughtfully assisted customers, in-store, with product
              location(s) while shopping.
            </li>
            <li className="list-item">
              • Problem-solving and troubleshooting software at Self-Checkout.
            </li>
          </ul>
          <h2>Customer Service Representative</h2>
          <h4>June 2021 - November 2022</h4>
          <ul className="desc-list">
            <li className="list-item">
              • Greet customers in a personable and professional manner,
              providing quick, responsive customer service.
            </li>
            <li className="list-item">
              • Diligent in processing customer refunds and assisting in
              resolving disputes/discrepancies.
            </li>
            <li className="list-item">
              • Delegate tasks in order to address in-coming calls and assist
              customers.
            </li>
          </ul>
          <h2>Cashier</h2>
          <h4>December 2020 - November 2022</h4>
          <ul className="desc-list">
            <li className="list-item">
              • Energetic cashier valued for fast, friendly service and accuracy
              in handling customer transactions.
            </li>
            <li className="list-item">
              • Addressed customer concerns while quickly moving them in the
              check-out process.
            </li>
            <li className="list-item">
              • Informed customers on promotions to enhance sales.
            </li>
            <li className="list-item">• Served over 50 customers a day.</li>
            <li className="list-item">
              • Recognized for theft prevention by helping the customer scan
              items in the checkout process.
            </li>
          </ul>
        </div>

        <a
          href="/images/portfolio-resume.pdf"
          download="cali-huddleston-resume.pdf"
          id="resume"
        >
          <button id="resume-download">Download My Resume 📥</button>
        </a>
      </div>
    );
  }
}
