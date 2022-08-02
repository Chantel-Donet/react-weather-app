import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import WeatherHeader from "./WeatherHeader";
import "./App.css";

export default function App() {
  return (
    <div className="container">
      <div className="app-border">
        <WeatherHeader />
      </div>
      <p className="">
        Coded by {""}
        <a href="https://github.com/Chantel-Donet">Chantel Donet</a>, to view
        the code click{" "}
        <a href="https://github.com/Chantel-Donet/react-weather-app"> here</a>{" "}
      </p>
    </div>
  );
}
