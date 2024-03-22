import React, { useEffect, useState } from 'react';


function CountdownTimer() {
  const targetDate = new Date('2024-06-27T00:00:00').getTime();
  const [timeLeft, setTimeLeft] = useState(getTimeRemaining(targetDate));

  useEffect(() => {
    const intervalId = setInterval(() => {
      const updatedTimeLeft = getTimeRemaining(targetDate);
      setTimeLeft(updatedTimeLeft);
      if (updatedTimeLeft.total <= 0) {
        clearInterval(intervalId);
      }
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, [targetDate]);

  function getTimeRemaining(endTime) {
    const total = endTime - Date.now();
    const days = Math.floor(total / (1000 * 60 * 60 * 24));
    const hours = Math.floor((total % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((total % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((total % (1000 * 60)) / 1000);

    return {
      total,
      days,
      hours,
      minutes,
      seconds,
    };
  }

  return (
    <div className="countdown-timer">
      <h1>Countdown Timer</h1>
      <div className="countdown">
        <div>
          <span>{timeLeft.days}</span>
          <p>Days</p>
        </div>
        <div>
          <span>{timeLeft.hours}</span>
          <p>Hours</p>
        </div>
        <div>
          <span>{timeLeft.minutes}</span>
          <p>Minutes</p>
        </div>
        <div>
          <span>{timeLeft.seconds}</span>
          <p>Seconds</p>
        </div>
      </div>
    </div>
  );
}

export default CountdownTimer;