import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Home from '../Home/Home';
import Users from '../users/Users';
import UserDetail from '../UserDetail/UserDetail';
import Posts from '../Posts/Posts';
import PostDetail from '../PostDetail/PostDetail';
import ErrorPage from '../ErrorPage/ErrorPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
    errorElement: <ErrorPage></ErrorPage>,
    children:[
      {
        path: "/about",
        element: <div>I am in the about page</div>,
      },
      {
        path: '/contact',
        element: <div>Call me right now</div>
      },
      {
        path: '/users',
        loader: async () => {
          const response = await fetch('https://jsonplaceholder.typicode.com/users');
          const data = await response.json();
          return data;
        },
        element: <Users></Users>
      },
      {
        path:'/users/:id',
        element:<UserDetail></UserDetail>,
        loader: ({params})=> fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`)
      },
      {
        path: '/posts',
        element: <Posts></Posts>,
        loader: ()=> fetch('https://jsonplaceholder.typicode.com/posts')
      },
      {
        path: '/posts/:postId',
        loader: ({params})=> fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`),
        element:<PostDetail></PostDetail>,
      }
    ]
  },
  
]);

export default router;