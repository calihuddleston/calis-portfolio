import "./App.css";
import React, { Component } from "react";
import personalData from "./personalData";
import Header from "./components/Header";
import About from "./components/About";
import Contact from "./components/Contact";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header personalData={personalData} />
        <About personalData={personalData} />
        <Contact personalData={personalData} />
      </div>
    );
  }
}

export default App;
