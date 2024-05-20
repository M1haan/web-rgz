import React from 'react';
import './App.css';
import Main from '../pages/main/main';
import Catalog from '../pages/catalog/catalog';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NotFoundScreen from '../pages/not-found-screen/not-found-screen';
import Wrapper from '../layout/wrapper/wrapper';


function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route  path='/' element={<Wrapper />}>
        <Route index element={<Main />} />
          <Route path='catalog' element={<Catalog />} />
          <Route path='*' element={<NotFoundScreen />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
