import React, { Component } from "react";
import refresh from "../Assignment7/refresh.jpg";
import { Image, View } from "react-native";
import Time from "react-time";
var time = new Date().toLocaleString().split(", ")[1];
// alert(`${time}`);
class CurrentDisplay extends Component {
  render() {
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
            <td>{this.props.Weather.City}</td>
          </tr>
          <tr>
            <td style={{ fontSize: "12px" }}>
              {" "}
              {this.props.Weather.Temp_Max} &deg; |{" "}
              {this.props.Weather.Temp_Min} &deg;
            </td>
          </tr>
          <tr>
            <td style={{ fontSize: "25px" }}>
              {this.props.Weather.Temperature} &deg;c
            </td>
          </tr>
          <tr>
            <td>{this.props.Weather.Condition}</td>
            <td rowSpan="2">
              <img
                src={refresh}
                width="40"
                style={{ backgroundColor: "transparent", visibility: "hidden" }}
              />
            </td>
          </tr>
          <tr>
            <td style={{ fontSize: "12px" }}>Updated as of {time}</td>
          </tr>
        </table>
      </div>
    );
  }
}

export default CurrentDisplay;
