import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function ForecastPreview(props) {
  function hours() {
    let date = new Date(props.data.dt * 1000);
    let hours = date.getHours();
    return `${hours}:00`;
  }

  function temperature() {
    if (props.units === "imperial") {
      let temperature = Math.round(props.data.main.temp);

      return `${temperature}°F`;
    } else {
      let temperature = Math.round(((props.data.main.temp - 32) * 5) / 9);

      return `${temperature}°C`;
    }
  }

  return (
    <div className="ForecastPreview col text-center">
      {hours()}
      <WeatherIcon code={props.data.weather[0].icon} />
      {temperature()}
    </div>
  );
}
