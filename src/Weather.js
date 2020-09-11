import React from "react";

export default function Weather(props) {
  let temp = Math.round(props.temperature);
  let humid = Math.round(props.humidity);
  let descript = props.description;
  let wind = Math.round(props.wind);
  let icon = `http://openweathermap.org/img/wn/${props.icon}.png`;
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
