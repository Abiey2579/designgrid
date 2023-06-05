import React, { useState } from "react";
import Search from "../assets/svgs/search.svg";
import {
  BookOpenIcon,
  CodeBracketIcon,
  MagnifyingGlassIcon,
  XMarkIcon,
  PlayCircleIcon,
} from "@heroicons/react/24/outline";
import { CheckBadgeIcon } from "@heroicons/react/24/solid";

interface SidebarProps {
  sidebarControl: boolean;
  handleSidebarMenu: Function;
  tableOfContent: UserTOCProps;
  handleFetchLesson: Function;
}

interface UserTOCProps {
  [key: string]: {
    [key: string]: any[];
  };
}

// Define a type for the icon components
type IconComponents = {
  [key: string]: React.ComponentType<React.SVGProps<SVGSVGElement>>;
};

const Sidebar = (props: SidebarProps) => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  // const filteredHackathons = frontend101TOC.filter((item) =>
  //   item.topic.toLowerCase().includes(searchQuery.toLowerCase())
  // );
  const getSectionProgress = (section: any) => {
    const completedLessons = section.lessons.filter(
      (lesson: any) => lesson.completed
    );
    const progress = `${completedLessons.length}/${section.lessons.length}`;
    return progress;
  };

  // Sort the TOC keys based on the number prefix
  const sortedTOC = Object.keys(props.tableOfContent).sort((a, b) => {
    const aNum = parseInt(a.split("-")[0]);
    const bNum = parseInt(b.split("-")[0]);
    return aNum - bNum;
  });

  // Mapping of icon names to their corresponding components
  const IconComponent: IconComponents = {
    CheckBadgeIcon,
    BookOpenIcon,
    PlayCircleIcon,
    CodeBracketIcon,
    // add other icon components here
  };

  const d = props.sidebarControl
    ? "fixed z-30 h-screen"
    : "lg:block md:hidden hidden";
  return (
    <React.Fragment>
      <div
        className={`min-w-[20%] max-w-[340px] h-screen bg-dgDarkPurple pl-5 pr-5 ${d}`}
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
        <div className="SidebarMenu max-h-[75vh] overflow-y-scroll">
          {sortedTOC.map((key) => {
            const section = props.tableOfContent[key];
            return (
              <React.Fragment>
                <p
                  key={key}
                  className="flex items-center justify-between font-semibold text-dgLightPurple text-base my-3 py-1 border-slate-300 border-b"
                >
                  <span>{key.replace(/[\d-]+/g, "")}</span>

                  <h5 className="text-sm flex gap-1 items-center">
                    {/* TOPIC PROGRESS TRACKER */}
                    {getSectionProgress(section)}
                    {section.length}

                    {/* TOPIC COMPLETION ICON */}
                    {parseInt(getSectionProgress(section)) ===
                    section.lessons.length ? (
                      <CheckBadgeIcon className="w-5 text-dgPurple" />
                    ) : (
                      ""
                    )}
                  </h5>
                </p>

                {section.lessons.map((lesson: any) => {
                  const Icon = IconComponent[lesson.icon];

                  return (
                    <span
                      key={lesson.title}
                      title={lesson.title}
                      onClick={() =>
                        props.handleFetchLesson(
                          key
                            .replace(/[\d-]+/g, "")
                            .toLocaleLowerCase()
                            .split(" ")
                            .join("-"),
                          lesson.title
                            .replace(/,|:/g, "")
                            .toLocaleLowerCase()
                            .split(" ")
                            .join("-")
                        )
                      }
                      className={`pl-3 py-3 flex items-center select-none cursor-pointer text-dgLightPurple rounded mb-1 text-sm block w-full transition-all hover:bg-dgPurple`}
                    >
                      {Icon && <Icon className="mr-2 w-4" />}

                      {lesson.title.length > 30
                        ? lesson.title.substring(0, 30) + "..."
                        : lesson.title}
                    </span>
                  );
                })}
              </React.Fragment>
            );
          })}
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
