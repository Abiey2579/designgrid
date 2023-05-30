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
import UpdateProfile from "./dashboard/UpdateProfile";
import ErrorElement from "./components/ErrorElement";
import Blogs from "./community/Blogs";
import BlogPost from "./community/BlogPost";
import * as uriPaths from "./assets/data/uriPaths";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorElement />,
  },
  {
    path: uriPaths.HOME,
    element: <Home />,
  },
  {
    path: uriPaths.LEARNING_PATH,
    element: <FrontendGuide />,
  },
  {
    path: uriPaths.SIGN_UP,
    element: <SignUp />,
  },
  {
    path: uriPaths.ONBOARDING_1,
    element: <OnboardingOne />,
  },
  {
    path: uriPaths.ONBOARDING_2,
    element: <OnboardingTwo />,
  },
  {
    path: uriPaths.ONBOARDING_3,
    element: <OnboardingThree />,
  },
  {
    path: uriPaths.ONBOARDING_4,
    element: <OnboardingFour />,
  },
  {
    path: uriPaths.LOG_IN,
    element: <LogIn />,
  },
  {
    path: uriPaths.DASHBOARD,
    element: <Dashboard />,
  },
  {
    path: uriPaths.UPDATE_PROFILE,
    element: <UpdateProfile />,
  },
  {
    path: uriPaths.COMMUNITY_BLOGS,
    element: <Blogs />,
  },
  {
    path: `${uriPaths.COMMUNITY_BLOG_POST}:id`,
    element: <BlogPost />,
  },
]);

function DesignGrid() {
  return <RouterProvider router={router} />;
}

export default DesignGrid;
