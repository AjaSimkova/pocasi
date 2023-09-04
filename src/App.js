import "./App.css";
import TodayDate from "./components/TodayDate";
import WeatherCube from "./components/WeatherCube";
import WeatherMain from "./WeatherMain";

export default function App() {
  return (
    <div className="box-main">
      <div className="box-container">
        <WeatherMain />
      </div>
    </div>
  );
}
