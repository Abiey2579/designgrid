import { Link } from "react-router-dom";
import * as uriPaths from "../assets/data/uriPaths";
import OurValuesImage from "../assets/images/our-values.jpg";

const OurValues = () => {
  return (
    <div className="lg:px-24 md:px-10 px-3 md:my-20 my-16">
      <p className="text-dgDarkPurple_Opacity text-base font-bold tracking-widest">
        OUR VALUES
      </p>
      <div className="grid gap-5 lg:grid-cols-2 md:grid-cols-1 grid-cols-1 mt-6">
        <div>
          <h2 className="text-3xl font-bold text-dgDarkPurple mb-14 max-w-[354px]">
            Fostering a melting pot for the best ideas
          </h2>
          <div className="h-48 max-w-[540px] border-l-2 border-dgPurple flex flex-col  justify-evenly lg:pl-14 md:pl-10 pl-6">
            <h5 className="text-xl font-bold text-dgDarkPurple">Empowerment</h5>
            <p className="text-base text-dgDarkPurple_Opacity">
              Empowering students is a core value we uphold, enabling them to
              take charge of their learning journey and create remarkable web
              experiences with confidence.
            </p>
            <Link to={uriPaths.ABOUT}>
              <span className="font-medium text-dgPurple">Learn More</span>
            </Link>
          </div>
          <div className="h-48 max-w-[540px] border-l-2 border-dgLightPurple flex flex-col  justify-evenly lg:pl-14 md:pl-10 pl-6">
            <h5 className="text-xl font-bold text-dgDarkPurple">
              Accessibility
            </h5>
            <p className="text-base text-dgDarkPurple_Opacity">
              Accessibility is at the heart of our mission. We strive to make
              high-quality learning resources available to everyone, regardless
              of their background or financial means.
            </p>
            <Link to={uriPaths.ABOUT}>
              <span className="font-medium text-dgPurple">Learn More</span>
            </Link>
          </div>
          <div className="h-48 max-w-[540px] border-l-2 border-dgLightPurple flex flex-col  justify-evenly lg:pl-14 md:pl-10 pl-6">
            <h5 className="text-xl font-bold text-dgDarkPurple">
              Practicality
            </h5>
            <p className="text-base text-dgDarkPurple_Opacity">
              Practicality is central to our approach. We focus on delivering
              hands-on, real-world learning experiences that equip students with
              relevant skills.
            </p>
            <Link to={uriPaths.ABOUT}>
              <span className="font-medium text-dgPurple">Learn More</span>
            </Link>
          </div>
        </div>
        <div
          className="w-full h-full lg:flex md:flex hidden rounded bg-center bg-no-repeat bg-cover"
          style={{ backgroundImage: `url(${OurValuesImage})` }}
        />
      </div>
    </div>
  );
};

export default OurValues;
