import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './pages/Home';
import LogementDetails from './pages/LogementDetails';
import About from './pages/About';
import ErrorPage from './pages/ErrorPage';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

// charge les routes pour les différentes pages, ainsi que la page d'erreur

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "logement-details/:id",
    element: <LogementDetails />,
  },
  {
    path: "/a-propos",
    element: <About />,
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
],
);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();
