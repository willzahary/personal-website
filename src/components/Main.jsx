import React from 'react';
import { Landing } from '../pages/Landing';
import { Courses } from '../pages/Courses';
import { Music } from '../pages/Music'
import { About } from '../pages/About'
import { useRoutes } from 'react-router-dom';

export const Main = () => {
    let routes = useRoutes([
        { path: "/", element: <Landing /> },
        { path: "courses", element: <Courses /> },
        { path: "music", element: <Music /> },
        { path: "about", element: <About />},
        { path: "files/252practice.pdf"}
        // { path: "ina", element: <Ina /> }
      ]);
    return routes;
}