import "./App.css";
import React, { Suspense, useState } from "react";
import { ProgressBar } from "react-loader-spinner";
import personalData from "./personalData";
import Header from "./components/Header";
const About = React.lazy(() => import("./components/About"));
const Services = React.lazy(() => import("./components/Services"));
const Skills = React.lazy(() => import("./components/Skills"));
const Portfolio = React.lazy(() => import("./components/Portfolio"));
const Resume = React.lazy(() => import("./components/Resume"));
const Contact = React.lazy(() => import("./components/Contact"));

export default function App() {
  window.alert(
    "This site is still being developed. Would you like to continue?"
  );
  const style = {
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  };
  return (
    <div className="App" id="scroll-container">
      <Suspense
        fallback={
          <div style={style}>
            <ProgressBar
              height="300"
              width=""
              ariaLabel="progress-bar-loading"
              wrapperStyle={{}}
              wrapperClass="progress-bar-wrapper"
              borderColor="#7D866B"
              barColor="#989684"
            />
          </div>
        }
      >
        <Header personalData={personalData} />
        <About personalData={personalData} />
        <Services />
        <Skills personalData={personalData} />
        <Portfolio personalData={personalData} />
        <Resume />
        <Contact personalData={personalData} />
      </Suspense>
    </div>
  );
}
