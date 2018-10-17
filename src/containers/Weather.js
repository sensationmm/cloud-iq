import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Search from '../components/Search';
import Result from '../components/Result';
import Loader from '../components/Loader';
import Error from '../components/Error';
import { searchWeather } from '../actions/weather';

const Weather = (props) => {
  const { location, temp, forecast, wind, searchWeather, isLoading, error } = props;

  return (
    <div className="body">
      <h1>Weather Forecast</h1>

      {isLoading && <Loader />}

      {!isLoading && <Search location={location} search={searchWeather} />}

      {!isLoading && location && 
        <Result 
          location={location} 
          temp={temp}
          forecast={forecast}
          wind={wind}
        />
      }

      {error && <Error message={error} />}
    </div>
  );
}

Weather.propTypes = {
  isLoading: PropTypes.bool
};

const mapStateToProps = state => ({
  isLoading: state.loader.isLoading,
  location: state.weather.location,
  forecast: state.weather.forecast,
  temp: state.weather.temp,
  wind: state.weather.wind,
  error: state.error.message
});

const mapDispatchToProps = dispatch =>
  bindActionCreators({
    searchWeather
  }, dispatch
);

export default connect(mapStateToProps, mapDispatchToProps)(Weather);
