import { useState } from "react";
import { Link } from "react-router-dom";
import { account } from "../assets/config/appwrite-auth";
import * as uriPaths from "../assets/data/uriPaths";
import ToastWarning from "../components/ToastWarning";
import { LOCALHOST } from "../assets/data/constants";

import Google from "./assets/svgs/google.svg";
import Facebook from "./assets/svgs/facebook.svg";
import Twitter from "./assets/svgs/twitter.svg";
import LinkedIn from "./assets/svgs/linkedin.svg";

import AuthenticationNavbar from "./components/Navbar";

const SignUp = () => {
  const [errorToast, setErrorToast] = useState<boolean>(false);

  const handleOAuth = async (service: string) => {
    try {
      await account.createOAuth2Session(
        service,
        `${LOCALHOST}${uriPaths.ONBOARDING_1}`,
        `${LOCALHOST}${uriPaths.SIGN_UP}`
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
      <AuthenticationNavbar />
      <div className="w-screen lg:h-screen md:h-full flex justify-center lg:items-center md:items-center lg:mt-0 md:mt-0 mt-[25%]">
        <div className="w-[400px]">
          {/* AUTHENTICATION FORM HEADER */}
          <div className="w-full text-center">
            <h2 className="font-bold text-[40px] mb-2">Sign Up Now</h2>
            <p className="mb-8">Sign Up with DesignGrid Course Studio</p>
          </div>

          {/* AUTHENTICATION FORM */}
          <div className="flex flex-col gap-4 mb-8">
            <input
              type="email"
              className="border border-gray-300 rounded-lg w-full pr-6 py-4 outline-0 placeholder:text-gray-700"
              placeholder="Email ID"
            />
            <input
              type="password"
              className="border border-gray-300 rounded-lg w-full pr-6 py-4 outline-0 placeholder:text-gray-700"
              placeholder="Passcode"
            />
            <input
              type="password"
              className="border border-gray-300 rounded-lg w-full pr-6 py-4 outline-0 placeholder:text-gray-700"
              placeholder="Re-type Passcode"
            />

            <button
              type="submit"
              className="rounded-lg w-full pr-6 py-4 bg-dgPurple text-dgWhite font-bold"
            >
              Sign Up
            </button>
            <div className="flex justify-between">
              <p>Or Sign Up with</p>
            </div>
            <div className="flex justify-between">
              <button
                onClick={() => handleOAuth("facebook")}
                className="border border-gray-300 rounded-lg flex w-[80px] h-[56px]"
              >
                <img src={Facebook} alt="Facebook" className="w-7 m-auto" />
              </button>
              <button
                onClick={() => handleOAuth("google")}
                className="border border-gray-300 rounded-lg flex w-[80px] h-[56px]"
              >
                <img src={Google} alt="Google" className="w-7 m-auto" />
              </button>
              <button
                onClick={() => handleOAuth("linkedin")}
                className="border border-gray-300 rounded-lg flex w-[80px] h-[56px]"
              >
                <img src={LinkedIn} alt="LinkedIn" className="w-7 m-auto" />
              </button>
              <button
                onClick={() => handleOAuth("twitter")}
                className="border border-gray-300 rounded-lg flex w-[80px] h-[56px]"
              >
                <img src={Twitter} alt="Twitter" className="w-7 m-auto" />
              </button>
            </div>
          </div>

          <p>
            Already have an account?{" "}
            <Link
              to={uriPaths.SIGN_IN}
              className="inline-block text-dgPurple font-bold text-base"
            >
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default SignUp;
