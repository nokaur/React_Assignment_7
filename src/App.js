import React, { Component, useState } from "react";
import "./styles.css";
import Header from "./Assignment7/Header";
import "./Assignment7/MyStyleSheet.css";
import DashBoard from "./Assignment7/WeatherDashboard";
import axios from "axios";

class App extends Component {
  constructor(props) {
    super(props);
    this.setState({});
  }

  render() {
    return (
      <div className="App">
        <Header />
        <DashBoard />
      </div>
    );
  }
}

export default App;
