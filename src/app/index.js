import React, { useRef } from 'react';
import Clock from '../components/Clock';
import Config from '../components/Config';

const App = () => {
  const clockRef = useRef(null);

  const handleChangeDisplaySTick = (e) => {
    const { checked } = e.target;

    clockRef.current.handleDisplaySTick(checked);
  };

  const handleChangeOffset = (e) => {
    if (e.target.value === 0 || e.target.value) {
      const offset = e.target.value || 0;
      clockRef.current.changeCurrentTime(offset);
    }
  };

  const handleSelectColor = (e) => {
    const color = e.target.value;

    clockRef.current.changeBgColor(color);
  };

  return (
    <div>
      <Config
        handleChangeDisplaySTick={handleChangeDisplaySTick}
        handleChangeOffset={handleChangeOffset}
        handleSelectColor={handleSelectColor}
      />
      <Clock ref={clockRef} />
    </div>
  );
};

export default App;
