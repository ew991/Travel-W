import React from 'react';
import { GobalStyle } from './GlobalStyle';
import Navbar from './components/navbar';
import Footer from './components/Footer';
const App = () => {
  return (
    <>
      <GobalStyle></GobalStyle>
      <Navbar />
      <Footer />
    </>
  );
};

export default App;
