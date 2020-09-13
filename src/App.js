import React from "react";
import Forecast from "./Forecast";
import ForecastPreview from "./ForecastPreview";
import Search from "./Search";
import Source from "./Source";
import Weather from "./Weather";
import WeatherConversion from "./WeatherConversion";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Search />
      <Weather defaultCity="Berlin" />
      <WeatherConversion />
      <br />
      <Forecast />
      <ForecastPreview />
      <br />
      <Source />
    </div>
  );
}

export default App;
