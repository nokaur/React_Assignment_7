import { relativeTimeRounding } from "moment";
import React, { Component } from "react";

const api_key = "2e6f9563a63d5a52691225e9e4bffd29";
class DailyDisplay extends Component {
  state = {
    dailydata: []
  };
  getDailyForecast = async (e) => {
    //var time = `${date}`.split(" GMT")[0];
    const Lat = `${this.props.DailyForecast.Latitude}`;

    const Long = `${this.props.DailyForecast.Longitude}`;
    // e.PreventDefault();
    const api_call = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${Lat}&lon=${Long}&appid=${api_key}`
    );
    const data = await api_call.json();
    const daily = data.list.filter((reading) =>
      reading.dt_txt.includes("18:00:00")
    );
    //console.log(daily);
    this.setState({
      dailydata: daily
    });
  };
  // formatDayCards = () => {
  //   return this.state.dailydata.map((reading, index) => (
  //     <div>
  //       <table>
  //         <tr key={index}>
  //           <td>{reading}</td>
  //         </tr>
  //       </table>
  //     </div>
  //   ));
  // };

  wheatherDetails = (d) => {};
  render() {
    const details = this.state.dailydata.map((reading, index) => (
      <div>
        <table>
          <tr key={index}>
            <td>{reading.main.temp}</td>
            <td>{reading.main.temp_min}</td>
            <td>{reading.dt_txt}</td>
            <td>{reading.icon}</td>
          </tr>
        </table>
      </div>
    ));
    return (
      <div>
        <button onClick={this.getDailyForecast}></button>
        <table>
          <tr>
            <td>{details}</td>
          </tr>
        </table>
      </div>
    );
  }
}

export default DailyDisplay;
