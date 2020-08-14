import React from "react";
import axios from "axios";

export default function Weather(props) {
  function handleResponse(response) {
    alert(
      "The weather in ${response.data.name} is ${response.data.main.temp}°C"
    );
  }
  let apiKey = `1f29a8457a11c97a01e380819aae6d53`;
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;
}
