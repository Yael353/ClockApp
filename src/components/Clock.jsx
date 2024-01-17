import React, { useState, useEffect } from "react";
import "./CSS/Clock.css";

function Clock({ city, timeZone }) {
  const [currentTime, setCurrentTime] = useState(
    new Date().toLocaleTimeString([], { timeZone })
  );

  useEffect(
    function () {
      const intervalId = setInterval(function () {
        setCurrentTime(new Date().toLocaleTimeString());
      }, 1000);

      return function () {
        clearInterval(intervalId);
      };
    },
    [timeZone]
  );

  return (
    <div className="ClockContainer">
      <h2>Current Time</h2>
      <p>{currentTime}</p>
    </div>
  );
}

export default Clock;
