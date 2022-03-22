import React from 'react';

import { updateExample, updateExampleWithDate } from './slice/exampleSlice';
// we use this hook so we don't need to type it all the time.
import { useAppDispatch, useAppSelector } from './hooks';

import './global.pcss';

const App = () => {
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
    <>
      <h1 className="text-8xl text-blue-600">Hello, world!</h1>
      <span>example: {example}</span>
      <input className="border" type="text" onChange={onExampleChange} />
      <span>example with date: {exampleWithDate.createdAt}</span>
      <input className="border" type="text" onChange={onExampleWithDateChange} />
    </>
  );
};

export default App;
