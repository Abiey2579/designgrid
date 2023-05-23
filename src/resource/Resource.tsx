import * as React from "react";
import Sidebar from "./Sidebar";
import Topnav from "../components/Topnav";
import ResourceContent from "./ResourceContent";
import SmartScroll from "./SmartScroll";

const Resource = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="w-full">
        <Topnav />
        <div className="flex overflow-hidden">
          <ResourceContent />
          <SmartScroll />
        </div>
      </div>
    </div>
  );
};

export default Resource;
