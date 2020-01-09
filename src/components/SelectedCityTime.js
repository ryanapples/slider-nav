import React from "react";
import SelectedCityContext from "../context/SelectedCityContext";

const cityOffset = {
  Cupertino: "-8",
  "New York City": "-5",
  London: "+0",
  Amsterdam: "+1",
  Tokyo: "+9",
  "Hong Kong": "+8",
  Sydney: "+11"
};

class SelectedCityTime extends React.Component {
  static contextType = SelectedCityContext;

  state = {
    date: new Date()
  };

  calcTime = (city, offset) => {
    // convert to msec
    // add local time zone offset
    // get UTC time in msec
    let utc =
      this.state.date.getTime() + this.state.date.getTimezoneOffset() * 60000;

    // create new Date object for different city
    // using supplied offset
    let newDate = new Date(utc + 3600000 * offset);

    // return time as a string
    return `Current time in ${city} is ${newDate.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit"
    })}`;
  };

  render() {
    return (
      <div className="selected-city-time">
        {this.context === null
          ? ""
          : this.calcTime(this.context, cityOffset[this.context])}
      </div>
    );
  }
}

export default SelectedCityTime;
