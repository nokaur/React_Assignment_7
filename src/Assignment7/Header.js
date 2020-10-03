import React, { Component } from "react";
import HeaderIcon from "../Assignment7/HeaderIcon.png";

class Header extends Component {
  render() {
    return (
      <div className="header">
        <table style={{ textAlign: "center" }}>
          <tr>
            <td height="8px"></td>
          </tr>
          <tr>
            <td style={{ width: "67px" }}></td>

            <td>
              <img src={HeaderIcon} width="30px" />
            </td>
            <td></td>
            <td>Weather</td>
          </tr>
        </table>
      </div>
    );
  }
}

export default Header;
