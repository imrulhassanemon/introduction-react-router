import React from 'react';
import { createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!</div>,
  },
  {
    path: "/about",
    element: <div>I am in the about page</div>,
  },
  {
    path: '/contact',
    element: <div>Call me right now</div>
  }
]);

export default router;