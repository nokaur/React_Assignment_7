import React, { Component } from "react";
import refresh from "../Assignment7/refresh.jpg";
import { Image, View } from "react-native";
import Time from "react-time";
import { now } from "moment";
//var time = new Date().toLocaleString().split(", ")[1];
// alert(`${time}`);
class CurrentDisplay extends Component {
  //time = utcString.slice(-11, -4);
  render() {
    var time = `${this.props.Weather.Time}`;
    var dateObj = new Date(time * 1000);
    var utcString = dateObj.toUTCString();
    var finaltime = utcString.slice(-11, -4);
    return (
      <div className="current">
        {/* <table className="table">
          <tr height="30px">
            <td></td>
          </tr>
          <tr>
            <td colSpan="2">{this.props.Weather.City}</td>
          </tr>
          <tr>
            <td style={{ fontSize: "10" }}>
              {this.props.Weather.Temp_Max}|{this.props.Weather.Temp_Min}
            </td>
          </tr>
          <tr>
            <td>{this.props.Weather.Temperature}</td>
          </tr>
          <tr>
            <td>{this.props.Weather.Condition}</td>
          </tr>
          <tr>
            <td>{this.props.Weather.Description}</td>
          </tr>
          <tr>
            <td>{this.props.Weather.Error}</td>
          </tr>
        </table> */}
        <table className="table">
          <tr>
            <td colSpan="2">{this.props.Weather.City}</td>
            <td></td>
          </tr>
          <tr>
            <td colSpan="2" style={{ fontSize: "12px" }}>
              {" "}
              {Math.round(
                parseFloat(this.props.Weather.Temp_Max)
              )}{" "}
              &deg; |{" "}
              {Math.round(parseFloat(this.props.Weather.Temp_Min))}{" "}
              &deg;
            </td>
            <td></td>
          </tr>
          <tr>
            <td colSpan="2" style={{ fontSize: "25px" }}>
              {Math.round(parseFloat(this.props.Weather.Temperature))}{" "}
              &deg;c
            </td>
            <td></td>
          </tr>
          <tr style={{ textAlign: "left" }}>
            <td style={{ textAlign: "right", width: "110px" }}>
              <img
                src={`https://openweathermap.org/img/w/${this.props.Weather.Icon}.png`}
              />
            </td>
            <td style={{ textAlign: "left" }}>
              {this.props.Weather.Condition}
            </td>
          </tr>
          <tr>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td colSpan="2" style={{ fontSize: "12px" }}>
              Updated as of {finaltime}{" "}
            </td>
            <td></td>
          </tr>
        </table>
      </div>
    );
  }
}

export default CurrentDisplay;
