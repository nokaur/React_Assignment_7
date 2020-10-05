import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { Image, View, ScrollView } from "react-native";
var moment = require("moment");

const DayCard = ({ reading }) => {
  let newDate = new Date();
  const weekday = reading.dt * 1000;
  newDate.setTime(weekday);

  const imgURL = `owf owf-${reading.weather[0].id} owf-5x`;

  return (
    <View>
      <ScrollView
        horizontal={true}
        pagingEnabled
        contentContainerStyle={{ width: "150" }}
      >
        <div>
          <div>
            <h3>{moment(newDate).format("dddd")}</h3>
            <p>{moment(newDate).format("MMMM Do, h:mm a")}</p>
            {/* <i className={imgURL}></i> */}
            <h2>{Math.round(parseFloat(reading.main.temp) - 273.15)} °C</h2>
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
      </ScrollView>
    </View>
  );
};

export default DayCard;
