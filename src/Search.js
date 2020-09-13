import React, { useState } from "react";
import axios from "axios";
import Weather from "./Weather";

export default function Search() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState({});

  function showTemp(response) {
    setWeather({
      temp: response.data.main.temp,
      descript: response.data.weather[0].main,
      humid: response.data.main.humidity,
      wind: response.data.wind.speed,
      icon: response.data.weather[0].icon,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    let apiKey = `1f29a8457a11c97a01e380819aae6d53`;
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(url).then(showTemp);
  }

  function handleChange(event) {
    setCity(event.target.value);
  }

  return (
    <div>
      <form className="Search" onSubmit={handleSubmit}>
        <input type="search" className="search-field" onChange={handleChange} />
        <input type="submit" placeholder="Search" className="submit-field" />
      </form>
      <br />
      <Weather
        temperature={weather.temp}
        humidity={weather.humid}
        description={weather.descript}
        wind={weather.wind}
        icon={weather.icon}
      />
    </div>
  );
}
