// App.js

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import PageLayout from './PageLayout';
import Home from './Components/Home';
import About from './Components/About';
import Products from './Components/Products';
import AgriProducts from './Utils/AgriProducts';
import EngineeringProducts from './Utils/EngineeringProducts';
import Food_Beverage from './Utils/Food_Beverage';
import RawOrganicMaterial from './Utils/RawOrganicMaterial';
import Services from './Utils/Services';

const App = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <PageLayout>
            <Home />
            <Products/>
            <About />
          </PageLayout>
        }
      />
      <Route path="/foodProducts" 
      element={<PageLayout>
        <Food_Beverage />
        </PageLayout>} />
      <Route path="/agriProducts" 
      element={<PageLayout>
        <AgriProducts />
        </PageLayout>} />
      <Route path="/engineeringProducts" 
      element={<PageLayout>
        <EngineeringProducts />
        </PageLayout>} />
      <Route path="/servicesProducts" 
      element={<PageLayout>
        <Services />
        </PageLayout>} />
      <Route path="/rawProducts" 
      element={<PageLayout>
        <RawOrganicMaterial />
        </PageLayout>} />
    </Routes>
  );
};

export default App;
