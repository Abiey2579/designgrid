import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./home/Home";
import FrontendGuide from "./frontend/FrontendGuide";
import SignUp from "./authentication/SignUp";
import LogIn from "./authentication/LogIn";
import OnboardingOne from "./authentication/OnboardingOne";
import OnboardingTwo from "./authentication/OnboardingTwo";
import OnboardingThree from "./authentication/OnboardingThree";
import OnboardingFour from "./authentication/OnboardingFour";
import Dashboard from "./dashboard/Dashboard";

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
    path: "/auth/signup",
    element: <SignUp />,
  },
  {
    path: "/auth/onboarding/1",
    element: <OnboardingOne />,
  },
  {
    path: "/auth/onboarding/2",
    element: <OnboardingTwo />,
  },
  {
    path: "/auth/onboarding/3",
    element: <OnboardingThree />,
  },
  {
    path: "/auth/onboarding/4",
    element: <OnboardingFour />,
  },
  {
    path: "/auth/login",
    element: <LogIn />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
]);

function DesignGrid() {
  return <RouterProvider router={router} />;
}

export default DesignGrid;
