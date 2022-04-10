// fetchBaseQuery is a fetch wrapper.
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

interface Pokemon {
  species: {
    name: string;
  };
  sprites: {
    front_shiny: string;
  };
}

// creating the api
const pokemonApi = createApi({
  reducerPath: 'pokemonApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2/' }),
  endpoints: (builder) => ({
    getPokemonByName: builder.query<Pokemon, string>({
      query: (name) => `pokemon/${name}`,
    }),
  }),
});

export const { useGetPokemonByNameQuery } = pokemonApi;

export default pokemonApi;
