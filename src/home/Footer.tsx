import * as React from "react";
import Twitter from "../assets/svgs/Twitter.svg";
import Facebook from "../assets/svgs/Facebook.svg";
import Instagram from "../assets/svgs/Instagram.svg";
import Discord from "../assets/svgs/Discord.svg";

import AngleRight from "../assets/svgs/angle-right.svg";
import MapMarker from "../assets/svgs/map-marker-alt.svg";
import PhoneAlt from "../assets/svgs/phone-alt.svg";
import Envelop from "../assets/svgs/envelope.svg";

const Footer = () => {
  return (
    <footer className="lg:px-24 md:px-10 px-6 bg-dgDarkPurple py-20 flex lg:flex-row md:flex-col flex-col md:gap-10 gap-8 justify-between">
      <div>
        <h3 className="text-dgLightPurple text-3xl font-bold mb-10">
          Our Community
        </h3>
        <p className="max-w-[280px] mb-8 text-dgLightPurple">
          Far far away, behind the world Mountains, far from the countries
          Volkalia and Consonantia, there live the blind texts.
        </p>
        <div className="flex gap-5">
          <img src={Twitter} alt="Twitter" />
          <img src={Facebook} alt="Facebook" />
          <img src={Instagram} alt="Instagram" />
          <img src={Discord} alt="Discord" />
        </div>
      </div>
      <div>
        <h3 className="text-dgLightPurple text-3xl font-bold mb-10">
          What We Offer
        </h3>
        <div className="flex mb-8">
          <img src={AngleRight} alt="AngleRight" className="mr-8" />
          <a href="/" className="text-dgLightPurple text-base">
            Design Documentation
          </a>
        </div>
        <div className="flex mb-8">
          <img src={AngleRight} alt="AngleRight" className="mr-8" />
          <a href="/" className="text-dgLightPurple text-base">
            Design Projects
          </a>
        </div>
        <div className="flex mb-8">
          <img src={AngleRight} alt="AngleRight" className="mr-8" />
          <a href="/" className="text-dgLightPurple text-base">
            Learning Resources
          </a>
        </div>
      </div>
      <div>
        <h3 className="text-dgLightPurple text-3xl font-bold mb-10">
          Have a question?
        </h3>
        <div className="flex mb-8">
          <img src={MapMarker} alt="AngleRight" className="mr-8" />
          <p className="text-dgLightPurple text-base max-w-[240px]">
            203 Fake St. Mountain View, San Francisco, Calfornia, Nigeria
          </p>
        </div>
        <div className="flex mb-8">
          <img src={PhoneAlt} alt="AngleRight" className="mr-8" />
          <p className="text-dgLightPurple text-base">+234 9039 4028 57 </p>
        </div>
        <div className="flex mb-8">
          <img src={Envelop} alt="AngleRight" className="mr-8" />
          <p className="text-dgLightPurple text-base">support@designgrid.com</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
