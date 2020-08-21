import React from "react";
import Search from "./Search";
import Weather from "./Weather";
import Forecast from "./Forecast";
import CurrentWeather from "./CurrentWeather";
import City from "./City";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Search />
      <City />
      <CurrentWeather />
      <Weather />
      <br />
      <Forecast />
    </div>
  );
}

export default App;
