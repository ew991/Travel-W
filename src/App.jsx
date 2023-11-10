import React from 'react';
import { GobalStyle } from './GlobalStyle';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/Home';
import CatBa from './pages/CatBa';
import SharedLayout from './pages/ShareLayout';
import HaNoi from './pages/HaNoi';
import PlacesToGo from './pages/PlacesTogo';
import BestPlaceTG from './components/BestPlaceToGo';
import ScrollToTop from './components/ScrollToTop';
const App = () => {
  return (
    <>
      <GobalStyle></GobalStyle>
      <BrowserRouter>
        <ScrollToTop>
          <Routes>
            <Route path='/' element={<SharedLayout />}>
              <Route index element={<HomePage />}></Route>
              <Route path="/PlaceToGo/places/:id" element={<BestPlaceTG />}></Route>
              <Route path="/PlaceToGo/places" element={<CatBa />}></Route>
              <Route path="/PlaceToGo/places" element={<HaNoi />}></Route>
              <Route path='/PlaceToGo' element={<PlacesToGo />}></Route>
            </Route>
          </Routes>
        </ScrollToTop>
      </BrowserRouter>
    </>
  );
};

export default App;
