import * as React from "react";
import { Link } from "react-router-dom";

const ErrorElement = () => {
  return (
    <div className="w-screen h-screen flex flex-col gap-5 justify-center items-center m">
      <h1 className="text-6xl font-bold text-dgDarkPurple">404</h1>
      <h1 className="text-4xl font-medium text-dgDarkPurple">Page not Found</h1>
      <Link to={"/"}>
        <button className="px-6 border-slate-300 py-1 mr-5 text-center text-base bg-dgLightPurple text-dgDarkPurple font-medium rounded border outline-0">
          Back to Home
        </button>
      </Link>
    </div>
  );
};

export default ErrorElement;
