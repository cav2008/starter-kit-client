import { combineReducers } from '@reduxjs/toolkit';

import exampleReducer from '@slices/exampleSlice';

const rootReducer = combineReducers({
  home: exampleReducer,
});

export default rootReducer;
