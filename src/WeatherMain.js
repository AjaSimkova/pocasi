import React from "react";
import { useState, useEffect } from "react";
import "./WeatherMain.css";
import WeatherBox from "./components/WeatherBox";
import WeatherCube from "./components/WeatherCube";
import TodayDate from "./components/TodayDate";

export default function WeatherMain() {
  const [city, setCity] = useState("");
  const [myData, setMyData] = useState("");

  const userInput = (event) => {
    setCity(event.target.value);
  };

  const changeHandler = async () => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=5d8e7660aa6b89a37978be4ddd062f77`
    )
      .then((response) => response.json())
      .then((data) => {
        setMyData(data);
        console.log(data);
      });
  };
  return (
    <div className="box-main">
      <div className="box-first">
        <h1 className="main-title">Počasí</h1>
        <div className="line"></div>
      </div>
      <div className="box-second">
        <input type="text" placeholder="město" onChange={userInput}></input>

        <button onClick={changeHandler}>Odeslat</button>
      </div>
      <div className="box-weather">
        <TodayDate />
        <WeatherBox weather={myData} />
      </div>
    </div>
  );
}
