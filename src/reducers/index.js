import { combineReducers } from 'redux';
import { ui } from './ui';
import { loader } from './loader';

export default combineReducers({
  ui,
  loader
});
