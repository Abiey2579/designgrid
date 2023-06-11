import { Link } from "react-router-dom";
import * as uriPaths from "../../assets/data/uriPaths";
import { ArrowRightCircleIcon } from "@heroicons/react/24/solid";
import AboutHeroImage from "../../assets/images/about-hero.jpg";

const Hero = () => {
  return (
    <div className="lg:px-24 md:px-10 px-6 mb-10 flex justify-between items-center">
      <div className="lg:max-w-[500px] md:max-w-full w-screen lg:mt-0 md:mt-20 mt-20 flex flex-col justify-center lg:mx-0 md:mx-auto mx-auto lg:items-start md:items-center items-start">
        <h1 className="text-dgDarkPurple lg:text-[56px] md:text-[56px] text-4xl leading-tight font-bold mb-6 lg:text-left md:text-center text-left">
          Coding the Future: One Line at a Time
        </h1>
        <p className="mb-6 lg:text-left md:text-center text-left">
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