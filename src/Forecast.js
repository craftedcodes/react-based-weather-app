import React, { useState } from "react";
import axios from "axios";
import Weather from "./Weather";
import Search from "./Search";
import CurrentWeather from "./CurrentWeather";
import "./Forecast.css";

export default function Forecast() {
  return (
    <div>
      <ul>
        <li>20:00</li>
        <li>31°C</li>
      </ul>
      <ul>
        <li>20:00</li>
        <li>31°C</li>
      </ul>
      <ul>
        <li>20:00</li>
        <li>31°C</li>
      </ul>
      <ul>
        <li>20:00</li>
        <li>31°C</li>
      </ul>
    </div>
  );
}
