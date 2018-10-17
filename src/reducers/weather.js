import {
  GET_WEATHER_SUCCESS,
  GET_WEATHER_ERROR
} from '../config/constants';

const defaultState = {
  location: null,
  temp: null,
  humidity: null,
  pressure: null
};

export const weather = (state = defaultState, action) => {
  switch (action.type) {

    case GET_WEATHER_SUCCESS: {
      const { weather } = action;

      return { 
        ...weather
      };
    }

    case GET_WEATHER_ERROR:
      return defaultState;
      
    default:
      return state;
  }
};
