import { useState } from "react";
import { Link } from "react-router-dom";
import { account } from "../assets/config/appwrite-auth";
import * as uriPaths from "../assets/data/uriPaths";
import ToastWarning from "../components/ToastWarning";
import { LOCALHOST } from "../assets/data/constants";

import Google from "./assets/svgs/google.svg";
import GitHub from "./assets/svgs/github.svg";
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
          title="An unexpected error occured"
          close={() => setErrorToast(false)}
        />
      )}
      <AuthenticationNavbar />
      <div className="w-screen lg:h-screen md:h-full flex justify-center lg:items-center md:items-center lg:mt-0 md:mt-0 mt-[25%]">
        <div className="lg:p-8 md:p-10 px-3 lg:border md:border border-0 border-slate-300 rounded max-w-sm">
          <h2 className="text-dgDarkPurple font-bold text-3xl mb-6">Sign Up</h2>
          <p className="text-dgDarkPurple text-base mb-4 ">
            By signing up you agree to be receiving our newsletters and updates.
          </p>

          <button
            onClick={() => handleOAuth("google")}
            className={`border border-slate-300 text-dgDarkPurple rounded flex w-full outline-0 mb-4`}
          >
            <div className="w-20 text-center py-3">
              <img src={Google} alt="Google" className="w-6 m-auto" />
            </div>
            <p className="w-fit py-3 font-bold">Sign Up with Google</p>
          </button>
          <button
            onClick={() => handleOAuth("github")}
            className={`bg-dgDarkPurple text-dgLightPurple rounded flex w-full outline-0 mb-4`}
          >
            <div className="w-20 text-center py-3">
              <img src={GitHub} alt="GitHub" className="w-6 m-auto" />
            </div>
            <p className="w-fit py-3 font-bold">Sign Up with GitHub</p>
          </button>

          <p className="text-dgDarkPurple text-base mb-16">
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
