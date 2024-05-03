import { useState, useEffect } from 'react';

export function useTimer(initialMinutes = '') {
  const [minutes, setMinutes] = useState(initialMinutes);
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    if (isActive) {
      const interval = setInterval(() => {
        if (seconds === 0) {
          if (minutes > 0) {
            setMinutes(minutes - 1);
            setSeconds(59);
          } else {
            setIsActive(false);
            clearInterval(interval);
            alert('Готово!');
          }
        } else {
          setSeconds(seconds - 1);
        }
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [isActive, minutes, seconds]);

  const handleStart = () => {
    if (!isActive && minutes > 0) {
      setIsActive(true);
      setSeconds(0);
    }
  };

  return {
    minutes,
    seconds,
    isActive,
    setMinutes,
    handleStart
  };
}
