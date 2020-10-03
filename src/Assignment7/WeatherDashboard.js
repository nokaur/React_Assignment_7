import React, { Component } from "react";
import CurrentDisplay from "./CurrentWeatherDisplay";
import DailyDisplay from "./DailyWeatherDisplay";
import HourlyDisplay from "./HourlyWeatherDisplay";
import axios from "axios";

class DashBoard extends Component {
  // state = {
  //   settemp: ""
  // };
  render() {
    return (
      <div className="dashboard">
        <CurrentDisplay />
        <DailyDisplay />
        <HourlyDisplay />
      </div>
    );
  }
}

export default DashBoard;
