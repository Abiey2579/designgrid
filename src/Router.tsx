import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./home/Home";
import FrontendGuide from "./frontend/FrontendGuide";
import SignUp from "./authentication/SignUp";
import LogIn from "./authentication/LogIn";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/frontend",
    element: <FrontendGuide />,
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
  {
    path: "/login",
    element: <LogIn />,
  },
]);

function DesignGrid() {
  return <RouterProvider router={router} />;
}

export default DesignGrid;
