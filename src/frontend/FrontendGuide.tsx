import * as React from "react";
import Sidebar from "./Sidebar";
import Topnav from "../components/Topnav";
import GuideDocs from "./GuideDocs";
import SmartScroll from "./SmartScroll";

const FrontendGuide = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 max-h-screen ">
        <Topnav />
        <div className="flex">
          <GuideDocs />
          <SmartScroll />
        </div>
      </div>
    </div>
  );
};

export default FrontendGuide;
