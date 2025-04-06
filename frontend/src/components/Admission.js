import React, { useEffect, useState } from 'react';


const Admission = () => {
  const [timeLeft, setTimeLeft] = useState({});

  useEffect(() => {
    const countdownDate = new Date('October 5, 2025 00:00:00').getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countdownDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance < 0) {
        clearInterval(interval);
        setTimeLeft({});
      } else {
        setTimeLeft({ days, hours, minutes, seconds });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="admission-section">
      <h2 className="admission-title">🎓 ADMISSIONS OPEN</h2>
      <p className="admission-subtitle">Apply before <strong>October 5th, 2025</strong></p>
      {timeLeft.days !== undefined ? (
        <div className="countdown">
          <div><span>{timeLeft.days}</span><small>Days</small></div>
          <div><span>{timeLeft.hours}</span><small>Hours</small></div>
          <div><span>{timeLeft.minutes}</span><small>Minutes</small></div>
          <div><span>{timeLeft.seconds}</span><small>Seconds</small></div>
        </div>
      ) : (
        <p className="closed">Admissions Closed</p>
      )}
    </section>
  );
};

export default Admission;
