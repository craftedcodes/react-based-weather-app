import React, { useState } from "react";
import axios from "axios";
import Weather from "./Weather";
import Search from "./Search";
import "./Forecast.css";

export default function Forecast() {
  return (
    <div className="forecast">
      <ul className="forecast-list">
        <li>20:00</li>
        <li>31°C</li>
      </ul>
      <ul className="forecast-list">
        <li>20:00</li>
        <li>31°C</li>
      </ul>
      <ul className="forecast-list">
        <li>20:00</li>
        <li>31°C</li>
      </ul>
      <ul className="forecast-list">
        <li>20:00</li>
        <li>31°C</li>
      </ul>
    </div>
  );
}
