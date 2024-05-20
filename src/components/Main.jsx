import React from 'react';
import { Landing } from '../pages/Landing';
import { Courses } from '../pages/Courses';
import { Music } from '../pages/Music';
import { useRoutes } from 'react-router-dom';

export const Main = () => {
    let routes = useRoutes([
        { path: "/", element: <Landing /> },
        { path: "courses", element: <Courses /> },
        { path: "music", element: <Music /> },
        // { path: "grades", element: <Grades /> }
      ]);
    return routes;
}