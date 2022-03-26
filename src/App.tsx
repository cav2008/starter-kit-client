import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from '@pages/Home/Home';
import Example from '@pages/Example/Example';

import './global.pcss';

const App = () => {
  console.log('hello world');

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="example" element={<Example />} />
    </Routes>
  );
};

export default App;
