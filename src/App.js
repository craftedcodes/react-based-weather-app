import React from "react";
import CurrentWeather from "./CurrentWeather";
import Forecast from "./Forecast";
import ForecastPreview from "./ForecastPreview";
import Search from "./Search";
import Source from "./Source";
import Weather from "./Weather";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Search />
      <CurrentWeather />
      <Weather />
      <br />
      <Forecast />
      <ForecastPreview />
      <br />
      <Source />
    </div>
  );
}

export default App;
