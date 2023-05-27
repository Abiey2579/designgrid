import * as React from "react";
import Button from "../components/Button";
import Persons from "../assets/svgs/persons.svg";
import Folder from "../assets/svgs/folder.svg";
import Lightbulb from "../assets/svgs/lightbulb.svg";

const Hero = () => {
  return (
    <div className="lg:px-24 md:px-10 px-6 text-center mt-20">
      <h1 className="lg:text-[80px] md:text-6xl text-5xl text-dgDarkPurple font-bold lg:max-w-[740px] md:max-w-full m-auto mb-6 leading-tight">
        Your Frontend Dev Starts <span className="text-dgPurple">Here!</span>
      </h1>
      <p className="text-dgDarkPurple_Opacity font-normal text-base max-w-[700px] mb-6 m-auto leading-relaxed">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt tlabore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation
      </p>
      <div className="max-w-[700px] flex lg:flex-row md:flex-row flex-col gap-5 m-auto justify-center">
        <Button name="Get Started" />
        <a
          href="/"
          className="bg-dgLightPurple border border-dgDarkPurple px-10 py-4 font-normal text-dgDarkPurple rounded-full text-base"
        >
          Explore Learning Path
        </a>
      </div>
    </div>
  );
};

export default Hero;
