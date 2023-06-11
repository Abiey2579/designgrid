import { useState } from "react";
import Spinner from "../components/Spinner";
import { Fragment } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Popover, Transition } from "@headlessui/react";
import { Dropdown } from "flowbite-react";
import {
  Bars3Icon,
  XMarkIcon,
  BookOpenIcon,
  PresentationChartLineIcon,
  UserIcon,
  TrashIcon,
  ChartBarSquareIcon,
} from "@heroicons/react/24/outline";
import * as uriPaths from "../assets/data/uriPaths";
import { logout } from "../assets/config/functions";
import { FetchedUser } from "../assets/Model/model";

const NAV_ITEMS = [
  {
    name: "Learning Path",
    href: uriPaths.LEARNING_PATH,
    icon: PresentationChartLineIcon,
  },
  {
    name: "Blogs",
    href: uriPaths.COMMUNITY_BLOGS,
    icon: BookOpenIcon,
  },
  {
    name: "Dashboard",
    href: uriPaths.DASHBOARD,
    icon: ChartBarSquareIcon,
  },
  {
    name: "Update profile",
    href: uriPaths.UPDATE_PROFILE,
    icon: UserIcon,
  },
];

const Navbar = (props: {
  pageURI: string;
  userData: FetchedUser;
  profilePicture: string;
}) => {
  const [spinSignOut, setSpinSignOut] = useState<boolean>(false);
  const navigate = useNavigate();

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
    <Popover className="relative bg-dgWhite z-20 border-b border-dgBorder">
      <div className="lg:px-24 md:px-10 pl-3 pr-6 ">
        <div className="flex items-center justify-between py-1 md:justify-start md:space-x-10 h-20">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <h4 className="text-xl font-bold text-dgDarkPurple">
              <span className="text-dgPurple">Design</span>Grid
            </h4>
          </div>
          <div className="-my-2 -mr-2 md:hidden">
            <Popover.Button className="inline-flex items-center justify-center rounded-md bg-dgLightPurple p-2 ">
              <span className="sr-only">Open menu</span>
              <Bars3Icon
                className="h-7 w-7 text-dgDarkPurple "
                aria-hidden="true"
              />
            </Popover.Button>
          </div>
          <Popover.Group as="nav" className="hidden space-x-10 md:flex">
            <Link to={uriPaths.LEARNING_PATH}>
              <span className="text-base font-medium text-dgDarkPurple_Opacity hover:text-dgDarkPurple_Opacity">
                Learning Path
              </span>
            </Link>
            <Link to={uriPaths.COMMUNITY_BLOGS}>
              <span className="text-base font-medium text-dgDarkPurple_Opacity hover:text-dgDarkPurple_Opacity">
                Blogs
              </span>
            </Link>
          </Popover.Group>
          <div className="hidden items-center justify-end md:flex md:flex-1 lg:w-0">
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
              {props.pageURI === uriPaths.DASHBOARD ? (
                ""
              ) : (
                <Link
                  to={uriPaths.DASHBOARD}
                  className="flex flex-row items-center text-base px-4 py-2 hover:bg-dgLightPurple"
                >
                  <ChartBarSquareIcon className="w-5 mr-3" />
                  <span>Dashboard</span>
                </Link>
              )}
              {props.pageURI === uriPaths.UPDATE_PROFILE ? (
                ""
              ) : (
                <Link
                  to={uriPaths.UPDATE_PROFILE}
                  className="flex flex-row items-center text-base px-4 py-2 hover:bg-dgLightPurple"
                >
                  <UserIcon className="w-5 mr-3" />
                  <span>Update Profile</span>
                </Link>
              )}
              <Dropdown.Divider />
              <span
                onClick={() => handleLogout()}
                className="flex flex-row items-center select-none cursor-pointer text-base px-4 py-2 hover:bg-dgLightPurple"
              >
                {spinSignOut === true ? (
                  <Spinner className="w-5 mr-3 fill-dgPurple text-dgLightPurple" />
                ) : (
                  <TrashIcon className="w-5 mr-3" />
                )}
                <span>Sign out</span>
              </span>
            </Dropdown>
          </div>
        </div>
      </div>

      <Transition
        as={Fragment}
        enter="duration-200 ease-out"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="duration-100 ease-in"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        <Popover.Panel
          focus
          className="absolute inset-x-0 top-0 origin-top-right transform p-2 transition md:hidden"
        >
          <div className="divide-y-2 divide-gray-50 rounded-lg bg-dgWhite shadow-lg ring-1 ring-black ring-opacity-5">
            <div className="px-5 pt-5 pb-6">
              <div className="flex items-center justify-between">
                <div className="-mr-2">
                  <Popover.Button className="inline-flex items-center justify-center rounded-md bg-dgLightPurple p-2 text-dgDarkPurple_Opacity hover:bg-gray-100 hover:text-dgDarkPurple_Opacity focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                    <span className="sr-only">Close menu</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </Popover.Button>
                </div>
              </div>
              <div className="mt-6">
                <nav className="grid gap-y-8">
                  {NAV_ITEMS.map((item) =>
                    props.pageURI === uriPaths.UPDATE_PROFILE &&
                    item.href === uriPaths.UPDATE_PROFILE ? (
                      ""
                    ) : props.pageURI === uriPaths.DASHBOARD &&
                      item.href === uriPaths.DASHBOARD ? (
                      ""
                    ) : (
                      <Link
                        key={item.name}
                        to={item.href}
                        className="-m-3 flex items-center rounded-md p-3 hover:bg-dgLightPurple"
                      >
                        <item.icon
                          className="h-6 w-6 flex-shrink-0 "
                          aria-hidden="true"
                        />
                        <span className="ml-3 text-base font-medium text-dgDarkPurple_Opacity">
                          {item.name}
                        </span>
                      </Link>
                    )
                  )}
                  <span
                    key={"logout"}
                    onClick={() => handleLogout()}
                    className="-m-3 flex items-center cursor-pointer select-none rounded-md p-3 hover:bg-dgLightPurple"
                  >
                    {spinSignOut === true ? (
                      <Spinner className="w-6 fill-dgPurple text-dgLightPurple" />
                    ) : (
                      <TrashIcon
                        className="h-6 w-6 flex-shrink-0 "
                        aria-hidden="true"
                      />
                    )}
                    <span className="ml-3 text-base font-medium text-dgDarkPurple_Opacity">
                      Logout
                    </span>
                  </span>
                </nav>
              </div>
            </div>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  );
};

export default Navbar;
