import * as React from "react";

const CTA = () => {
  return (
    <div className="px-24 bg-dgMagenta py-12 text-center">
      <h2 className="text-dgLightPurple text-5xl font-bold mb-6 max-w-2xl m-auto">
        Join <span className="text-dgDarkPurple">DesignGrid</span> Community
      </h2>
      <p className="text-dgLightPurple text-base mb-6 max-w-2xl m-auto">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt tlabore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation.
      </p>
      <a
        href="/"
        className="bg-dgLightPurple px-10 py-4 font-normal text-dgDarkPurple rounded-full text-base block w-fit m-auto"
      >
        Register
      </a>
    </div>
  );
};

export default CTA;
