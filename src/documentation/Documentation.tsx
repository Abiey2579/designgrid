import * as React from "react";
import Sidebar from "./Sidebar";
import Topnav from "./Topnav";
import DocsContent from "./DocsContent";
import SmartScroll from "./SmartScroll";

const Documentation = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="w-full">
        <Topnav />
        <div className="flex">
          <DocsContent />
          <SmartScroll />
        </div>
      </div>
    </div>
  );
};

export default Documentation;
