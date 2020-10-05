import { relativeTimeRounding } from "moment";
import React, { Component } from "react";
import Carousel from "react-bootstrap/Carousel";
import { Image, View, ScrollView } from "react-native";
// import DayCard from "./DayCard";

var moment = require("moment");
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
      `https://api.openweathermap.org/data/2.5/forecast?lat=${Lat}&lon=${Long}&cnt=8&units=metric&appid=${api_key}`
    );
    const data = await api_call.json();
    //console.log(data);
    this.setState({
      hourlyData: data.list
    });
  };

  // render() {
  //   //const i=0;
  //   console.log(this.state.hourlyData);
  //   const details = this.state.hourlyData.map((reading, index) => (
  //     <div>
  //       <table>
  //         <tr key={index}>
  //           <td>
  //             {reading.main.temp}
  //             <img
  //               src={`https://openweathermap.org/img/w/${reading.weather[0].icon}.png`}
  //             />
  //             {reading.main.temp_min}
  //             {reading.dt_txt}
  //           </td>
  //         </tr>
  //       </table>
  //     </div>
  //   ));
  //   return (
  //     <div>
  //       <button onClick={this.getHourlyForecast}></button>
  //       <table>
  //         <tr>
  //           <td>{details}</td>
  //         </tr>
  //       </table>
  //     </div>
  //   );
  // }
  render() {
    {
      this.getHourlyForecast();
    }
    let newDate = new Date();
    // const weekday = `${this.state.dailydata.dt_txt}` * 1000;
    // newDate.setTime(weekday);
    return (
      <div>
        {/* <button onClick={this.getHourlyForecast}></button> */}

        <View>
          <ScrollView
            horizontal={true}
            pagingEnabled
            contentContainerStyle={{ width: "160" }}
            showHorizontalScrollIndicator={false}
          >
            {this.state.hourlyData.map((reading, index) => (
              <div>
                <div>
                  <h4>{moment(reading.dt * 1000).format("dddd")}</h4>
                  <p>{moment(reading.dt * 1000).format("MMMM Do")}</p>
                  {/* <i className={imgURL}></i> */}
                  <h3>{Math.round(parseFloat(reading.main.temp))} °C</h3>
                  <div>
                    <p>
                      <img
                        src={`https://openweathermap.org/img/w/${reading.weather[0].icon}.png`}
                      />
                    </p>
                    <p>{reading.weather[0].description}</p>
                  </div>
                </div>
              </div>
            ))}
          </ScrollView>
        </View>
      </div>
    );
  }
}

export default HourlyDisplay;
