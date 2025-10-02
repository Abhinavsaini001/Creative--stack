// CountdownBanner.js
import { useState, useEffect } from "react";

const CountdownBanner = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft());

  function getTimeLeft() {
    const difference = new Date(targetDate) - new Date();
    const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((difference / (1000 * 60)) % 60);
    const seconds = Math.floor((difference / 1000) % 60);
    return difference > 0
      ? { hours, minutes, seconds }
      : { hours: 0, minutes: 0, seconds: 0 };
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white text-center p-6 rounded-lg shadow-lg mx-4 mt-4 animate-bounce">
      <h2 className="text-2xl md:text-3xl font-bold mb-2">
        🚀 New Internship Batch Starts In:
      </h2>
      <div className="text-4xl md:text-5xl font-extrabold mb-2 flex justify-center gap-4">
        <span>{String(timeLeft.hours).padStart(2, "0")}h</span>
        <span>:</span>
        <span>{String(timeLeft.minutes).padStart(2, "0")}m</span>
        <span>:</span>
        <span>{String(timeLeft.seconds).padStart(2, "0")}s</span>
      </div>
      <p className="text-lg md:text-xl font-medium">
        Join now and kickstart your tech journey! 💻✨
      </p>
    </div>
  );
};

export default CountdownBanner;
