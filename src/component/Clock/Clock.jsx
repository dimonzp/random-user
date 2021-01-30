import React, { useEffect, useState } from "react";

const Clock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timerID = setInterval(tick, 250);
    return () => {
      clearInterval(timerID);
    };
  });

  const tick = () => {
    setTime(new Date());
  };

  return <b className="AppClock">{time.toLocaleTimeString()}</b>;
};

export default Clock;
