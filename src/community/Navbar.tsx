import React, { useState, useEffect } from "react";
import { Fragment } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Popover, Transition } from "@headlessui/react";
import {
  Bars3Icon,
  XMarkIcon,
  BookOpenIcon,
  PresentationChartLineIcon,
  UserPlusIcon,
  ChartBarSquareIcon,
  UserIcon,
  TrashIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/outline";
import * as uriPaths from "../assets/data/uriPaths";
import { logout } from "../assets/config/functions";
import { account } from "../assets/config/appwrite-auth";
import Button from "../components/Button";
import UserProfile from "../assets/svgs/user-profile.svg";

const NAV_ITEMS = [
  {
    name: "Blogs",
    href: uriPaths.COMMUNITY_BLOGS,
    icon: BookOpenIcon,
  },
  {
    name: "Learning Path",
    href: uriPaths.LEARNING_PATH,
    icon: PresentationChartLineIcon,
  },
  {
    name: "Sign Up",
    href: uriPaths.SIGN_UP,
    icon: UserPlusIcon,
  },
];

const Navbar = (props: {
  pageURI?: string;
  userName?: string | undefined;
  profilePicture: string;
}) => {
  const [showProfileImageMenu, setshowProfileImageMenu] =
    useState<boolean>(false);
  const navigate = useNavigate();
  const [userId, setUserId] = useState<string>("");

  const handleProfileImageMenu = () => {
    return setshowProfileImageMenu(!showProfileImageMenu);
  };

  useEffect(() => {
    account.getSession("current").then((e) => setUserId(e.userId));
  }, []);

  const handleLogout = () => {
    const promise = logout();
    if (promise !== null) {
      navigate(uriPaths.LOG_IN);
    }
  };
  return (
    <Popover className="relative bg-dgLightPurple z-20 border-b border-dgBorder">
      <div className="lg:px-24 md:px-10 px-6 ">
        <div className="flex items-center justify-between py-1 md:justify-start md:space-x-10 h-20">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <h4 className="text-xl font-bold text-dgDarkPurple">
              <span className="text-dgPurple">Community</span> Blogs
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
            <Link to={uriPaths.COMMUNITY_BLOGS}>
              <span className="text-base font-medium text-dgDarkPurple_Opacity hover:text-dgDarkPurple_Opacity">
                Blogs
              </span>
            </Link>
            <Link to={uriPaths.LEARNING_PATH}>
              <span className="text-base font-medium text-dgDarkPurple_Opacity hover:text-dgDarkPurple_Opacity">
                Learning Path
              </span>
            </Link>
          </Popover.Group>
          <div className="hidden items-center justify-end md:flex md:flex-1 lg:w-0">
            {userId ? (
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
                    {props.userName}
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
            ) : (
              <Button name="Sign Up" href={uriPaths.SIGN_UP} />
            )}
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
                    userId && item.href === uriPaths.SIGN_UP ? (
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
                  {userId ? (
                    <React.Fragment>
                      <Link
                        key={"dashboard"}
                        to={uriPaths.DASHBOARD}
                        className="-m-3 flex items-center rounded-md p-3 hover:bg-dgLightPurple"
                      >
                        <ChartBarSquareIcon
                          className="h-6 w-6 flex-shrink-0 "
                          aria-hidden="true"
                        />
                        <span className="ml-3 text-base font-medium text-dgDarkPurple_Opacity">
                          Dashboard
                        </span>
                      </Link>
                      <span
                        key={"logout"}
                        onClick={() => handleLogout()}
                        className="-m-3 flex items-center cursor-pointer select-none rounded-md p-3 hover:bg-dgLightPurple"
                      >
                        <TrashIcon
                          className="h-6 w-6 flex-shrink-0 "
                          aria-hidden="true"
                        />
                        <span className="ml-3 text-base font-medium text-dgDarkPurple_Opacity">
                          Logout
                        </span>
                      </span>
                    </React.Fragment>
                  ) : (
                    ""
                  )}
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
