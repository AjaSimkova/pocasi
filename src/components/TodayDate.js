import React from "react";
import "./TodayDate.css";

const TodayDate = () => {
  const currentDate = new Date();
  console.log(currentDate);
  return (
    <div>
      <p className="todaydate">{currentDate.toDateString()}</p>
    </div>
  );
};

export default TodayDate;
