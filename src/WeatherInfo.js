import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherConversion from "./WeatherConversion";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>{props.data.city}</h1>
      <ul>
        <li>
          <FormattedDate date={props.data.date} />
        </li>
        <li>{props.data.description}</li>
      </ul>
      <div>
        <div>
          <div>
            <div>
              <WeatherIcon code={props.data.icon} />
            </div>

            <div>
              <WeatherConversion
                temperature={props.data.temperature}
                units={props.units}
                setUnits={props.setUnits}
              />
            </div>
          </div>
        </div>
        <div>
          <ul>
            <li>Humidity: {props.data.humidity}%</li>
            <li>Wind: {props.data.wind} mph</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
