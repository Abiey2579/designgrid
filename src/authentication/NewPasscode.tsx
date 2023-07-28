import { Link } from "react-router-dom";
import * as uriPaths from "../assets/data/uriPaths";

const NewPasscode = () => {
  return (
    <>
      <div className="w-screen lg:h-screen md:h-full flex justify-center lg:items-center md:items-center lg:mt-0 md:mt-0 mt-[25%]">
        <div className="w-[400px]">
          {/* AUTHENTICATION FORM HEADER */}
          <div className="w-full text-center">
            <h2 className="font-bold text-[40px] mb-2">New Passcode</h2>
            <p className="mb-8">Enter new passcode for your account</p>
          </div>

          {/* AUTHENTICATION FORM */}
          <div className="flex flex-col gap-4 mb-8">
            <input
              type="password"
              className="border border-gray-300 rounded-lg w-full pr-6 py-4 outline-0 placeholder:text-gray-700"
              placeholder="New Passcode"
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
              Save
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

export default NewPasscode;
