import { Fragment } from "react";
import { Link } from "react-router-dom";
import { Popover, Transition } from "@headlessui/react";
import {
  Bars3Icon,
  XMarkIcon,
  BookOpenIcon,
  PresentationChartLineIcon,
  UserIcon,
  HomeModernIcon,
  UserPlusIcon,
} from "@heroicons/react/24/outline";
import * as uriPaths from "../assets/data/uriPaths";

const NAV_ITEMS = [
  {
    name: "Home",
    href: uriPaths.HOME,
    icon: HomeModernIcon,
  },
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
    name: "About",
    href: uriPaths.ABOUT,
    icon: UserIcon,
  },
];

const Navbar = () => {
  return (
    <Popover className="relative bg-dgWhite z-50">
      <div className="lg:px-24 md:px-10 px-3 ">
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
            <Link to={uriPaths.HOME}>
              <span className="text-base font-medium text-dgDarkPurple_Opacity hover:text-dgDarkPurple_Opacity">
                Home
              </span>
            </Link>
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
            <Link to={uriPaths.ABOUT}>
              <span className="text-base font-medium text-dgDarkPurple_Opacity hover:text-dgDarkPurple_Opacity">
                About
              </span>
            </Link>
          </Popover.Group>
          <div className="hidden items-center justify-end md:flex md:flex-1 lg:w-0">
            <Link to={uriPaths.SIGN_UP}>
              <span
                className={`bg-dgPurple inline-block px-6 py-3 font-medium text-dgLightPurple rounded text-base`}
              >
                Sign Up
              </span>
            </Link>
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
                  {NAV_ITEMS.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className="-m-3 flex items-center rounded p-3 hover:bg-dgLightPurple"
                    >
                      <item.icon
                        className="h-6 w-6 flex-shrink-0 "
                        aria-hidden="true"
                      />
                      <span className="ml-3 text-base font-medium text-dgDarkPurple_Opacity">
                        {item.name}
                      </span>
                    </Link>
                  ))}

                  <Link
                    key={"signup"}
                    to={uriPaths.SIGN_UP}
                    className="-m-3 flex items-center rounded p-3 bg-dgPurple"
                  >
                    <UserPlusIcon
                      className="h-6 w-6 flex-shrink-0 text-dgLightPurple"
                      aria-hidden="true"
                    />
                    <span className="ml-3 text-base font-medium text-dgLightPurple">
                      Sign Up
                    </span>
                  </Link>
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
