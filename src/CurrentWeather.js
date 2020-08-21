import React, { useState } from "react";
import axios from "axios";
import Weather from "./Weather";
import Search from "./Search";
import Forecast from "./Forecast";

import "./CurrentWeather.css";

export default function CurrentWeather() {
  return <h1 className="now">36°C</h1>;
}
