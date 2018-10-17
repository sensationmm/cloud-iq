import React from 'react';
import PropTypes from 'prop-types';

import '../styles/css/result.css';

/*
 * Result
 *
 * Renders a set of weather data
 *
 * @author Kevin Reynolds <kevin@sensationmultimedia.co.uk>
 *
 * @param {string} location - name of location for weather forecast
 * @param {string} forecast - forecast for the day
 * @param {string} temp - value for temp forecast
 * @param {string} wind - value for wind speed
*/

const Result = (props) => {
  const { location, forecast, temp, wind } = props;

  return (
    <div className="result">
      <h2>Results for {location}</h2>
      <h3>Today's forecast is {forecast}</h3>
      <p>Temperature {temp}&deg;</p>
      <p>Wind {wind}m/s</p>
    </div>
  );
}

Result.propTypes = {
  location: PropTypes.string,
  forecast: PropTypes.string,
  temp: PropTypes.number,
  wind: PropTypes.number
};

export default Result;
