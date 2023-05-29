import * as React from "react";
import CoffeeCup from "../assets/svgs/CoffeeCup.svg";
import { Link } from "react-router-dom";
import { account } from "./appwrite-auth";

import Google from "../assets/svgs/google-auth.svg";
import GitHub from "../assets/svgs/github.svg";
import LinkedIn from "../assets/svgs/linkedin-in.svg";

const SignUp = () => {
  const handleOAuth = async (service: string) => {
    try {
      await account.createOAuth2Session(
        service,
        "http://localhost:3000/frontend",
        "http://localhost:3000/signup"
      );
    } catch (error) {
      alert(error);
    }
  };
  return (
    <div className="lg:px-24 md:px-10 px-6 min-h-screen flex justify-around items-center">
      <div className="max-w-md">
        <h2 className="text-dgDarkPurple font-bold text-3xl mb-6">Sign Up</h2>
        <p className="text-dgDarkPurple text-base mb-6">
          By signing up you agree to be receiving our newsletters, and updates
          about design
        </p>
        <button
          onClick={() => handleOAuth("google")}
          className={`bg-dgWhite font-normal text-dgDarkPurple rounded-full text-base w-[300px] flex outline-0 mb-5`}
        >
          <div className="w-20 text-center py-4">
            <img src={Google} alt={"Google"} className="m-auto" />
          </div>
          <p className="w-fit py-4">Sign Up with Google</p>
        </button>
        <button
          onClick={() => handleOAuth("github")}
          className={`bg-dgDarkPurple font-normal text-dgLightPurple rounded-full text-base w-[300px] flex outline-0 mb-5`}
        >
          <div className="w-20 text-center py-4">
            <img src={GitHub} alt={"GitHub"} className="m-auto" />
          </div>
          <p className="w-fit py-4">Sign Up with GitHub</p>
        </button>
        <button
          onClick={() => handleOAuth("linkedin")}
          className={`bg-dgFacebook font-normal text-dgLightPurple rounded-full text-base w-[300px] flex outline-0 mb-5`}
        >
          <div className="w-20 text-center py-4">
            <img src={LinkedIn} alt={"LinkedIn"} className="m-auto" />
          </div>
          <p className="w-fit py-4">Sign Up with LinkedIn</p>
        </button>
        <p className="text-dgDarkPurple text-base mb-6">
          Already have an account?{" "}
          <Link
            to="/auth/login"
            className="inline-block text-dgPurple font-bold text-base"
          >
            Log In
          </Link>
        </p>
      </div>
      <img
        src={CoffeeCup}
        alt="DocsImage"
        className="w-fit lg:flex md:hidden hidden"
      />
    </div>
  );
};

export default SignUp;
