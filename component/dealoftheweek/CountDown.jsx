"use client";
import { useEffect, useState } from "react";
const CountDown =({ expiryDate })=>{
   const calculateTime = () => {
    const difference = new Date(expiryDate) - new Date();

    if (difference <= 0) {
      return {
        days: "00",
        hours: "00",
        minutes: "00",
        seconds: "00",
      };
    }

    return {
      days: String(Math.floor(difference / (1000 * 60 * 60 * 24))).padStart(
        2,
        "0"
      ),

      hours: String(
        Math.floor((difference / (1000 * 60 * 60)) % 24)
      ).padStart(2, "0"),

      minutes: String(
        Math.floor((difference / (1000 * 60)) % 60)
      ).padStart(2, "0"),

      seconds: String(
        Math.floor((difference / 1000) % 60)
      ).padStart(2, "0"),
    };
  };

  const [time, setTime] = useState(calculateTime());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(calculateTime());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="countdown">
      <div>
        <span>{time.days}</span>
        <small>Days</small>
      </div>

      <div>
        <span>{time.hours}</span>
        <small>Hours</small>
      </div>

      <div>
        <span>{time.minutes}</span>
        <small>Minutes</small>
      </div>

      <div>
        <span>{time.seconds}</span>
        <small>Seconds</small>
      </div>
    </div>
  );
}

export default CountDown;