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
              <img
                src="https://uploads.codesandbox.io/uploads/user/927c06c2-eee9-402d-be30-5df3ec015b1b/xa2b-HeaderIcon.png"
                width="30px"
              />
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
