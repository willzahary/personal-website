import React from 'react';
import { Landing } from '../pages/Landing';
import { NotFound } from '../pages/NotFound';
import { useRoutes } from 'react-router-dom';

export const Main = () => {
    let routes = useRoutes([
        { path: "/", element: <Landing /> },
        { path: "*", element: <NotFound /> }
      ]);
    return routes;
}