import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from './store';
import App from './App';

const containerDOM = document.getElementById('container');

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  containerDOM
);
