import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// 1 - configurando router

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Login from './routes/Login/Login';
import Dashboard from './routes/Dashboard/Dashboard';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Login />
  },

  {
    path: '/dashboard',
    element: <Dashboard />
  },

  {
    path: '/login',
    element: <Login />
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
