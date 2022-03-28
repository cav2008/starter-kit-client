import { combineReducers } from '@reduxjs/toolkit';

import exampleReducer from '@slices/exampleSlice';

const rootReducer = combineReducers({
  examples: exampleReducer,
});

export default rootReducer;
