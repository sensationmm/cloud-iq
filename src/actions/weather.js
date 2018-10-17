import {
  GET_WEATHER_BEGIN,
  GET_WEATHER_SUCCESS,
  GET_WEATHER_ERROR
} from '../config/constants';

import config from '../config/config.json';
import axios from 'axios';

export const searchWeather = (location) => dispatch => {

  dispatch({ type: GET_WEATHER_BEGIN });

  const { apiUrl, appId, units } = config;
  const encodedLocation = encodeURIComponent(location);
  const requestUrl = `${apiUrl}?units=${units}&appid=${appId}&q=${encodedLocation}`;

  return axios.get(requestUrl).then(function(response) {
    // if(response.data.cod && response.data.message) {
    if((response.data.cod && response.data.message !== 'accurate') || !response.data.list || !response.data.list[0]) {
      dispatch({ type: GET_WEATHER_ERROR, message: 'Could not fetch weather for that location'})

    } else {
      console.log(response.data.list[0]);
      const result = {
        location: response.data.list[0].name,
        forecast: response.data.list[0].weather[0].description,
        temp: response.data.list[0].main.temp,
        wind: response.data.list[0].wind.speed
      }
      dispatch({ type: GET_WEATHER_SUCCESS, weather: result})
    }

  }, function(response) {
      dispatch({ type: GET_WEATHER_ERROR, message: 'API Error'})
  });
};
