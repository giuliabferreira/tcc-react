import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// 1 - configurando router

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from './routes/Home';
import Contact from './routes/Contact';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },

  {
    path: 'contact',
    element: <Contact />
  }
])

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);
