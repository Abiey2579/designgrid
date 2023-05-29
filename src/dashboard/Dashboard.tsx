import * as React from "react";
import Navbar from "./Navbar";
import Content from "./Content";
import * as uriPaths from "../assets/data/constants";

const Dashboard = () => {
  return (
    <div>
      <Navbar pageURI={uriPaths.DASHBOARD} />
      <Content />
    </div>
  );
};

export default Dashboard;
