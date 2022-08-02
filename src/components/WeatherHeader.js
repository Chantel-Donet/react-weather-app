import React from "react";
import Search from "./Search.js";
import CityHeader from "./CityHeader.js";
import CurrentWeather from "./CurrentWeather.js";

export default function WeatherHeader() {
  return (
    <div className="WeatherHeader">
      {" "}
      <Search />
      <CityHeader />
      <CurrentWeather />
    </div>
  );
}
