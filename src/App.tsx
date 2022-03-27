import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from '@pages/Home/Home';
import Example from '@pages/Example/Example';

import './global.pcss';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="example" element={<Example />} />
    </Routes>
  </BrowserRouter>
);

export default App;
