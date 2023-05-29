import React, { useState } from "react";
import Search from "../assets/svgs/search.svg";
import { tableOfContent } from "../assets/data/tableOfContent";
import {
  BookOpenIcon,
  CodeBracketIcon,
  UsersIcon,
  ShareIcon,
  CommandLineIcon,
  MagnifyingGlassIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

interface SidebarProps {
  sidebarControl: boolean;
  handleSidebarMenu: Function;
}

const Sidebar = (props: SidebarProps) => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const filteredHackathons = tableOfContent.filter((item) =>
    item.header.toLowerCase().includes(searchQuery.toLowerCase())
  );
  const d = props.sidebarControl
    ? "fixed z-10 h-screen"
    : "lg:block md:hidden hidden";
  return (
    <React.Fragment>
      <div
        className={`min-w-[20%] max-w-[340px] h-screen bg-dgDarkPurple pl-5 pr-5 ${d} z-20`}
      >
        <div className="flex items-center justify-between py-7 mb-3">
          <h1 className="text-dgLightPurple text-xl font-bold">
            Learning Path
          </h1>
          <button className="w-auto px-3 py-1 bg-dgPurple outline-0 text-dgLightPurple font-semibold rounded-full text-center text-sm">
            v1.0
          </button>
          {props.sidebarControl && (
            <XMarkIcon
              onClick={() => props.handleSidebarMenu()}
              className="w-6 rounded text-dgLightPurple cursor-pointer"
            />
          )}
        </div>
        <div className="bg-dgLightPurple border border-slate-300 rounded flex mb-3 px-3 ">
          <MagnifyingGlassIcon className="w-5" />
          <input
            type="text"
            className="pl-3 py-3 border-0 outline-0 text-base flex-1 bg-dgLightPurple "
            placeholder="Search ..."
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <div className="SidebarMenu max-h-[75vh] overflow-y-scroll">
          {filteredHackathons.map((item) => (
            <React.Fragment>
              <p
                key={item.header}
                className="font-semibold text-dgLightPurple text-base my-3 py-1 border-slate-300 border-b"
              >
                {item.header}
              </p>
              {item.subContent.map((subItem) => (
                <a
                  href="/"
                  key={subItem.title}
                  title={subItem.title}
                  className={`pl-3 py-3 flex items-center rounded mb-1 text-sm block w-full transition-all hover:bg-dgPurple  ${
                    item.active
                      ? "bg-dgPurple text-dgLightPurple font-semibold"
                      : "text-dgLightPurple"
                  }`}
                >
                  {subItem.icon === "BookOpenIcon" ? (
                    <BookOpenIcon className="mr-2 w-4" />
                  ) : (
                    ""
                  )}
                  {subItem.icon === "CodeBracketIcon" ? (
                    <CodeBracketIcon className="mr-2 w-4" />
                  ) : (
                    ""
                  )}
                  {subItem.icon === "CommandLineIcon" ? (
                    <CommandLineIcon className="mr-2 w-4" />
                  ) : (
                    ""
                  )}
                  {subItem.icon === "ShareIcon" ? (
                    <ShareIcon className="mr-2 w-4" />
                  ) : (
                    ""
                  )}
                  {subItem.icon === "UsersIcon" ? (
                    <UsersIcon className="mr-2 w-4" />
                  ) : (
                    ""
                  )}
                  {subItem.title.length > 30
                    ? subItem.title.substring(0, 30) + "..."
                    : subItem.title}
                </a>
              ))}
            </React.Fragment>
          ))}
        </div>
      </div>
      {props.sidebarControl && (
        <div
          className="fixed min-h-screen w-screen z-10"
          style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
          onClick={() => props.handleSidebarMenu()}
        ></div>
      )}
    </React.Fragment>
  );
};

export default Sidebar;
