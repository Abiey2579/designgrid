import { useState } from "react";
import { Link } from "react-router-dom";
import { account } from "../assets/config/appwrite-auth";
import * as uriPaths from "../assets/data/uriPaths";
import ToastWarning from "../components/ToastWarning";
import { LOCALHOST, DOMAIN } from "../assets/data/constants";

import Google from "./assets/svgs/google.svg";
import Github from "./assets/svgs/github.svg";
import LinkedIn from "./assets/svgs/linkedin.svg";

const SignIn = () => {
  const [errorToast, setErrorToast] = useState<string>("");

  const handleOAuth = async (service: string) => {
    try {
      await account.createOAuth2Session(
        service,
        `${LOCALHOST}${uriPaths.DASHBOARD}`,
        `${LOCALHOST}${uriPaths.SIGN_IN}`
      );
    } catch (error) {
      setErrorToast("An unexpected error occured");
    }
  };

  return (
    <>
      {errorToast && (
        <ToastWarning title={errorToast} close={() => setErrorToast("")} />
      )}
      <div className="w-screen lg:h-screen md:h-full flex justify-center lg:items-center md:items-center lg:mt-0 md:mt-0 mt-[25%]">
        <div className="w-[400px]">
          {/* AUTHENTICATION FORM HEADER */}
          <div className="w-full text-center">
            <h2 className="font-bold text-[40px] mb-2">Welcome Back</h2>
            <p className="mb-8">Sign In and Continue with your Learning</p>
          </div>

          {/* AUTHENTICATION FORM */}
          <form className="flex flex-col gap-4">
            <input
              type="email"
              className="border border-gray-300 rounded-lg w-full pr-6 py-4 outline-0 placeholder:text-gray-700"
              placeholder="Email ID"
              required
            />
            <input
              type="password"
              className="border border-gray-300 rounded-lg w-full pr-6 py-4 outline-0 placeholder:text-gray-700"
              placeholder="Password"
              required
              minLength={8}
            />

            <div className="flex items-center">
              <input
                type="checkbox"
                name="rememberMe"
                className="border border-gray-300 rounded mr-3"
              />
              <label htmlFor="rememberMe">Remember Me</label>
            </div>

            <button
              type="submit"
              className="rounded-lg w-full py-4 bg-dgPurple text-dgWhite font-bold"
            >
              SIGN IN
            </button>
            <div className="flex justify-between items-center">
              <p>Or Sign In With</p>
              <Link
                to={uriPaths.FORGOT_PASSCODE}
                className="inline-block text-dgPurple font-bold text-base"
              >
                Forgot Password?
              </Link>
            </div>
            <div className="grid grid-cols-3 gap-3">
              <button
                onClick={() => handleOAuth("google")}
                className="border border-gray-300 rounded-lg flex items-center justify-center px-6 w-full h-[56px]"
              >
                <img src={Google} alt="Google" className="w-7" />
              </button>
              <button
                onClick={() => handleOAuth("linkedin")}
                className="border border-gray-300 rounded-lg flex items-center justify-center px-6 w-full h-[56px]"
              >
                <img src={LinkedIn} alt="LinkedIn" className="w-7" />
              </button>
              <button
                onClick={() => handleOAuth("github")}
                className="border border-gray-300 rounded-lg flex items-center justify-center px-6 w-full h-[56px]"
              >
                <img src={Github} alt="Github" className="w-7" />
              </button>
            </div>
            <p>
              Are you new here?{" "}
              <Link
                to={uriPaths.SIGN_UP}
                className="inline-block text-dgPurple font-bold text-base"
              >
                Create one
              </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignIn;
