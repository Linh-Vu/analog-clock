// milliseconds per hour
const UNIT = 3600000;

const getTime = (offset, date = new Date()) => {
  const now = date.valueOf();

  return new Date(now + offset * UNIT);
};

// calculate degree hours
const degreeHours = (offset, date = new Date()) => {
  const time = getTime(offset, date);

  return (time.getHours() % 12) * 30;
};

// calculate degree minutes
const degreeMinutes = (offset, date = new Date()) => {
  const time = getTime(offset, date);

  return time.getMinutes() * 6;
};

// calculate degree seconds
const degreeSeconds = () => {
  const time = getTime(0);

  return time.getSeconds() * 6;
};

export {
  getTime,
  degreeHours,
  degreeMinutes,
  degreeSeconds,
};
