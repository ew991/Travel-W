import React from 'react';
import { GobalStyle } from './GlobalStyle';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/Home';
import SharedLayout from './pages/ShareLayout';
import PlacesToGo from './pages/PlacesTogo';
import BestPlaceTG from './components/BestPlaceToGo';
import PlanYourTrip from './pages/PlanYourTrip';
import ScrollToTop from './components/ScrollToTop';
import ThingToDo from './pages/ThingsToDo';
import SingelInspired from './pages/SingelInspried';
import SingelElm from './pages/SingelElm';
const App = () => {
  return (
    <>
      <GobalStyle></GobalStyle>
      <BrowserRouter>
        <ScrollToTop>
          <Routes>
            <Route path='/' element={<SharedLayout />}>
              <Route index element={<HomePage />}></Route>
              <Route path='/ThingToDo' element={<ThingToDo />}></Route>
              <Route path="/ThingToDo/inspired/:id" element={<SingelInspired />}></Route>
              <Route path="/ThingToDo/Elm/:id" element={<SingelElm />}></Route>
              <Route path='/PlaceToGo' element={<PlacesToGo />}></Route>
              <Route path="/PlaceToGo/places/:id" element={<BestPlaceTG />}></Route>
              <Route path='/PlanYourTrip' element={<PlanYourTrip />}></Route>

            </Route>
          </Routes>
        </ScrollToTop>
      </BrowserRouter>

    </>
  );
};

export default App;
