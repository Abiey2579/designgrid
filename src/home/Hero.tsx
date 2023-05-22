import * as React from "react";
import Button from "../components/Button";
import Persons from "../assets/svgs/persons.svg";
import Folder from "../assets/svgs/folder.svg";
import Lightbulb from "../assets/svgs/lightbulb.svg";

const Hero = () => {
  return (
    <div className="px-24 text-center mt-20">
      <h1 className="text-[80px] text-dgDarkPurple font-bold max-w-[700px] m-auto mb-6 leading-tight">
        Building the future of UI Design
      </h1>
      <p className="text-dgDarkPurple font-normal text-base max-w-[700px] mb-6 m-auto">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt tlabore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation{" "}
      </p>
      <div className="max-w-[700px] flex gap-5 m-auto justify-center">
        <Button name="Get Started" />
        <a
          href="/"
          className="bg-dgLightPurple border border-dgDarkPurple px-10 py-4 font-normal text-dgDarkPurple rounded-full text-base"
        >
          Explore Resources
        </a>
      </div>
      <div className="flex justify-evenly bg-dgPurple rounded-3xl mt-16 max-w-4xl m-auto">
        <div className="flex py-11">
          <img src={Persons} alt="Persons" className="mr-4" />
          <div className="text-left">
            <h2 className="text-dgWhite text-4xl font-bold">40,000+</h2>
            <p className="text-dgWhite text-base w-fit">Community members</p>
          </div>
        </div>
        <div className="flex py-11">
          <img src={Folder} alt="Folder" className="mr-4" />
          <div className="text-left">
            <h2 className="text-dgWhite text-4xl font-bold">8,273</h2>
            <p className="text-dgWhite text-base w-fit">Free project</p>
          </div>
        </div>
        <div className="flex py-11">
          <img src={Lightbulb} alt="Lightbulb" className="mr-4" />
          <div className="text-left">
            <h2 className="text-dgWhite text-4xl font-bold">600+</h2>
            <p className="text-dgWhite text-base w-fit">Learning resources</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
