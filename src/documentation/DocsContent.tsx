import * as React from "react";
import DocsDirectionalButton from "../components/DocsDirectionalButton";

const DocsContent = () => {
  return (
    <div className="pr-20 pl-16 mt-16 overflow-y-scroll">
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
      <div className="mb-6">
        <h2 className="mb-3 text-xl font-bold text-dgDarkPurple">
          Our Mission
        </h2>
        <p className="text-base text-dgDarkPurple leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
      <div className="mb-6">
        <h2 className="mb-3 text-xl font-bold text-dgDarkPurple">
          Our Community
        </h2>
        <p className="text-base text-dgDarkPurple leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
      <div className="flex justify-end items-center">
        <DocsDirectionalButton name="Next" />
      </div>
    </div>
  );
};

export default DocsContent;
