import { useState } from "react";
import { Link } from "react-router-dom";
import { account } from "../assets/config/appwrite-auth";
import * as uriPaths from "../assets/data/uriPaths";
import ToastWarning from "../components/ToastWarning";
import { LOCALHOST, DOMAIN } from "../assets/data/constants";

import Google from "./assets/svgs/google.svg";
import Github from "./assets/svgs/github.svg";
import LinkedIn from "./assets/svgs/linkedin.svg";

const SignUp = () => {
  const [errorToast, setErrorToast] = useState<string>("");
  const handleOAuth = async (service: string) => {
    try {
      await account.createOAuth2Session(
        service,
        `${DOMAIN}${uriPaths.ONBOARDING_1}`,
        `${DOMAIN}${uriPaths.SIGN_UP}`
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
      <div className="w-screen h-screen grid place-content-center">
        <div className="max-w-[400px] w-full">
          {/* AUTHENTICATION FORM HEADER */}
          <div className="w-full text-center">
            <h2 className="font-bold text-[40px] mb-2">Sign Up Now</h2>
            <p className="mb-8">Sign Up Now to Enroll and Start Learning</p>
          </div>
          {/* AUTHENTICATION FORM */}
          <div className="flex flex-col gap-3 mb-8">
            <button
              onClick={() => handleOAuth("google")}
              className="border border-gray-300 rounded-lg flex items-center justify-start px-6 w-full h-[56px]"
            >
              <img src={Google} alt="Google" className="w-7 mr-6" />
              <p className="font-semibold">Sign Up With Google</p>
            </button>
            <button
              onClick={() => handleOAuth("linkedin")}
              className="border border-gray-300 rounded-lg flex items-center justify-start px-6 w-full h-[56px]"
            >
              <img src={LinkedIn} alt="LinkedIn" className="w-7 mr-6" />
              <p className="font-semibold">Sign Up With LinkedIn</p>
            </button>
            <button
              onClick={() => handleOAuth("github")}
              className="border border-gray-300 rounded-lg flex items-center justify-start px-6 w-full h-[56px]"
            >
              <img src={Github} alt="Github" className="w-7 mr-6" />
              <p className="font-semibold">Sign Up With Github</p>
            </button>
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
