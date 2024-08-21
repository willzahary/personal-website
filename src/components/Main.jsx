import React from 'react';
import { Landing } from '../pages/Landing';
import { NotFound } from '../pages/NotFound';
import { useRoutes } from 'react-router-dom';
import { Comp251 } from '../pages/Comp251';

export const Main = () => {
    let routes = useRoutes([
        { path: "/", element: <Landing /> },
        { path: "/comp251", element: <Comp251 /> },
        { path: "*", element: <NotFound /> }
      ]);
    return routes;
}