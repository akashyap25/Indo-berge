import React from 'react';
import ReactDOM from 'react-dom/client';
import '../index.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Footer from './Components/Footer';
import About from './Components/About';
import Error from './Utils/Error';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Product from './Components/products';
import Food_Beverage from './Utils/Food_Beverage';
import AgriProducts from './Utils/AgriProducts';
import EngineeringProducts from './Utils/EngineeringProducts';
import Services from './Utils/Services';
import RawOrganicMaterial from './Utils/RawOrganicMaterial';


const AppLayout = () => {
  return (
    <React.StrictMode>
      <Navbar  />
      <Home/>
      <Product />
      <Outlet />
      <About />
      <Footer />
    </React.StrictMode>
  );
};


const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout/>,
    errorElement: <Error/>,
    children: [
      {
        path: '/foodProducts',
        element: <Food_Beverage/>,
      },
      {
        path: '/agriProducts',
        element: <AgriProducts/>,
      },
      {
        path: '/engineeringProducts',
        element: <EngineeringProducts/>,
      },
      {
        path: '/servicesProducts',
        element: <Services/>,
      },
      {
        path: '/rawProducts',
        element: <RawOrganicMaterial/>,
      }
    ]
  },
  
  ]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter} />);
