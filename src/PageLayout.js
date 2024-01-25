// PageLayout.js

import React from 'react';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';

const PageLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default PageLayout;
