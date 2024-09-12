import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

const Home = () => <h2>Home Page</h2>;
const About = () => <h2>About Page</h2>;

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "about",
    element: <About />,
  },
]);

const Route = () => {
  return (
    <RouterProvider router={router} />
  );
}

export default Route;
