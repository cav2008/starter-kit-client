import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';

import store from './store';
import App from './App';

const containerDOM = document.getElementById('container');

const root = createRoot(containerDOM!);
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
