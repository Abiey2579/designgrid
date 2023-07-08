import { Link } from "react-router-dom";
import * as uriPaths from "../assets/data/uriPaths";

import AuthenticationNavbar from "./components/Navbar";

const ForgotPasscode = () => {
  return (
    <>
      <AuthenticationNavbar />
      <div className="w-screen lg:h-screen md:h-full flex justify-center lg:items-center md:items-center lg:mt-0 md:mt-0 mt-[25%]">
        <div className="w-[400px]">
          {/* AUTHENTICATION FORM HEADER */}
          <div className="w-full text-center">
            <h2 className="font-bold text-[40px] mb-2">Forgot Passcode</h2>
            <p className="mb-8">Enter your Email ID to reset your passcode</p>
          </div>

          {/* AUTHENTICATION FORM */}
          <div className="flex flex-col gap-4 mb-8">
            <input
              type="email"
              className="border border-gray-300 rounded-lg w-full pr-6 py-4 outline-0 placeholder:text-gray-700"
              placeholder="Email ID"
            />

            <button
              type="submit"
              className="rounded-lg w-full pr-6 py-4 bg-dgPurple text-dgWhite font-bold"
            >
              Reset
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

export default ForgotPasscode;
