interface Pokemon {
  species: {
    name: string;
  };
  sprites: {
    front_default: string;
  };
}

const getPokemon = async (name: string): Promise<Pokemon> => {
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
    const data = (await response.json()) as Pokemon;

    return data;
  } catch (error) {
    const { message } = error as Error;

    throw Error(message);
  }
};

export default getPokemon;
