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
    <div style={{ background: '#333', color: '#eee', padding: '8px' }}>
      <p>this is App.tsx</p>
      <p>{time}</p>
    </div>
  );
}

export default App;
