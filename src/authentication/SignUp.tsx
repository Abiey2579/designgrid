import { useState } from "react";
import { Link } from "react-router-dom";
import { account } from "../assets/config/appwrite-auth";
import * as uriPaths from "../assets/data/uriPaths";
import ToastWarning from "../components/ToastWarning";
import { LOCALHOST } from "../assets/data/constants";
import Spinner from "../components/Spinner";
import { validateEmail } from "./assets/common/functions";

import Google from "./assets/svgs/google.svg";
import Facebook from "./assets/svgs/facebook.svg";
import Twitter from "./assets/svgs/twitter.svg";
import LinkedIn from "./assets/svgs/linkedin.svg";

import AuthenticationNavbar from "./components/Navbar";

const SignUp = () => {
  const [errorToast, setErrorToast] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [passcode, setPasscode] = useState<string>("");
  const [retype_Passcode, setRetype_Passcode] = useState<string>("");
  const [spin, setSpin] = useState<boolean>(false);

  const handleOAuth = async (service: string) => {
    try {
      await account.createOAuth2Session(
        service,
        `${LOCALHOST}${uriPaths.ONBOARDING_1}`,
        `${LOCALHOST}${uriPaths.SIGN_UP}`
      );
    } catch (error) {
      setErrorToast("An unexpected error occured");
    }
  };

  const handleEmailAuth = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSpin(true);

    try {
      // INPUT VALIDATION
      if (email === "" || passcode === "" || retype_Passcode === "") {
        throw new Error("All fields are required.");
      }
      if (!validateEmail(email)) {
        throw new Error("Invalid email format.");
      }
      if (passcode !== retype_Passcode) {
        throw new Error("Passcode didn't match");
      }
      if (passcode.length < 8 || retype_Passcode.length < 8) {
        throw new Error("Passcode minimum length is 8 characters");
      }

      // APPWRITE AUTH API CALL
      try {
        const response = await account.createEmailSession(email, passcode);
        setSpin(false);
        console.log(response); // Success
      } catch (error) {
        setSpin(false);
        console.log(error as Error); // Failure
      }
    } catch (error) {
      setSpin(false);
      setErrorToast((error as Error).message);
    }
  };

  return (
    <>
      {errorToast && (
        <ToastWarning title={errorToast} close={() => setErrorToast("")} />
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
          <form className="flex flex-col gap-4 mb-8" onSubmit={handleEmailAuth}>
            <input
              type="email"
              className="border border-gray-300 rounded-lg w-full pr-6 py-4 outline-0 placeholder:text-gray-700"
              placeholder="Email ID"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              className="border border-gray-300 rounded-lg w-full pr-6 py-4 outline-0 placeholder:text-gray-700"
              placeholder="Passcode"
              onChange={(e) => setPasscode(e.target.value)}
              minLength={8}
              autoComplete="new-passcode"
              required
            />
            <input
              type="password"
              className="border border-gray-300 rounded-lg w-full pr-6 py-4 outline-0 placeholder:text-gray-700"
              placeholder="Re-type Passcode"
              onChange={(e) => setRetype_Passcode(e.target.value)}
              minLength={8}
              autoComplete="new-passcode"
              required
            />

            <button
              type="submit"
              className="rounded-lg w-full pr-6 py-4 bg-dgPurple text-dgWhite font-medium"
            >
              {spin ? (
                <Spinner className="w-6 fill-dgLightPurple text-dgPurple" />
              ) : (
                "Sign Up"
              )}
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
          </form>
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
