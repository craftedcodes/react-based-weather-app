import React from "react";
import Forecast from "./Forecast";
import Source from "./Source";
import Weather from "./Weather";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Weather defaultCity="Berlin" />
      <br />
      <Source />
    </div>
  );
}

export default App;
