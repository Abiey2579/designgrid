import * as React from "react";
import AngleDown_Version from "../assets/svgs/angle-down.svg";
import Search from "../assets/svgs/search.svg";

const Sidebar = () => {
  let tableOfContent = [
    { title: "Welcome", active: true },
    { title: "Get Started", active: false },
    { title: "Introduction", active: false },
    { title: "Design Principles", active: false },
    { title: "Design Psychology", active: false },
    { title: "Tools and Platform", active: false },
  ];
  return (
    <div className="max-w-[340px] border-r border-slate-300 h-screen pl-10 pr-5">
      <div className="flex items-center justify-between py-7 mb-10">
        <h1 className="text-dgDarkPurple text-xl font-bold">Documentation</h1>
        <button className="w-20 py-2 bg-dgPurple outline-0 text-dgLightPurple rounded-full flex items-center justify-center">
          v1.0
          <img
            src={AngleDown_Version}
            alt="AngleDown_Version"
            className="ml-3"
          />
        </button>
      </div>
      <div className="max-w-[280px] px-4 bg-dgWhite rounded flex mb-8">
        <img src={Search} alt="Search" className="mr-6" />
        <input
          type="text"
          className="py-4 border-0 outline-0 text-base"
          placeholder="Search ..."
        />
      </div>
      <div>
        {tableOfContent.map((item) => (
          <a
            href="/"
            className={`pl-4 py-4 rounded mb-1 block w-full hover:bg-dgPurple  ${
              item.active
                ? "bg-dgPurple text-dgLightPurple"
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
