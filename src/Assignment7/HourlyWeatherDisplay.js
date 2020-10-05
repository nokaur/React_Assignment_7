import { relativeTimeRounding } from "moment";
import React, { Component } from "react";
// import DayCard from "./DayCard";

const api_key = "2e6f9563a63d5a52691225e9e4bffd29";
class HourlyDisplay extends Component {
  state = {
    hourlyData: []
  };
  getHourlyForecast = async (e) => {
    //var time = `${date}`.split(" GMT")[0];
    const Lat = `${this.props.HourlyForecast.Latitude}`;

    const Long = `${this.props.HourlyForecast.Longitude}`;
    //e.PreventDefault();
    const api_call = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${Lat}&lon=${Long}&cnt=8&units=metric&&appid=${api_key}`
    );
    const data = await api_call.json();

    this.setState({
      hourlyData: data
    });
  };

  render() {
    //const i=0;
    const details = this.state.hourlyData.map((reading, index) => (
      <div style={{ display: "inline" }}>
        <table>
          <tr key={index}>
            <td>
              {reading.main.temp}
              <img
                src={`https://openweathermap.org/img/w/${reading.weather[0].icon}.png`}
              />
              {reading.main.temp_min}
              {reading.dt_txt}
            </td>
          </tr>
        </table>
      </div>
    ));
    return (
      <div>
        <button onClick={this.getHourlyForecast}></button>
        <table>
          <tr>
            <td>{details}</td>
          </tr>
        </table>
      </div>
    );
  }
}

export default HourlyDisplay;
