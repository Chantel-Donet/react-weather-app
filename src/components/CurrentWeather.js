import React from "react";
import "./CurrentWeather.css";

export default function CurrentWeather() {
  let currentConditions = {
    temperature: "19",
    humidity: "80",
    wind: "10",
  };

  return (
    <div className="CurrentWeather">
      <div className="row">
        <div className="col-6">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
            alt="Cloudy"
            className="float-left"
          />

          <p className="temperature float-left">
            {currentConditions.temperature}
            <span className="units">℃ | ℉ </span>
          </p>
        </div>

        <div className="col-6 weather-conditions">
          <ul>
            <li>Humidity: {currentConditions.humidity}% </li>
            <li>Wind: {currentConditions.wind}km/h </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
