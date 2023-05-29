import * as React from "react";
import Button from "../components/Button";
import { Link } from "react-router-dom";
import * as uriPaths from "../assets/data/constants";

const Hero = () => {
  return (
    <div className="lg:px-24 md:px-10 px-6 text-center mt-20">
      <h1 className="lg:text-[80px] md:text-6xl text-5xl text-dgDarkPurple font-bold lg:max-w-[740px] md:max-w-full m-auto mb-6 leading-tight">
        Ignite Your <span className="text-dgPurple">Frontend</span> Dev Passion
      </h1>
      <p className="text-dgDarkPurple_Opacity font-normal text-base max-w-[700px] mb-6 m-auto leading-relaxed">
        A comprehensive online platform designed to empower aspiring frontend
        developers with the knowledge and skills they need to excel in the
        ever-evolving world of web development.
      </p>
      <div className="max-w-[700px] flex lg:flex-row md:flex-row flex-col gap-5 block m-auto justify-center items-center">
        <Button name="Get Started" href={uriPaths.SIGN_UP} />
        <Link to={uriPaths.LEARNING_PATH}>
          <span className="bg-dgLightPurple border border-dgDarkPurple px-10 py-4 inline-block font-normal text-dgDarkPurple rounded-full text-base">
            Explore Learning Path
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
