import * as React from "react";

const CTA = () => {
  return (
    <div className="lg:px-24 md:px-10 px-6 bg-dgMagenta py-12 text-center">
      <h2 className="text-dgLightPurple lg:text-5xl md:text-4xl text-3xl font-bold mb-6 max-w-2xl m-auto">
        Join <span className="text-dgDarkPurple">DesignGrid</span> Community
      </h2>
      <p className="text-dgLightPurple text-base mb-6 max-w-2xl m-auto leading-relaxed">
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
