import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import WeatherIcon from "./WeatherIcon";
import Search from "./Search";

import Forecast from "./Forecast";
import WeatherConversion from "./WeatherConversion";
export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);
  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      wind: response.data.wind.speed,
      city: response.data.name,
    });
  }
  function search() {
    const apiKey = "1f29a8457a11c97a01e380819aae6d53";
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }
  function handleSubmit(event) {
    event.preventDefault();
    search();
  }
  function handleCityChange(event) {
    setCity(event.target.value);
  }
  if (weatherData.ready) {
    return (
      <div>
        <ul>
          <li className="Circle">
            <div className="Weather">
              <ul className="InnerCircle">
                <li className="Data">
                  <Search
                    handleCityChange={handleCityChange}
                    handleSubmit={handleSubmit}
                  />
                </li>
                <li className="City Data">{weatherData.city}</li>
                <li className="Data">
                  <WeatherConversion data={weatherData} />
                </li>
                <li className="Data">
                  <WeatherIcon code={weatherData.icon} size={120} />
                </li>
              </ul>
            </div>
          </li>
          <li className="Forecast">
            <Forecast city={weatherData.city} />
          </li>
        </ul>
      </div>
    );
  } else {
    search();
    return null;
  }
}
