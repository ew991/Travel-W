import React from 'react';
import { GobalStyle } from './GlobalStyle';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/Home';
import CatBa from './pages/CatBa';
import SharedLayout from './pages/ShareLayout';
const App = () => {
  return (
    <>
      <GobalStyle></GobalStyle>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<SharedLayout />}>
            <Route index element={<HomePage />}></Route>
            <Route path="/PlaceToGo/Catba" element={<CatBa />}></Route>
          </Route>

        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
