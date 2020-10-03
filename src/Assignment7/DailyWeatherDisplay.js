import React, { Component } from "react";

class DailyDisplay extends Component {
  groupByDay = (data) => {
    return data.reduce((list, item) => {
      const date = item.dt.substr(0, 10);
      list[date] = list[date] || [];
      list[date].push(item);
      return list;
    }, {});
  };

  getDayInfor = (data) => {
    const dayOfWeek = [
      "sunday",
      "monday",
      "tuesday",
      "wednesday",
      "thursday",
      "friday",
      "saturday"
    ];
    return daysOfWeek[new Date(data[0].dt * 1000).getDay()];
  };
  render() {
    const { daily } = this.props.Daily;
    const tiles = Object.values(this.groupByDay(daily));
    return <div className="daily"> daily</div>;
  }
}

export default DailyDisplay;
