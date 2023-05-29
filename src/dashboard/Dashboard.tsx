import * as React from "react";
import Navbar from "./Navbar";
import Content from "./Content";

const Dashboard = () => {
  return (
    <div>
      <Navbar pageURI={"/dashboard"} />
      <Content />
    </div>
  );
};

export default Dashboard;
