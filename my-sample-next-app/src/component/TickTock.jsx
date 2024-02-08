'use client';

import React from 'react';

export function TickTock() {
  const [time, setTime] = React.useState('');
  React.useEffect(() => {
    setTime(new Date().toLocaleString());

    const timer = setInterval(() => {
      setTime(new Date().toLocaleString());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <>
      <p>this is TickTock.tsx</p>
      <p>{time}</p>
    </>
  );
}
