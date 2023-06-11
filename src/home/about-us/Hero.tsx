import { Link } from "react-router-dom";
import * as uriPaths from "../../assets/data/uriPaths";
import { ArrowRightCircleIcon } from "@heroicons/react/24/solid";
import AboutHeroImage from "../../assets/images/about-hero.jpg";

const Hero = () => {
  return (
    <div className="lg:px-24 md:px-10 px-3 mb-10 flex justify-between items-center">
      <div className="lg:max-w-[600px] md:max-w-full w-screen lg:mt-0 md:mt-20 mt-20 flex flex-col justify-center lg:mx-0 md:mx-auto mx-auto lg:items-start md:items-center items-start">
        <h1 className="text-dgDarkPurple lg:text-6xl md:text-5xl text-4xl font-black lg:mb-6 md:mb-5 mb-4 lg:text-left md:text-center text-left">
          <span className="text-dgPurple">Coding</span>
          <span> the </span>
          <span className="text-dgPurple">Future:</span>
          <span> One Line at a Time</span>
        </h1>
        <p className="lg:mb-6 md:mb-5 mb-4 lg:text-left md:text-center text-left">
          At our core, we believe in the power of coding to shape the future.
          With each line of code, we strive to drive innovation, create seamless
          user experiences, and pave the way for a digital revolution.
        </p>
        <Link to={uriPaths.SIGN_UP}>
          <span
            className={`bg-dgDarkPurple inline-block px-6 py-3 font-medium text-dgLightPurple rounded text-base`}
          >
            <span>Get Started Learning</span>
            <ArrowRightCircleIcon className="w-6 text-dgLightPurple ml-4 inline-block" />
          </span>
        </Link>
      </div>
      <div
        className="w-full max-w-[485px] min-h-[611px] h-full lg:flex md:hidden hidden rounded bg-center bg-no-repeat bg-cover"
        style={{ backgroundImage: `url(${AboutHeroImage})` }}
      />
    </div>
  );
};

export default Hero;
