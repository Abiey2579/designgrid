import * as React from "react";

const SmartScroll = () => {
  let tableOfContent = [
    { title: "👋 Hi there, Yahaya", active: true },
    { title: "Our Mission", active: false },
    { title: "Our Community", active: false },
  ];
  return (
    <div className="SmartScroll w-1/4 max-h-[89vh] overflow-y-scroll bg-dgLightPurple px-8 lg:block md:block hidden">
      <h1 className="text-xl font-bold text-dgDarkPurple mb-7">Smart Scroll</h1>
      <div>
        {tableOfContent.map((item) => (
          <a
            href="/"
            className={`rounded mb-5 block w-full  ${
              item.active
                ? "text-lg font-bold text-dgDarkPurple"
                : "text-sm text-dgDarkPurple"
            }`}
          >
            {item.title}
          </a>
        ))}
      </div>
    </div>
  );
};

export default SmartScroll;
