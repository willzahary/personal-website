import React from 'react';
import { Landing } from '../pages/Landing';
import { Courses } from '../pages/Courses';
import { useRoutes } from 'react-router-dom';

export const Main = () => {
    let routes = useRoutes([
        { path: "/", element: <Landing /> },
        { path: "courses", element: <Courses /> },
      ]);
    return routes;
}