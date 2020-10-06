import React, { Component, useState } from "react";
import "./styles.css";
import Header from "./Assignment7/Header";
import "./Assignment7/MyStyleSheet.css";
import DashBoard from "./Assignment7/WeatherDashboard";
import axios from "axios";
import { Image } from "react-native";

class App extends Component {
  state = {
    Latitude: undefined,
    Longitude: undefined
  };
  componentDidMount = () => {
    {
      this.getLocation();
    }
  };

  getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.getCoordinates);
    } else {
      ("Geolocation is not supported in your browser");
    }
  };

  getCoordinates = (position) => {
    // alert(`${position.coords.latitude}`)
    this.setState({
      Latitude: position.coords.latitude,
      Longitude: position.coords.longitude
    });
  };
  render() {
    return (
      <div className="App">
        <Header />
        <DashBoard Location={this.state} />
      </div>
    );
  }
}

export default App;
