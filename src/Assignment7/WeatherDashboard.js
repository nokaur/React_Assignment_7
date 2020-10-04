import React, { Component } from "react";
import CurrentDisplay from "./CurrentWeatherDisplay";
import DailyDisplay from "./DailyWeatherDisplay";
import HourlyDisplay from "./HourlyWeatherDisplay";
import axios from "axios";
const api_key = "2e6f9563a63d5a52691225e9e4bffd29";
class DashBoard extends Component {
  state = {
    Latitude: undefined,
    Longitude: undefined,
    City: undefined,
    Temp_Max: undefined,
    Temp_Min: undefined,
    Temperature: undefined,
    Condition: undefined,
    Description: undefined,
    Icon: undefined,
    Time: undefined,
    Error: undefined
  };

  getWeather = async (e) => {
    //var time = `${date}`.split(" GMT")[0];
    const Lat = this.props.Location.Latitude;
    const Long = this.props.Location.Longitude;
    // e.PreventDefault();
    const api_call = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${Lat}&lon=${Long}&appid=${api_key}`
    );
    const data = await api_call.json();
    console.log(data);
    this.setState({
      Latitude: this.props.Location.Latitude,
      Longitude: this.props.Location.Longitude,
      City: data.name,
      Temp_Max: data.main.temp_max,
      Temp_Min: data.main.temp_min,
      Temperature: data.main.temp,
      Condition: data.weather[0].main,
      Description: data.weather[0].description,
      Icon: data.weather[0].icon,
      Time: data.dt,
      Error: undefined
    });
  };
  render() {
    // {
    //   this.getWeather();
    // }
    return (
      <div className="dashboard">
        {/* <p>{this.props.Location.Latitude}</p>
        <p>{this.props.Location.Longitude}</p>*/}
        <button onClick={this.getWeather}>Get Weather</button>
        <CurrentDisplay Weather={this.state} />
        <DailyDisplay DailyForecast={this.state} />
        <HourlyDisplay />
      </div>
    );
  }
}

export default DashBoard;
