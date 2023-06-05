import React, { useState } from "react";
import {
  Bars3Icon,
  ChartBarSquareIcon,
  UserIcon,
  TrashIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/outline";
import UserProfile from "../assets/svgs/user-profile.svg";
import { Link, useNavigate } from "react-router-dom";
import * as uriPaths from "../assets/data/uriPaths";
import { logout } from "../assets/config/functions";

export interface TopnavProps {
  handleSidebarMenu: Function;
  userData?: {
    $createdAt: string;
    $id: string;
    $updatedAt: string;
    email: string;
    name: string;
  };
  profilePicture: string;
}

const Topnav = (props: TopnavProps) => {
  const [showProfileImageMenu, setshowProfileImageMenu] =
    useState<boolean>(false);
  const navigate = useNavigate();

  const handleProfileImageMenu = () => {
    return setshowProfileImageMenu(!showProfileImageMenu);
  };

  const handleLogout = () => {
    const promise = logout();
    if (promise !== null) {
      navigate(uriPaths.LOG_IN);
    }
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
          <div
            className="profile-picture select-none w-9 h-9 bg-center bg-no-repeat bg-cover rounded-full"
            style={{ backgroundImage: `url(${props.profilePicture})` }}
          ></div>
          <p className="text-base font-medium select-none">
            {props.userData?.name}
          </p>
          <ChevronDownIcon className="select-none w-5" />
        </div>
        {showProfileImageMenu && (
          <div className="absolute w-full min-w-[185px] top-full bg-dgWhite shadow mt-3 p-3 gap-2 flex flex-col rounded">
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
            <span
              onClick={() => handleLogout()}
              className="px-3 py-2 hover:bg-dgLightPurple rounded select-none cursor-pointer flex items-center gap-3"
            >
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
