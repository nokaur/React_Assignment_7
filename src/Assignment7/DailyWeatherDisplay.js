import React, { Component } from "react";

class DailyDisplay extends Component {
  groupByDay = (data) => {
    return data.reduce((list, item) => {
      const date = item.dt.substr(0, 10);
      list[date] = list[date] || [];
      list[date].push(item);
      return list;
    });
  };

  getDayInfo = (data) => {
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

  getInfo = (
    data,
    max = [],
    min = [],
    temp = [],
    condition = [],
    description = []
  ) => {
    data.map((item) => {
      max.push(item.main.temp_max);
      min.push(item.main.temp_min);
      temp.push(item.main.temp);
    });
  };
  render() {
    const { Daily } = this.props;

    const tiles = Object.values(this.groupByDay(Daily));

    const dailyTiles = tiles.length > 3 ? tiles.slice(0, 3) : tiles;

    return (
      <div>
        {dailyTiles.map((item, i) => (
          <div key={i} ref={`div-${i}`}>
            <div>{this.getDayInfo(item)}</div>
            {this.getInfo(item)}
          </div>
        ))}
      </div>
    );
  }
}

export default DailyDisplay;
