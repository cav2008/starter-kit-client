import React from 'react';
import { Link } from 'react-router-dom';

import { updateExample, updateExampleWithDate } from '@slices/exampleSlice';
// we use this hook so we don't need to type it all the time.
import { useAppDispatch, useAppSelector } from '@src/hooks';

const Home = () => {
  const dispatch = useAppDispatch();
  const example = useAppSelector((state) => state.examples.example);
  const exampleWithDate = useAppSelector((state) => state.examples.exampleWithDate);

  const onExampleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(updateExample(e.target.value));
  };

  const onExampleWithDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(updateExampleWithDate(e.target.value));
  };

  return (
    <div className="p-4">
      <h1 className="text-8xl text-blue-600">Hello, world!</h1>
      <div>
        <span className="mr-4">example: {example}</span>
        <input className="border" type="text" onChange={onExampleChange} />
        <br />
        <span className="mr-4">example with date: {exampleWithDate.createdAt}</span>
        <input className="border" type="text" onChange={onExampleWithDateChange} />
      </div>
      <div>
        <Link className="bg-blue-400 border rounded-xl pointer p-2 inline-block" to="/example">
          Example page &gt;
        </Link>
      </div>
    </div>
  );
};

export default Home;
