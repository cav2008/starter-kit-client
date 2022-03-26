/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const exampleSlice = createSlice({
  name: 'example',
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

export const { updateExample, updateExampleWithDate } = exampleSlice.actions;

export default exampleSlice.reducer;
