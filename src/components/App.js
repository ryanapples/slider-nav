import React from "react";
import Nav from "./Nav";

import navigationData from "../data/navigation.json";

import "./App.scss";

class App extends React.Component {
  renderNavigationData() {
    const { cities } = navigationData;
    return cities.map(city => {
      return <li key={city.label}>{city.label}</li>;
    });
  }

  render() {
    return (
      <div className="main-container">
        <Nav>{this.renderNavigationData()}</Nav>
      </div>
    );
  }
}

export default App;
