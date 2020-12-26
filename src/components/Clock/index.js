import React, {
  useState, useEffect, forwardRef, useImperativeHandle, useRef,
} from 'react';
import T from 'prop-types';
import {
  getTime, degreeHours, degreeMinutes, degreeSeconds,
} from './calculate';
import './styles.css';

const Clock = forwardRef((props, ref) => {
  const { defaultOffset } = props;
  const [offset, setOffset] = useState(defaultOffset);
  const [displaySTick, setDisplaySTick] = useState(true);
  const elmRef = useRef(null);

  // Offset can not be effect on seconds.
  const changeCurrentTime = (value) => {
    const elm = elmRef.current;
    const hourTickDeg = degreeHours(value);
    const minuteTickDeg = degreeMinutes(value);

    elm.style.setProperty('--deg-hours', `${hourTickDeg}deg`);
    elm.style.setProperty('--deg-minutes', `${minuteTickDeg}deg`);

    setOffset(value);
  };

  const changeBgColor = (color) => {
    const elm = elmRef.current;
    elm.style.setProperty('--bg-color', color);
  };

  const handleDisplaySTick = (display) => {
    setDisplaySTick(display);

    if (display) {
      const secondTickDeg = degreeSeconds(offset);
      const elm = elmRef.current;

      elm.style.setProperty('--deg-seconds', `${secondTickDeg}deg`);
    }
  };

  useEffect(() => {
    const time = getTime(offset);
    const elm = elmRef.current;
    const hourTickDeg = degreeHours(offset);
    const minuteTickDeg = degreeMinutes(offset);
    const secondTickDeg = degreeSeconds(offset);

    elm.style.setProperty('--start-seconds', time.getSeconds());
    elm.style.setProperty('--start-minutes', time.getMinutes());
    elm.style.setProperty('--deg-seconds', `${secondTickDeg}deg`);
    elm.style.setProperty('--deg-minutes', `${minuteTickDeg}deg`);
    elm.style.setProperty('--deg-hours', `${hourTickDeg}deg`);
  }, []);

  useImperativeHandle(ref, () => ({
    currentTime: () => getTime(offset),
    changeCurrentTime,
    changeBgColor,
    handleDisplaySTick,
  }));

  return (
    <svg
      className="clock-main"
      ref={elmRef}
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 40 40"
    >
      <circle className="clock-contain" cx="20" cy="20" r="19" />

      <g className="marks">
        <line x1="15" y1="0" x2="16" y2="0" />
        <line x1="15" y1="0" x2="16" y2="0" />
        <line x1="15" y1="0" x2="16" y2="0" />
        <line x1="15" y1="0" x2="16" y2="0" />
        <line x1="15" y1="0" x2="16" y2="0" />
        <line x1="15" y1="0" x2="16" y2="0" />
        <line x1="15" y1="0" x2="16" y2="0" />
        <line x1="15" y1="0" x2="16" y2="0" />
        <line x1="15" y1="0" x2="16" y2="0" />
        <line x1="15" y1="0" x2="16" y2="0" />
        <line x1="15" y1="0" x2="16" y2="0" />
        <line x1="15" y1="0" x2="16" y2="0" />
      </g>

      <line x1="0" y1="0" x2="9" y2="0" className="hour" />
      <line x1="0" y1="0" x2="13" y2="0" className="minute" />
      {displaySTick && <line x1="0" y1="0" x2="16" y2="0" className="seconds" />}
      <circle cx="20" cy="20" r="0.7" className="pin" />
    </svg>
  );
});

Clock.defaultProps = {
  defaultOffset: 0,
};

Clock.propTypes = {
  defaultOffset: T.number,
};

export default Clock;
