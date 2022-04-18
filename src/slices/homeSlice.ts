/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit';

import getPokemon from '@api/pokemon';

// Thunk to fetch
export const fetchPokemon = createAsyncThunk('home/fetchByName', async (name: string) => {
  const response = await getPokemon(name);

  return response;
});

const homeSlice = createSlice({
  name: 'home',
  initialState: {
    example: 'replace_this',
    exampleWithDate: {
      text: 'replace_this2',
      createdAt: new Date().toISOString(),
    },
    pokemon: {
      species: {
        name: 'ditto',
      },
      sprites: {
        front_default:
          'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png',
      },
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
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(fetchPokemon.fulfilled, (state, action) => {
      state.pokemon = action.payload;
    });
  },
});

export const { updateExample, updateExampleWithDate } = homeSlice.actions;

export default homeSlice.reducer;
