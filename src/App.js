import React from "react";
import Search from "./Search";
import Weather from "./Weather";
import Forecast from "./Forecast";
import "./App.css";

function App() {
  return (
    <div className="App">
      <br />
      <Search />
      <Weather />
      <Forecast />
    </div>
  );
}

export default App;
