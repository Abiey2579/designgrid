import Twitter from "../assets/svgs/footer-twitter.svg";
import Facebook from "../assets/svgs/footer-facebook-f.svg";
import Instagram from "../assets/svgs/footer-instagram.svg";
import Discord from "../assets/svgs/footer-discord.svg";
import * as uriPaths from "../assets/data/uriPaths";
import { Link } from "react-router-dom";

import { EnvelopeIcon, ArrowRightIcon } from "@heroicons/react/24/outline";

const Footer = () => {
  return (
    <footer className="lg:px-24 md:px-10 px-6 bg-dgDarkPurple py-20 flex lg:flex-row md:flex-col flex-col md:gap-10 gap-8 justify-between">
      <div>
        <h3 className="text-dgLightPurple text-2xl font-semibold mb-10">
          DesignGrid
        </h3>
        <p className="max-w-[280px] mb-8 text-dgLightPurple">
          Unlock your potential in frontend development and create impactful web
          experiences that shape the future. Start your transformative journey
          now!
        </p>
        <div className="flex gap-5">
          <div className="w-12 h-12 rounded-full bg-dgLightPurple_Opacity grid place-items-center">
            <img src={Twitter} alt="Twitter" className="w-6" />
          </div>
          <div className="w-12 h-12 rounded-full bg-dgLightPurple_Opacity grid place-items-center">
            <img src={Facebook} alt="Facebook" className="h-6" />
          </div>
          <div className="w-12 h-12 rounded-full bg-dgLightPurple_Opacity grid place-items-center">
            <img src={Instagram} alt="Instagram" className="w-6" />
          </div>
          <div className="w-12 h-12 rounded-full bg-dgLightPurple_Opacity grid place-items-center">
            <img src={Discord} alt="Discord" className="w-6" />
          </div>
        </div>
      </div>
      <div>
        <h3 className="text-dgLightPurple text-2xl font-semibold mb-10">
          Sections
        </h3>
        <div className="flex mb-8">
          <ArrowRightIcon className="mr-5 w-6 text-dgLightPurple" />
          <Link
            to={uriPaths.LEARNING_PATH}
            className="text-dgLightPurple text-base"
          >
            Learning Path
          </Link>
        </div>
        <div className="flex mb-8">
          <ArrowRightIcon className="mr-5 w-6 text-dgLightPurple" />
          <Link
            to={uriPaths.COMMUNITY_BLOGS}
            className="text-dgLightPurple text-base"
          >
            Community Blogs
          </Link>
        </div>
        <div className="flex mb-8">
          <ArrowRightIcon className="mr-5 w-6 text-dgLightPurple" />
          <Link to={uriPaths.ABOUT} className="text-dgLightPurple text-base">
            About Us
          </Link>
        </div>
      </div>
      <div>
        <h3 className="text-dgLightPurple text-2xl font-semibold mb-10">
          Have a question?
        </h3>
        <div className="flex mb-8">
          <EnvelopeIcon className="mr-5 w-6 text-dgLightPurple" />
          <a
            href="mailto:support@designgrid.com.ng"
            className="text-dgLightPurple text-base"
          >
            support@designgrid.com.ng
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
