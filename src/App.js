import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Books from './pages/Books';
import Categories from './pages/Categories';

const App = () => (
  <>
    <Routes>

      <Route path="/" element={<Books />} />
      <Route path="/categorie" element={<Categories />} />
    </Routes>
  </>
);

export default App;
