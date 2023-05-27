import React, { useState } from "react";
import Sidebar from "./Sidebar";
import Topnav from "../components/Topnav";
import GuideDocs from "./GuideDocs";
import SmartScroll from "./SmartScroll";

const FrontendGuide = () => {
  const [showSidebar, setShowSidebar] = useState<boolean>(false);

  const toggleSidebar = () => {
    return setShowSidebar(!showSidebar);
  };

  return (
    <div className="flex">
      <Sidebar sidebarControl={showSidebar} handleSidebarMenu={toggleSidebar} />
      <div className="flex-1 max-h-screen ">
        <Topnav handleSidebarMenu={toggleSidebar} />
        <div className="flex">
          <GuideDocs />
          <SmartScroll />
        </div>
      </div>
    </div>
  );
};

export default FrontendGuide;
