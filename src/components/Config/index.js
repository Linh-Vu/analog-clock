import React from 'react';
import T from 'prop-types';
import './styles.css';
// Config properties for clock (bg color, offset, ...)

const Config = (props) => {
  const {
    defaultDisplaySTick,
    defaultOffset,
    defaultBgColor,
    handleSelectColor,
    handleChangeOffset,
    handleChangeDisplaySTick,
  } = props;

  return (
    <div className="config-tools">
      <label htmlFor="displaySecondTick" className="check-box-item tool-item">
        <input
          defaultChecked={defaultDisplaySTick}
          onChange={handleChangeDisplaySTick}
          id="displaySecondTick"
          type="checkbox"
          name="display second tick"
        />
        Display second tick
      </label>

      <div className="tool-item">
        <input
          defaultValue={defaultOffset}
          onChange={handleChangeOffset}
          className="inport-number"
          type="number"
          placeholder="offset"
        />
      </div>

      <div className="tool-item">
        <select onChange={handleSelectColor} defaultValue={defaultBgColor} className="select-item">
          <option value="#fff">White</option>
          <option value="#F7DC6F">Yellow</option>
          <option value="#27AE60">Green</option>
        </select>
      </div>
    </div>
  );
};

Config.defaultProps = {
  defaultDisplaySTick: true,
  defaultOffset: 0,
  defaultBgColor: '#fff',
  handleSelectColor: () => {},
  handleChangeOffset: () => {},
  handleChangeDisplaySTick: () => {},
};

Config.propTypes = {
  defaultDisplaySTick: T.bool,
  defaultOffset: T.number,
  defaultBgColor: T.string,
  handleSelectColor: T.func,
  handleChangeOffset: T.func,
  handleChangeDisplaySTick: T.func,
};

export default Config;
