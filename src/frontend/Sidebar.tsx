import React, { useState } from "react";
import Search from "../assets/svgs/search.svg";
import { tableOfContent } from "../assets/data/tableOfContent";
import { frontend101TOC } from "../assets/TOC/frontend101TOC";
import {
  BookOpenIcon,
  CodeBracketIcon,
  UsersIcon,
  ShareIcon,
  CommandLineIcon,
  MagnifyingGlassIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { CheckBadgeIcon } from "@heroicons/react/24/solid";

interface SidebarProps {
  sidebarControl: boolean;
  handleSidebarMenu: Function;
}

const Sidebar = (props: SidebarProps) => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  // const filteredHackathons = frontend101TOC.filter((item) =>
  //   item.topic.toLowerCase().includes(searchQuery.toLowerCase())
  // );
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
        <div className="bg-dgWhite rounded flex mb-3 px-3 ">
          <MagnifyingGlassIcon className="w-5" />
          <input
            type="text"
            className="pl-3 py-3 border-0 outline-0 text-base flex-1 bg-dgWhite "
            placeholder="Search ..."
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        {/* <div className="SidebarMenu max-h-[75vh] overflow-y-scroll">
          {filteredHackathons.map((item) => (
            <React.Fragment>
              <p
                key={item.topic}
                className="flex items-center justify-between font-semibold text-dgLightPurple text-base my-3 py-1 border-slate-300 border-b"
              >
                <span>{item.topic}</span>
                {item.topic === "Introduction" ? (
                  <h5 className="text-sm flex gap-1 items-center">
                    4/{item.lessons.length}
                    <CheckBadgeIcon className="w-5 text-dgPurple" />
                  </h5>
                ) : (
                  <h5 className="text-sm flex gap-1 items-center">
                    0/{item.lessons.length}
                  </h5>
                )}
              </p>
              {item.lessons.map((lesson) => (
                <span
                  key={lesson.title}
                  title={lesson.title}
                  className={`pl-3 py-3 flex items-center select-none cursor-pointer text-dgLightPurple rounded mb-1 text-sm block w-full transition-all hover:bg-dgPurple`}
                >
                  <lesson.icon className="mr-2 w-4" />

                  {lesson.title.length > 30
                    ? lesson.title.substring(0, 30) + "..."
                    : lesson.title}
                </span>
              ))}
            </React.Fragment>
          ))}
        </div> */}
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
