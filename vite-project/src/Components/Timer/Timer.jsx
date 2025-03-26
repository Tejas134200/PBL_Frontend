import { useState, useEffect } from "react";
import "./Timer.css";

const Timer = () => {
  const initialTime = 2 * 60 * 60; // 2 hours in seconds
  const [time, setTime] = useState(initialTime);

  useEffect(() => {
    if (time <= 0) return;

    const interval = setInterval(() => {
      setTime((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [time]);

  const formatTime = (seconds) => {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${String(hrs).padStart(2, "0")}:${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
  };

  return (
    <div className="timer-container">
      <div className="timer">{formatTime(time)}</div>
    </div>
  );
};

export default Timer;

