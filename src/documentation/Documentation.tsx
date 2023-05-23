import * as React from "react";
import Sidebar from "./Sidebar";
import Topnav from "./Topnav";

const Documentation = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="w-full">
        <Topnav />
      </div>
    </div>
  );
};

export default Documentation;
