import * as React from "react";
import StarbucksCup from "../assets/svgs/StarbucksCup.svg";
import AuthButton from "../components/AuthButton";

import Apple from "../assets/svgs/apple-auth.svg";
import Facebook from "../assets/svgs/facebook-auth.svg";
import Google from "../assets/svgs/google-auth.svg";

const LogIn = () => {
  return (
    <div className="lg:px-24 md:px-10 px-6  min-h-screen flex justify-around items-center">
      <div className="max-w-md">
        <h2 className="text-dgDarkPurple font-bold text-3xl mb-6">Log In</h2>
        <p className="text-dgDarkPurple text-base mb-6">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <AuthButton
          name="Google"
          icon={Google}
          label="Continue with Google"
          className="mb-5"
        />
        <AuthButton
          name="Apple"
          icon={Apple}
          label="Continue with Apple"
          className="mb-5"
        />
        <AuthButton
          name="Facebook"
          icon={Facebook}
          label="Continue with Facebook"
          className="mb-5"
        />
        <p className="text-dgDarkPurple text-base mb-6">
          Don't have an account?{" "}
          <a
            href="/"
            className="inline-block text-dgPurple font-bold text-base"
          >
            Create one
          </a>
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
