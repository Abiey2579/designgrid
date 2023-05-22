import * as React from "react";
import DesignImage from "../assets/svgs/DesignImage.svg";
import Button from "../components/Button";

const Design = () => {
  return (
    <div className="px-24 min-h-screen flex justify-around items-center">
      <img src={DesignImage} alt="DesignImage" />
      <div className="max-w-md">
        <h2 className="text-dgDarkPurple text-5xl mb-6">
          Modern Web UI Design Project
        </h2>
        <p className="text-dgDarkPurple text-base mb-6">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <Button name="Explore Design Projects" className="block w-fit" />
      </div>
    </div>
  );
};

export default Design;
