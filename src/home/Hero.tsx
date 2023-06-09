import { Link } from "react-router-dom";
import * as uriPaths from "../assets/data/uriPaths";
// import TBB from "../assets/images/tbb.png";
// import { TrophyIcon } from "@heroicons/react/24/outline";
import "../assets/css/slider.css";
import { motion } from "framer-motion";

// LANGUAGES LOGO
import Angular from "../assets/languages/angular.svg";
import Vue from "../assets/languages/vue-dot-js.svg";
import React from "../assets/languages/react.svg";
import HTML from "../assets/languages/html.svg";
import CSS from "../assets/languages/css.svg";
import Sass from "../assets/languages/sass.svg";
import Bootstrap from "../assets/languages/bootstrap.svg";
import Javascript from "../assets/languages/javascript.svg";
import jQuery from "../assets/languages/jquery.svg";
import TailwindCSS from "../assets/languages/tailwind-css.svg";
import Typescript from "../assets/languages/typescript.svg";

const Hero = () => {
  // Array of company logos
  const LanguageLogos = [
    Angular,
    Vue,
    React,
    HTML,
    CSS,
    Sass,
    Bootstrap,
    Javascript,
    jQuery,
    TailwindCSS,
    Typescript,
  ];

  return (
    <div className="my-20">
      {/* HERO SECTION */}
      <div className="lg:px-24 md:px-10 px-6 text-center lg:mb-16 md:mb-12 mb-10">
        <h1 className="lg:text-[80px] md:text-6xl text-5xl text-dgDarkPurple lg:text-center md:text-center text-left font-bold lg:max-w-[740px] md:max-w-full m-auto mb-6 leading-tight">
          <span className="text-dgPurple">Building</span> the future of
          <span className="text-dgPurple"> Frontend</span>
        </h1>
        <p className="text-dgDarkPurple_Opacity font-normal text-base max-w-[700px] mb-6 m-auto leading-relaxed  lg:text-center md:text-center text-left">
          Empower yourself to shape the future of frontend by unlocking your
          potential and embarking on a transformative journey towards building
          innovative and impactful web experiences.
        </p>
        <div className="max-w-[700px] flex lg:flex-row md:flex-row flex-col gap-5 block m-auto lg:items-center md:items-center items-start justify-center">
          <Link to={uriPaths.SIGN_UP}>
            <span
              className={`bg-dgPurple inline-block px-6 py-3 font-medium text-dgLightPurple rounded text-base`}
            >
              Get Started
            </span>
          </Link>
          <Link to={uriPaths.LEARNING_PATH}>
            <span className="bg-dgLightPurple px-6 py-3 inline-block font-medium text-dgDarkPurple rounded text-base">
              Explore Learning Path
            </span>
          </Link>
        </div>
      </div>

      {/* TRUSTED BY AND BUILD AS PART OF SECTION */}
      {/* <div className="lg:px-24 md:px-10 px-6 flex justify-between items-center m-auto lg:max-w-[70vw] md:max-w-[90vw] max-w-[100vw]">
        <div>
          <p className="font-bold text-dgDarkPurple">Trusted By</p>
          <div>
            <img src={TBB} alt="TBB" className="w-12" />
          </div>
        </div>
        <div>
          <h4 className="font-bold text-dgDarkPurple">Built as part of</h4>
          <div className="bg-dgLightPurple px-4 py-3 rounded flex items-center">
            <TrophyIcon className="text-dgPurple w-6 mr-4" />
            <span className="font-medium text-dgDarkPurple">
              Appwrite Hackathon
            </span>
          </div>
        </div>
      </div> */}

      {/* OUR LEARNING PATH */}
      <div className="slider relative overflow-hidden w-full bg-dgLightPurple py-10 m-auto mt-14">
        <ul
          className={`brands flex items-center w-[${
            LanguageLogos.length * 64 * 3
          }px]`}
        >
          {LanguageLogos.map((logo, index) => (
            <motion.img
              key={index}
              src={logo}
              alt={`Company Logo ${index + 1}`}
              className="h-16 w-auto mx-6"
            />
          ))}
          {LanguageLogos.map((logo, index) => (
            <motion.img
              key={index}
              src={logo}
              alt={`Company Logo ${index + 1}`}
              className="h-16 w-auto mx-6"
            />
          ))}
          {LanguageLogos.map((logo, index) => (
            <motion.img
              key={index}
              src={logo}
              alt={`Company Logo ${index + 1}`}
              className="h-16 w-auto mx-6"
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Hero;
