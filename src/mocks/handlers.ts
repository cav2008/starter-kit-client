import { rest } from 'msw';

// File to handle all our mocked endpoints
export const handlers = [
  rest.get('https://pokeapi.co/api/v2/pokemon/pikachu', (req, res, ctx) =>
    res(
      ctx.status(200),
      ctx.json({
        species: {
          name: 'pikachu',
        },
        sprites: {
          front_default:
            'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png',
        },
      }),
      ctx.delay(150)
    )
  ),
];

export const pokemonHandlerException = rest.get(
  'https://pokeapi.co/api/v2/pokemon/pikachu',
  (req, res, ctx) =>
    res.once(
      ctx.status(500),
      ctx.json({
        message: 'Internal server error',
      }),
      ctx.delay(150)
    )
);
