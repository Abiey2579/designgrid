import * as React from "react";
import CoffeeCup from "../assets/svgs/CoffeeCup.svg";
import AuthButton from "../components/AuthButton";

import Apple from "../assets/svgs/apple-auth.svg";
import Facebook from "../assets/svgs/facebook-auth.svg";
import Google from "../assets/svgs/google-auth.svg";

const SignUp = () => {
  return (
    <div className="lg:px-24 md:px-10 px-6 min-h-screen flex justify-around items-center">
      <div className="max-w-md">
        <h2 className="text-dgDarkPurple font-bold text-3xl mb-6">Sign Up</h2>
        <p className="text-dgDarkPurple text-base mb-6">
          By signing up you agree to be receiving our newsletters, and updates
          about design
        </p>
        <AuthButton
          name="Google"
          icon={Google}
          label="Sign Up with Google"
          className="mb-5"
        />
        <AuthButton
          name="Apple"
          icon={Apple}
          label="Sign Up with Apple"
          className="mb-5"
        />
        <AuthButton
          name="Facebook"
          icon={Facebook}
          label="Sign Up with Facebook"
          className="mb-5"
        />
        <p className="text-dgDarkPurple text-base mb-6">
          Already have an account?{" "}
          <a
            href="/"
            className="inline-block text-dgPurple font-bold text-base"
          >
            Log In
          </a>
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
