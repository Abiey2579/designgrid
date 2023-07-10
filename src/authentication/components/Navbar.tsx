import { Link } from "react-router-dom";
import { Popover } from "@headlessui/react";
import { Bars3Icon } from "@heroicons/react/24/outline";
import * as uriPaths from "../../assets/data/uriPaths";

const AuthenticationNavbar = () => {
  return (
    <Popover className="relative bg-dgWhite z-20 border-b border-slate-300">
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

          <div className="hidden items-center justify-end md:flex md:flex-1 lg:w-0">
            <Link to={uriPaths.HOME}>
              <span className="bg-dgPurple inline-block px-6 py-3 font-medium text-dgLightPurple rounded-lg">
                Home
              </span>
            </Link>
          </div>
        </div>
      </div>
    </Popover>
  );
};

export default AuthenticationNavbar;
