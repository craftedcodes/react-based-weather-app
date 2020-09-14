import React, { useState } from "react";
import "./WeatherConversion.css";

export default function WeatherConversion(props) {
  const [unit, setUnit] = useState("celsius");

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  if (unit === "celsius") {
    return (
      <div className="WeatherConversion">
        <p className="currentTemp"> {Math.round(props.data.temperature)} </p>
        <span className="units">
          <a href="/" id="celsius-link" className="active">
            °C
          </a>{" "}
          |
          <a href="/" id="fahrenheit-link" onClick={showFahrenheit}>
            °F{" "}
          </a>
        </span>
      </div>
    );
  } else {
    let fahrenheit = (props.data.temperature * 9) / 5 + 32;
    return (
      <div className="WeatherConversion">
        <p className="currentTemp"> {Math.round(fahrenheit)} </p>
        <span className="units">
          <a href="/" id="celsius-link" onClick={showCelsius}>
            °C
          </a>{" "}
          |°F{" "}
        </span>
      </div>
    );
  }
}
