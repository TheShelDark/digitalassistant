import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './Components/HomePage';
import AboutPage from './Components/AboutPage';
import ErrorPage from './Components/ErrorPage';
import ChecklistPage from './Components/ChecklistPage';

const CustomRouter = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        errorElement: <ErrorPage />,
        children: [
          {
            element: <HomePage />,
            index: true
          },
          {
            path: '/about',
            element: <AboutPage />,
          },
          {
            path: '/checklist',
            element: <ChecklistPage />,
          },
        ]
      }
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={CustomRouter} />
  </React.StrictMode>
);

