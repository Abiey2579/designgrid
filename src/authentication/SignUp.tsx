import { useState } from "react";
import { Link } from "react-router-dom";
import { account } from "../assets/config/appwrite-auth";
import * as uriPaths from "../assets/data/uriPaths";
import ToastWarning from "../components/ToastWarning";
import { LOCALHOST, DOMAIN } from "../assets/data/constants";
import { ID } from "appwrite";
import Spinner from "../components/Spinner";

import Google from "./assets/svgs/google.svg";
import Github from "./assets/svgs/github.svg";
import LinkedIn from "./assets/svgs/linkedin.svg";

const SignUp = () => {
  const [errorToast, setErrorToast] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [spin, setSpin] = useState<boolean>(false);

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

  const handleEmailAuth = async (e: any) => {
    e.preventDefault();
    setSpin(true);
    if (name.trim() !== "" && email.trim() !== "" && password.trim() !== "") {
      try {
        setSpin(true);
        // sign up
        const promise = await account.create(
          ID.unique(),
          email,
          password,
          name
        );

        // Create Account Verfication Link
        account.createVerification("");
        // setSpin(false);
      } catch (error) {
        console.log(error);
        // setSpin(false);
      }
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
            <h2 className="font-bold text-[40px] mb-2">Sign Up Now</h2>
            <p className="mb-8">
              Ignite Your Learning: Enroll and Begin Your Journey!
            </p>
          </div>
          {/* AUTHENTICATION FORM */}
          <form className="flex flex-col gap-4" onSubmit={handleEmailAuth}>
            <input
              type="text"
              className="border border-gray-300 rounded-lg w-full pr-6 py-4 outline-0 placeholder:text-gray-700"
              placeholder="Your Name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="email"
              className="border border-gray-300 rounded-lg w-full pr-6 py-4 outline-0 placeholder:text-gray-700"
              placeholder="Email ID"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              className="border border-gray-300 rounded-lg w-full pr-6 py-4 outline-0 placeholder:text-gray-700"
              placeholder="Password"
              required
              minLength={8}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <button
              type="submit"
              className="rounded-lg w-full py-4 bg-dgPurple text-dgWhite font-bold"
            >
              {spin ? (
                <div className="grid place-items-center w-full h-full">
                  <Spinner className="w-6 fill-dgLightPurple text-dgPurple" />
                </div>
              ) : (
                "SIGN UP"
              )}
            </button>
            <div className="flex justify-between items-center">
              <p>Or Sign Up With</p>
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
              Already have an account?{" "}
              <Link
                to={uriPaths.SIGN_IN}
                className="inline-block text-dgPurple font-bold text-base"
              >
                Sign In
              </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignUp;
