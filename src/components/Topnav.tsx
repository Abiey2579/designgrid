import React, { useState } from "react";
import {
  Bars3Icon,
  ChartBarSquareIcon,
  UserIcon,
  TrashIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/outline";
import UserProfile from "../assets/svgs/user-profile.svg";
import { Link } from "react-router-dom";
import * as uriPaths from "../assets/data/constants";

export interface TopnavProps {
  handleSidebarMenu: Function;
}

const Topnav = (props: TopnavProps) => {
  const [showProfileImageMenu, setshowProfileImageMenu] =
    useState<boolean>(false);

  const handleProfileImageMenu = () => {
    return setshowProfileImageMenu(!showProfileImageMenu);
  };
  return (
    <nav className="lg:px-10 md:px-7 px-5 flex lg:justify-end md:justify-between justify-between items-center py-4 ">
      <Bars3Icon
        onClick={() => props.handleSidebarMenu()}
        className="w-8 cursor-pointer lg:hidden md:block block"
      />
      <div className="flex flex-col relative">
        <div
          className="flex items-center gap-3 cursor-pointer"
          onClick={() => handleProfileImageMenu()}
        >
          <img
            src={UserProfile}
            alt="UserProfile"
            className="select-none w-9"
          />
          <p className="text-base font-medium select-none">Yahya M. Bello</p>
          <ChevronDownIcon className="select-none w-5" />
        </div>
        {showProfileImageMenu && (
          <div className="absolute w-full top-full bg-dgWhite shadow mt-3 p-3 gap-2 flex flex-col rounded">
            <Link
              to={uriPaths.DASHBOARD}
              className="px-3 py-2 hover:bg-dgLightPurple rounded flex items-center gap-3"
            >
              <ChartBarSquareIcon className="w-5" />
              Dashboard
            </Link>
            <Link
              to={uriPaths.UPDATE_PROFILE}
              className="px-3 py-2 hover:bg-dgLightPurple rounded flex items-center gap-3"
            >
              <UserIcon className="w-5" />
              Update Profile
            </Link>
            <span className="px-3 py-2 hover:bg-dgLightPurple rounded flex items-center gap-3">
              <TrashIcon className="w-5" />
              Logout
            </span>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Topnav;
