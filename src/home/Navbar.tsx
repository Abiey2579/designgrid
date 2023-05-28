import React, { useState } from "react";
import "../assets/css/Navbar.module.css";
import Button from "../components/Button";
import { Link } from "react-router-dom";
import { Bars3Icon } from "@heroicons/react/24/outline";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const navitems = [
    { name: "Home", href: "/" },
    { name: "Learning Path", href: "/frontend" },
    { name: "Blog", href: "/blog" },
    { name: "About", href: "/about" },
  ];

  const handleShowMenu = () => {
    if (showMenu) setShowMenu(false);
    if (!showMenu) setShowMenu(true);
  };
  return (
    <nav className="lg:px-24 md:px-10 px-6 relative">
      <div className="h-20 flex flex-row justify-between items-center w-full">
        <h4 className="text-xl font-bold text-dgDarkPurple">DesignGrid</h4>
        <ul className="lg:flex md:hidden hidden gap-16">
          {navitems.map((item) => (
            <li key={item.name}>
              <Link to={item.href}>
                <span className="text-base text-dgDarkPurple">{item.name}</span>
              </Link>
            </li>
          ))}
        </ul>
        <Button
          name="Sign Up"
          className="lg:flex md:hidden hidden"
          href="/auth/signup"
        />
        <Bars3Icon
          onClick={handleShowMenu}
          className="w-8 cursor-pointer lg:hidden md:flex"
        />
      </div>
      {showMenu && (
        <ul className="bg-dgWhite rounded shadow py-3 lg:hidden md:flex flex-col w-full">
          {navitems.map((item) => (
            <li key={item.name} className="mx-3 my-1">
              <a
                href={item.href}
                className="text-base hover:bg-dgPurple hover:text-dgLightPurple text-dgDarkPurple pl-4 py-4 rounded mb-1 block w-full"
              >
                {item.name}
              </a>
            </li>
          ))}
          <li key="Sign Up" className="mx-3 my-1">
            <Link to={"/auth/signup"}>
              <span className="text-base bg-dgPurple text-dgLightPurple pl-4 py-4 rounded mb-1 block w-full">
                Sign Up
              </span>
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
