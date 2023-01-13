import "./App.css";
import React, { Component } from "react";
import personalData from "./personalData";
import Header from "./components/Header";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Skills from "./components/Skills";

class App extends Component {
  render() {
    window.alert(
      "This site is still being developed. Would you like to continue?"
    );
    return (
      <div className="App" id="scroll-container">
        <Header personalData={personalData} />
        <About personalData={personalData} />
        <Skills personalData={personalData} />
        <Portfolio personalData={personalData} />
        <Contact personalData={personalData} />
      </div>
    );
  }
}

export default App;
