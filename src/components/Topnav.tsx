import { useState } from "react";
import Spinner from "../components/Spinner";
import { Dropdown } from "flowbite-react";
import {
  Bars3Icon,
  ChartBarSquareIcon,
  UserIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";
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
  const navigate = useNavigate();
  const [spinSignOut, setSpinSignOut] = useState<boolean>(false);

  const handleLogout = async () => {
    setSpinSignOut(true);
    const promise = await logout();
    if (promise !== null) {
      setSpinSignOut(false);
      navigate(uriPaths.LOG_IN);
    }
    setSpinSignOut(false);
  };
  return (
    <nav className="lg:px-10 md:px-7 px-5 flex lg:justify-end md:justify-between justify-between items-center py-4 ">
      <Bars3Icon
        onClick={() => props.handleSidebarMenu()}
        className="w-8 cursor-pointer lg:hidden md:block block"
      />
      <Dropdown
        inline
        label={
          <div
            className="profile-picture w-10 h-10 bg-center bg-no-repeat bg-cover rounded-full"
            style={{
              backgroundImage: `url(${props.profilePicture})`,
            }}
          />
        }
      >
        <Dropdown.Header>
          <span className="block text-base font-bold text-dgDarkPurple">
            {props.userData?.name}
          </span>
          <span className="block truncate text-dgDarkPurple_Opacity text-sm font-medium">
            {props.userData?.email}
          </span>
        </Dropdown.Header>
        <Link
          to={uriPaths.DASHBOARD}
          className="flex flex-row items-center text-base px-4 py-2 hover:bg-dgLightPurple"
        >
          <ChartBarSquareIcon className="w-5 mr-3" />
          <span>Dashboard</span>
        </Link>
        <Link
          to={uriPaths.UPDATE_PROFILE}
          className="flex flex-row items-center text-base px-4 py-2 hover:bg-dgLightPurple"
        >
          <UserIcon className="w-5 mr-3" />
          <span>Update Profile</span>
        </Link>
        <Dropdown.Divider />
        <a
          href="javascript:void(0)"
          onClick={() => handleLogout()}
          className="flex flex-row items-center select-none cursor-pointer text-base px-4 py-2 hover:bg-dgLightPurple"
        >
          {spinSignOut === true ? (
            <Spinner className="w-5 mr-3 fill-dgPurple text-dgLightPurple" />
          ) : (
            <TrashIcon className="w-5 mr-3" />
          )}
          <span>Sign out</span>
        </a>
      </Dropdown>
    </nav>
  );
};

export default Topnav;
