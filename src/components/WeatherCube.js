import "./WeatherCube.css";
import { useState } from "react";

export default function WeatherCube({ weatherData }) {
  const weather = weatherData;

  return (
    <div className="box-temp">
      <h1>{weather.name}</h1>

      {weather ? <h1>{(weather.main.temp - 273.15).toFixed(2)}°C</h1> : null}

      {weather ? <h1>{weather.wind.speed} rychlost m/s</h1> : null}
    </div>
  );
}
