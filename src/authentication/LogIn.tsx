import * as React from "react";
import StarbucksCup from "../assets/svgs/StarbucksCup.svg";
import { Link } from "react-router-dom";
import { account } from "../assets/config/appwrite-auth";
import * as uriPaths from "../assets/data/uriPaths";

import Google from "../assets/svgs/google-auth.svg";
import GitHub from "../assets/svgs/github.svg";

const LogIn = () => {
  const handleOAuth = async (service: string) => {
    try {
      await account.createOAuth2Session(
        service,
        `http://localhost:3000${uriPaths.DASHBOARD}`,
        `http://localhost:3000${uriPaths.SIGN_UP}`
      );
    } catch (error) {
      alert(error);
    }
  };
  return (
    <div className="lg:px-24 md:px-10 px-6  min-h-screen flex justify-around items-center">
      <div className="max-w-md">
        <h2 className="text-dgDarkPurple font-bold text-3xl mb-6">Log In</h2>
        <p className="text-dgDarkPurple text-base mb-6">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>

        <button
          onClick={() => handleOAuth("google")}
          className={`bg-dgWhite font-normal text-dgDarkPurple rounded-full text-base w-[300px] flex outline-0 mb-5`}
        >
          <div className="w-20 text-center py-4">
            <img src={Google} alt={"Google"} className="m-auto" />
          </div>
          <p className="w-fit py-4">Continue with Google</p>
        </button>
        <button
          onClick={() => handleOAuth("github")}
          className={`bg-dgDarkPurple font-normal text-dgLightPurple rounded-full text-base w-[300px] flex outline-0 mb-5`}
        >
          <div className="w-20 text-center py-4">
            <img src={GitHub} alt={"GitHub"} className="m-auto" />
          </div>
          <p className="w-fit py-4">Continue with GitHub</p>
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
      <img
        src={StarbucksCup}
        alt="StarbucksCup"
        className="w-fit lg:flex md:hidden hidden"
      />
    </div>
  );
};

export default LogIn;
