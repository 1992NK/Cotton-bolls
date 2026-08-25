"use client";
import { useEffect, useState } from "react";
import styles from "./countdown.module.css";
const CountDown = ({ expiryDate }) => {
  const [time, setTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date(expiryDate);
    const updateCountdown = () => {
      const now = new Date();
      const diff = targetDate - now;
      if (diff <= 0) return;
      setTime({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      });
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);
    return () => clearInterval(interval);
  }, [expiryDate]);


  return (
    <div className={styles.countdown}>

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
};

export default CountDown;