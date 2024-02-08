import React from 'react';

function App() {
  const [time, setTime] = React.useState('');
  React.useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleString());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <>
      <p>this is App.tsx</p>
      <p>{time}</p>
    </>
  );
}

export default App;
