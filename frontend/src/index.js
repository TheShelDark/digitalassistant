import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './Components/HomePage';
import UpdateGeneratorPage from './Components/UpdateGeneratorPage';
import ErrorPage from './Components/ErrorPage';
import ChecklistPage from './Components/ChecklistPage';
import RessourcesPage from './Components/RessourcesPage';
import GanttPage from './Components/GanttPage';
import ImprintPage from './Components/ImprintPage';

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
            path: '/updategen',
            element: <UpdateGeneratorPage />,
          },
          {
            path: '/checklist',
            element: <ChecklistPage />,
          },
          {
            path: '/ressources',
            element: <RessourcesPage />,
          },
          {
            path: '/ganttgen',
            element: <GanttPage />,
          },
          {
            path: '/imprint',
            element: <ImprintPage />,
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

