import React, { useState } from "react";
// import AngleDown_Version from "../assets/svgs/angle-down.svg";
import Search from "../assets/svgs/search.svg";
import { url } from "inspector";

const Sidebar = () => {
  let tableOfContent = [
    { title: "Welcome", active: true, subMenuTitle: "" },
    { title: "Introduction", active: false, subMenuTitle: "introduction" },
    { title: "Prerequisities", active: false, subMenuTitle: "" },
    { title: "Git Basics", active: false, subMenuTitle: "" },
    { title: "HTML Fundamentals", active: false, subMenuTitle: "" },
    { title: "CSS Fundamentals", active: false, subMenuTitle: "" },
    { title: "Flexbox", active: false, subMenuTitle: "" },
    { title: "JavaScript Basics", active: false, subMenuTitle: "" },
    { title: "Conclusion", active: false, subMenuTitle: "" },
    { title: "Flexbox", active: false, subMenuTitle: "" },
    { title: "JavaScript Basics", active: false, subMenuTitle: "" },
    { title: "Conclusion", active: false, subMenuTitle: "" },
    { title: "Flexbox", active: false, subMenuTitle: "" },
    { title: "JavaScript Basics", active: false, subMenuTitle: "" },
    { title: "Conclusion", active: false, subMenuTitle: "" },
    { title: "Flexbox", active: false, subMenuTitle: "" },
    { title: "JavaScript Basics", active: false, subMenuTitle: "" },
    { title: "Conclusion", active: false, subMenuTitle: "" },
    { title: "Flexbox", active: false, subMenuTitle: "" },
    { title: "JavaScript Basics", active: false, subMenuTitle: "" },
    { title: "Conclusion", active: false, subMenuTitle: "" },
  ];
  const [searchQuery, setSearchQuery] = useState<string>("");
  const filteredHackathons = tableOfContent.filter((item) =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase())
  );
  return (
    <div className="w-1/5 max-h-screen border-r bg-dgLightPurple border-slate-300 pl-5 pr-5">
      <div className="flex items-center justify-between py-7 mb-3">
        <h1 className="text-dgDarkPurple text-xl font-bold">Frontend Guide</h1>
        <button className="w-14 py-1 bg-dgPurple outline-0 text-dgLightPurple font-semibold rounded-full text-center text-sm">
          v1.0
        </button>
      </div>
      <div className="bg-dgWhite rounded flex mb-3 px-3 ">
        <img src={Search} alt="Search" className="w-4" />
        <input
          type="text"
          className="pl-3 py-3 border-0 outline-0 text-base w-5/6"
          placeholder="Search ..."
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      <div className="SidebarMenu max-h-[75vh] overflow-y-scroll">
        {filteredHackathons.map((item) => (
          <a
            href="/"
            className={`pl-3 py-3 rounded mb-1 text-sm block w-full hover:font-semibold hover:bg-dgPurple  ${
              item.active
                ? "bg-dgPurple text-dgLightPurple font-semibold"
                : "bg-dgLightPurple text-dgDarkPurple hover:text-dgLightPurple"
            }`}
          >
            {item.title}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
