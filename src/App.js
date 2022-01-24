import React from 'react';
import { Provider } from 'react-redux';
import { Route, Routes } from 'react-router-dom';

import Books from './pages/Books';
import Categories from './pages/Categories';
import store from './redux/configureStore';

const App = () => (
  <>
    <Provider store={store}>
      <Routes>

        <Route path="/" element={<Books />} />
        <Route path="/categorie" element={<Categories />} />
      </Routes>
    </Provider>

  </>
);

export default App;
