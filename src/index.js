import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.css";
import WeatherHeader from "./WeatherHeader";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
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
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
