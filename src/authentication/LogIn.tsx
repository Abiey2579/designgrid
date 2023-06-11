import React, { useState } from "react";
import { Link } from "react-router-dom";
import { account } from "../assets/config/appwrite-auth";
import * as uriPaths from "../assets/data/uriPaths";
import ToastWarning from "../components/ToastWarning";
import LoginImage from "../assets/images/login-image.jpg";

import Google from "../assets/svgs/google-auth.svg";
import GitHub from "../assets/svgs/github.svg";

const LogIn = () => {
  const [errorToast, setErrorToast] = useState<boolean>(false);

  const handleOAuth = async (service: string) => {
    try {
      await account.createOAuth2Session(
        service,
        `https://designgrid.com.ng${uriPaths.DASHBOARD}`,
        `https://designgrid.com.ng${uriPaths.LOG_IN}`
      );
    } catch (error) {
      setErrorToast(true);
    }
  };

  return (
    <>
      {errorToast && (
        <ToastWarning
          title="An unexpected error occurred"
          close={() => setErrorToast(false)}
        />
      )}
      <div className="w-screen h-screen flex lg:justify-between md:justify-between justify-center items-center">
        <div className="lg:px-24 md:px-10 px-6 ">
          <h2 className="text-dgDarkPurple font-bold text-3xl mb-6">Log In</h2>
          <p className="text-dgDarkPurple text-base mb-4 w-[300px]">
            Unlock your potential and embark on a journey of knowledge and
            growth.
          </p>

          <button
            onClick={() => handleOAuth("google")}
            className={`bg-dgLightPurple text-dgDarkPurple rounded w-[300px] flex outline-0 mb-4`}
          >
            <div className="w-20 text-center py-3">
              <img src={Google} alt="Google" className="m-auto" />
            </div>
            <p className="w-fit py-3">Continue with Google</p>
          </button>
          <button
            onClick={() => handleOAuth("github")}
            className={`bg-dgDarkPurple text-dgLightPurple rounded w-[300px] flex outline-0 mb-4`}
          >
            <div className="w-20 text-center py-3">
              <img src={GitHub} alt="GitHub" className="m-auto" />
            </div>
            <p className="w-fit py-3">Continue with GitHub</p>
          </button>

          <p className="text-dgDarkPurple text-base mb-6">
            Don't have an account?{" "}
            <Link
              to="/auth/signup"
              className="inline-block text-dgPurple font-bold text-base"
            >
              Create one
            </Link>
          </p>
        </div>
        <div
          className="bg-cover bg-no-repeat bg-center h-screen w-full lg:flex md:flex hidden"
          style={{
            backgroundImage: `url(${LoginImage})`,
          }}
        />
      </div>
    </>
  );
};

export default LogIn;
