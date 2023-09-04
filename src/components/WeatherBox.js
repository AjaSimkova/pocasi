import WeatherCube from "./WeatherCube";
import "./WeatherBox.css";
import { weatherIndex } from "./NewData";

const WeatherBox = ({ weather }) => {
  const weatherData = weather;

  return (
    <div className="weather-box">
      <WeatherCube weatherData={weatherData} />
    </div>
  );
};

export default WeatherBox;
