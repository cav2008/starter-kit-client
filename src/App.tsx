import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from '@components/pages/Home';
import Example from '@components/pages/Example';

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
