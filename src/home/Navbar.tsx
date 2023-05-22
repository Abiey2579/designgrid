import * as React from "react";
import "../assets/css/Navbar.module.css";
import Button from "../components/Button";
import NavIcon from "../assets/svgs/nav-icon.svg";

const Navbar = () => {
  return (
    <nav className="px-24 flex flex-row justify-between items-center h-20">
      <h4 className="text-xl font-bold text-dgDarkPurple">DesignGrid</h4>
      <ul className="lg:flex md:hidden gap-16">
        <li>
          <a href="/" className="text-base text-dgDarkPurple">
            Home
          </a>
        </li>
        <li>
          <a href="/" className="text-base text-dgDarkPurple">
            Docs
          </a>
        </li>
        <li>
          <a href="/" className="text-base text-dgDarkPurple">
            Designs
          </a>
        </li>
        <li>
          <a href="/" className="text-base text-dgDarkPurple">
            Resources
          </a>
        </li>
      </ul>
      <Button name="Sign Up" className="lg:flex md:hidden" />
      <img src={NavIcon} alt="NavIcon" className="w-5 lg:hidden md:flex" />
    </nav>
  );
};

export default Navbar;
