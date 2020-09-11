import React from "react";

import ForecastPreview from "./ForecastPreview";
import axios from "axios";
import "./Forecast.css";

export default function Forecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);

  function handleForecastResponse(response) {
    setForecast(response.data);
    setLoaded(true);
  }

  if (loaded && props.city === forecast.city.name) {
    return (
      <div className="WeatherForecast row">
        <ForecastPreview data={forecast.list[0]} units={props.units} />
        <ForecastPreview data={forecast.list[1]} units={props.units} />
        <ForecastPreview data={forecast.list[2]} units={props.units} />
        <ForecastPreview data={forecast.list[3]} units={props.units} />
        <ForecastPreview data={forecast.list[4]} units={props.units} />
        <ForecastPreview data={forecast.list[5]} units={props.units} />
      </div>
    );
  } else {
    let apiKey = "1f29a8457a11c97a01e380819aae6d53";
    let apiURL = `https://api.openweathermap.org/data/2.5/forecast?q=${props.city}&appid=${apiKey}&units=imperial`;
    axios.get(apiURL).then(handleForecastResponse);

    return null;
  }
}
