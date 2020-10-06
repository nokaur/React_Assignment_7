import { relativeTimeRounding } from "moment";
import React, { Component } from "react";
import Carousel from "react-bootstrap/Carousel";
import { Image, View, ScrollView } from "react-native";

var moment = require("moment");
const api_key = "2e6f9563a63d5a52691225e9e4bffd29";
class DailyDisplay extends Component {
  state = {
    dailydata: []
  };
  componentDidMount = () => {
    {
      this.getDailyForecast();
    }
  };
  getDailyForecast = async (e) => {
    //var time = `${date}`.split(" GMT")[0];
    const Lat = `${this.props.DailyForecast.Latitude}`;

    const Long = `${this.props.DailyForecast.Longitude}`;
    //e.PreventDefault();
    const api_call = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${Lat}&lon=${Long}&cnt=5&units=metric&appid=${api_key}`
    );
    const data = await api_call.json();
    // const daily = data.list.filter((reading) =>
    //   reading.dt_txt.includes("18:00:00")
    // );
    //console.log(daily);
    this.setState({
      dailydata: data.list
    });
  };

  // formatDayCards = () => {
  //   // return this.state.dailydata.map((reading, index) => (
  //   //   <DayCard reading={reading} key={index} />
  //   // ));
  // };
  wheatherDetails = (d) => {};
  render() {
    let newDate = new Date();
   
    // const weekday = `${this.state.dailydata.dt_txt}` * 1000;
    // newDate.setTime(weekday);
    return (
      <div>
        {/* <button onClick={this.getDailyForecast}></button> */}

        <View>
          <ScrollView
            horizontal={true}
            pagingEnabled
            contentContainerStyle={{ width: "160" }}
            showHorizontalScrollIndicator={false}
          >
            {this.state.dailydata.map((reading, index) => (
              <div>
                <div>
                  <h4>{moment(reading.dt * 1000).format("dddd")}</h4>
                  <p>{moment(reading.dt * 1000).format("MMMM Do")}</p>
                  {/* <i className={imgURL}></i> */}
                  <h3>
                    {Math.round(parseFloat(reading.main.temp) - 273.15)} °C
                  </h3>
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

export default DailyDisplay;
