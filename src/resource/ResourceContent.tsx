import * as React from "react";
import NextButton from "../components/NextButton";
import ResourceVideo from "./ResourceVideo";

const ResourceContent = () => {
  return (
    <div className="pr-20 pl-16 mt-5">
      <ResourceVideo />
      <div className="mb-6">
        <h2 className="mb-3 text-2xl font-bold text-dgDarkPurple">
          👋 Hi there, Yahaya
        </h2>
        <p className="text-base text-dgDarkPurple leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>

      <div className="flex justify-end items-center">
        <NextButton name="Next" />
      </div>
    </div>
  );
};

export default ResourceContent;
