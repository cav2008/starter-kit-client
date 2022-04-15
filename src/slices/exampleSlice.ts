/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const homeSlice = createSlice({
  name: 'home',
  initialState: {
    example: 'replace_this',
    exampleWithDate: {
      text: 'replace_this2',
      createdAt: new Date().toISOString(),
    },
  },
  reducers: {
    updateExample: (state, action: PayloadAction<string>) => {
      state.example = action.payload;
    },
    // object notation if you need to pass multiple parameters.
    updateExampleWithDate: {
      reducer: (state, action: PayloadAction<{ text: string; createdAt: string }>) => {
        state.exampleWithDate = action.payload;
      },
      // prepare the payload for the reducer
      prepare: (text: string) => {
        const createdAt = new Date().toISOString();

        return {
          payload: {
            text,
            createdAt,
          },
        };
      },
    },
  },
});

export const { updateExample, updateExampleWithDate } = homeSlice.actions;

export default homeSlice.reducer;
