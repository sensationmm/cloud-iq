import { combineReducers } from 'redux';
import { ui } from './ui';
import { loader } from './loader';
import { error } from './error';
import { weather } from './weather';

export default combineReducers({
  ui,
  loader,
  error,
  weather
});
