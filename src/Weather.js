import React from "react";
import ReactAnimatedWeather from "react-animated-weather";
import WeatherIcon from "./WeatherIcon";

export default function Weather(props) {
  let temp = Math.round(props.temperature);
  let humid = Math.round(props.humidity);
  let descript = props.description;
  let wind = Math.round(props.wind);
  let icon = WeatherIcon;
  if (temp) {
    return (
      <div>
        <p>Temperature: {temp}°C</p>
        <p>Description: {descript}</p>
        <p>Humidity: {humid}%</p>
        <p>Wind: {wind}km/h</p>
        <img src={icon} alt={descript} />
      </div>
    );
  } else {
    return "";
  }
}
