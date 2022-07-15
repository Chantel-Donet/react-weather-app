import React from "react";

export default function City() {
  let cityInformation = {
    city: "Johannesburg",
    updated: "23:23",
    conditions: "Cloudy",
  };
  return (
    <div className="City">
      <h1>{cityInformation.city}</h1>
      <ul>
        <li>Last updated: {cityInformation.updated} </li>
        <li>{cityInformation.conditions}</li>
      </ul>
    </div>
  );
}
