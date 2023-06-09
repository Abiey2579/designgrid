import * as React from "react";
import Twitter from "../assets/svgs/footer-twitter.svg";
import Facebook from "../assets/svgs/footer-facebook-f.svg";
import Instagram from "../assets/svgs/footer-instagram.svg";
import Discord from "../assets/svgs/footer-discord.svg";

import { EnvelopeIcon, ArrowRightIcon } from "@heroicons/react/24/outline";

const Footer = () => {
  return (
    <footer className="lg:px-24 md:px-10 px-6 bg-dgDarkPurple py-20 flex lg:flex-row md:flex-col flex-col md:gap-10 gap-8 justify-between">
      <div>
        <h3 className="text-dgLightPurple text-3xl font-bold mb-10">
          DesignGrid
        </h3>
        <p className="max-w-[280px] mb-8 text-dgLightPurple">
          Empower yourself to shape the future of frontend development by
          unlocking your potential and embarking on a transformative journey
          towards building innovative and impactful web experiences.
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
        <h3 className="text-dgLightPurple text-3xl font-bold mb-10">
          Sections
        </h3>
        <div className="flex mb-8">
          <ArrowRightIcon className="mr-8 w-6 text-dgLightPurple" />
          <a href="/" className="text-dgLightPurple text-base">
            Learning Path
          </a>
        </div>
        <div className="flex mb-8">
          <ArrowRightIcon className="mr-8 w-6 text-dgLightPurple" />
          <a href="/" className="text-dgLightPurple text-base">
            Community Blogs
          </a>
        </div>
        <div className="flex mb-8">
          <ArrowRightIcon className="mr-8 w-6 text-dgLightPurple" />
          <a href="/" className="text-dgLightPurple text-base">
            About Us
          </a>
        </div>
      </div>
      <div>
        <h3 className="text-dgLightPurple text-3xl font-bold mb-10">
          Have a question?
        </h3>
        <div className="flex mb-8">
          <EnvelopeIcon className="mr-8 w-6 text-dgLightPurple" />
          <p className="text-dgLightPurple text-base">support@designgrid.com</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
