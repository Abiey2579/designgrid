import * as React from "react";
import DocsImage from "../assets/svgs/DocsImage.svg";
import Button from "../components/Button";

const Docs = () => {
  return (
    <div className="lg:px-24 md:px-10 px-6 min-h-screen md:my-20 my-16 flex gap-20 lg:flex-row md:flex-col flex-col justify-around items-center">
      <div className="max-w-md">
        <h2 className="text-dgDarkPurple font-bold lg:text-5xl md:text-4xl text-3xl mb-6">
          Reliable Documentation
        </h2>
        <p className="text-dgDarkPurple text-base mb-6">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <Button name="Explore Documentation" className="block w-fit" />
      </div>
      <img src={DocsImage} alt="DocsImage" className="w-fit" />
    </div>
  );
};

export default Docs;
