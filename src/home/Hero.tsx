import { Link } from "react-router-dom";
import * as uriPaths from "../assets/data/uriPaths";
import "../assets/css/slider.css";
import { ScrollingLogos } from "../assets/data/ScrollingLogos";

const Hero = () => {
  // Array of company logos
  return (
    <div className="my-20">
      {/* HERO SECTION */}
      <div className="lg:px-24 md:px-10 px-3 text-center lg:mb-16 md:mb-12 mb-10">
        <h1 className="lg:text-7xl md:text-6xl text-6xl text-dgDarkPurple lg:text-center md:text-center text-left font-black lg:max-w-[700px] md:max-w-full m-auto mb-4">
          <span className="text-dgPurple">Building</span>
          <span> the future of</span>
          <span className="text-dgPurple"> Aspiring Devs</span>
        </h1>
        <p className="text-dgDarkPurple_Opacity font-normal text-base max-w-[700px] lg:mb-6 md:mb-5 mb-4 m-auto leading-relaxed  lg:text-center md:text-center text-left">
          Embark on a transformative journey towards becoming a skilled frontend
          developer and unlock your full potential in shaping the future of
          frontend web development.
        </p>
        <div className="max-w-[700px] flex lg:flex-row md:flex-row flex-col lg:gap-5 md:gap-4 gap-3 block m-auto lg:items-center md:items-center items-start justify-center">
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

      {/* OUR LEARNING PATH */}
      <div className="slider relative overflow-hidden w-full bg-dgLightPurple py-10 m-auto mt-14">
        <ul className={`brands flex items-center `}>
          {ScrollingLogos.map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt={`Logo ${index + 1}`}
              className="h-16 w-auto mx-6"
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Hero;
