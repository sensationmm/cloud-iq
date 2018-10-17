import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';

import App from './containers/App.js';
import { checkBreakPoint } from './actions/ui';

//Detect resize
window.addEventListener('resize', () => store.dispatch(checkBreakPoint()) );

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
