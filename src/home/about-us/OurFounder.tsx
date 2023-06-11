import { Link } from "react-router-dom";
import * as uriPaths from "../../assets/data/uriPaths";
import OurFounderImage from "../../assets/images/about-founder.jpg";

const OurFounder = () => {
  return (
    <div className="lg:px-24 md:px-10 px-3 lg:mb-24 md:my-16 my-12">
      <div className="grid gap-5 lg:grid-cols-2 md:grid-cols-1 grid-cols-1">
        <div
          className="w-full h-full lg:flex md:hidden hidden rounded bg-center bg-no-repeat bg-cover mt-12"
          style={{ backgroundImage: `url(${OurFounderImage})` }}
        />
        <div>
          <p className="text-dgDarkPurple_Opacity text-base font-bold tracking-widest">
            OUR FOUNDER
          </p>
          <h2 className="text-3xl font-bold text-dgDarkPurple  mt-6 mb-14 max-w-[354px]">
            The brilliant mind behind our success
          </h2>
          <div className="h-48 max-w-[540px] border-l-2 border-dgPurple flex flex-col  justify-evenly lg:pl-14 md:pl-10 pl-6">
            <h5 className="text-xl font-bold text-dgDarkPurple">About</h5>
            <p className="text-base text-dgDarkPurple_Opacity">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt tlabore et dolore magna aliqua. Ut enim
              ad minim, Lorem ipsum dolor sit amet, consectetur
            </p>
            <Link to={uriPaths.HOME}>
              <span className="font-medium text-dgPurple">Back Home</span>
            </Link>
          </div>
          <div className="h-48 max-w-[540px] border-l-2 border-dgLightPurple flex flex-col  justify-evenly lg:pl-14 md:pl-10 pl-6">
            <h5 className="text-xl font-bold text-dgDarkPurple">Mission</h5>
            <p className="text-base text-dgDarkPurple_Opacity">
              Our mission is to empower aspiring frontend developers with the
              knowledge, skills, and resources they need to succeed in the
              ever-evolving digital landscape.
            </p>
            <Link to={uriPaths.SIGN_UP}>
              <span className="font-medium text-dgPurple">Start Today</span>
            </Link>
          </div>
          <div className="h-48 max-w-[540px] border-l-2 border-dgLightPurple flex flex-col  justify-evenly lg:pl-14 md:pl-10 pl-6">
            <h5 className="text-xl font-bold text-dgDarkPurple">Goal</h5>
            <p className="text-base text-dgDarkPurple_Opacity">
              Our goals encompass fostering a vibrant learning community,
              providing accessible and comprehensive learning resources, and
              equipping individuals with the tools to thrive in the field.
            </p>
            <Link to={uriPaths.LOG_IN}>
              <span className="font-medium text-dgPurple">Get Started</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurFounder;
