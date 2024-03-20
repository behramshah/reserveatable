import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import CustomNavigation from './roots/navigation/CustomNavigation.jsx';
import ErrorPage from './roots/error/ErrorPage.jsx'
import Auth from './roots/authentication/authentication.jsx';
import Homepage from './roots/homepage/homepage.jsx';

import './index.css';

const routes = [
  {
    path: "/",
    element: <CustomNavigation />,
    errorElement: <ErrorPage/>,
    children: [
      { path: "auth", element: <Auth /> },
      { path: "homepage", element: <Homepage /> },
      // { path: "book", element: <Book /> },
    ]
  },
];


const router = createBrowserRouter(routes);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
