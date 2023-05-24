import * as React from "react";

const SmartScroll = () => {
  let tableOfContent = [
    { title: "👋 Hi there, Yahaya", active: true },
    { title: "Our Mission", active: false },
    { title: "Our Community", active: false },
  ];
  return (
    <div className="max-w-max min-w-[280px] h-screen">
      <h1 className="text-xl font-bold text-dgDarkPurple mt-20 mb-7">
        Smart Scroll
      </h1>
      <div>
        {tableOfContent.map((item) => (
          <a
            href="/"
            className={`rounded mb-5 block w-full  ${
              item.active
                ? "text-xl font-bold text-dgDarkPurple"
                : "text-based text-dgDarkPurple"
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
