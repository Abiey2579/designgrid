import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./home/Home";
import Frontend from "./learnpath/Frontend";
import SignUp from "./authentication/SignUp";
import SignIn from "./authentication/SignIn";
import OnboardingOne from "./authentication/onboarding/OnboardingOne";
import OnboardingTwo from "./authentication/onboarding/OnboardingTwo";
import OnboardingThree from "./authentication/onboarding/OnboardingThree";
import OnboardingFour from "./authentication/onboarding/OnboardingFour";
import Dashboard from "./dashboard/Dashboard";
import UpdateProfile from "./dashboard/UpdateProfile";
import ErrorElement from "./components/ErrorElement";
import Blogs from "./community/Blogs";
import BlogPost from "./community/BlogPost";
import * as uriPaths from "./assets/data/uriPaths";
import AboutUs from "./home/about-us/AboutUs";

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
    element: <Frontend />,
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
    path: uriPaths.SIGN_IN,
    element: <SignIn />,
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
    path: `${uriPaths.COMMUNITY_BLOG_POST}:category/:name`,
    element: <BlogPost />,
  },
  {
    path: uriPaths.ABOUT,
    element: <AboutUs />,
  },
]);

function DesignGrid() {
  return <RouterProvider router={router} />;
}

export default DesignGrid;
