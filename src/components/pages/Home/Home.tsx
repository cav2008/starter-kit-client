import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import { updateExample, updateExampleWithDate, fetchPokemon } from '@slices/homeSlice';
// We use this hook so we don't need to add types all the time.
import { useAppDispatch, useAppSelector } from '@hooks/reduxHooks';

const Home = () => {
  const dispatch = useAppDispatch();
  const example = useAppSelector((state) => state.home.example);
  const exampleWithDate = useAppSelector((state) => state.home.exampleWithDate);
  const pokemon = useAppSelector((state) => state.home.pokemon);

  useEffect(() => {
    dispatch(fetchPokemon('pikachu'));
  }, [dispatch]);

  const onExampleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(updateExample(e.target.value));
  };

  const onExampleWithDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(updateExampleWithDate(e.target.value));
  };

  return (
    <div className="p-4">
      <div>
        <Link className="bg-blue-400 border rounded-xl pointer p-2 inline-block" to="/example">
          Example page &gt;
        </Link>
      </div>
      <h1 className="text-8xl text-blue-600">Hello, world!</h1>
      <form>
        <label className="mr-4" htmlFor="example">
          example input:
          <input id="example" className="border ml-2" type="text" onChange={onExampleChange} />
        </label>
        <span data-testid="example-result">{example}</span>
        <br />
        <label className="mr-4" htmlFor="example-with-date">
          example with date:
          <input
            id="example-with-date"
            className="border ml-2"
            type="text"
            onChange={onExampleWithDateChange}
          />
        </label>
        <span data-testid="example-with-date-result">{exampleWithDate.createdAt}</span>
      </form>

      <div>
        <p data-testid="pokemon-name">{pokemon.species.name}</p>
        <img src={pokemon.sprites.front_default} alt={pokemon.species.name} />
      </div>
    </div>
  );
};

export default Home;
