import React, { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import Topnav from "../components/Topnav";
import GuideDocs from "./GuideDocs";
import SmartScroll from "./SmartScroll";
import { account } from "../assets/config/appwrite-auth";

const FrontendGuide = () => {
  const [showSidebar, setShowSidebar] = useState<boolean>(false);
  const [showContent, setShowContent] = useState<boolean>(false);

  const toggleSidebar = () => {
    return setShowSidebar(!showSidebar);
  };

  useEffect(() => {
    const handleGetSession = async () => {
      await account
        .getSession("current")
        .then((e) => {
          setShowContent(true);
        })
        .catch((err) => {
          setShowContent(false);
          window.location.replace("http://localhost:3000/login");
        });
    };

    handleGetSession();
  }, [showSidebar]);
  return (
    <React.Fragment>
      {showContent && (
        <div className="flex">
          <Sidebar
            sidebarControl={showSidebar}
            handleSidebarMenu={toggleSidebar}
          />
          <div className="flex-1 max-h-screen ">
            <Topnav handleSidebarMenu={toggleSidebar} />
            <div className="flex">
              <GuideDocs />
              <SmartScroll />
            </div>
          </div>
        </div>
      )}
    </React.Fragment>
  );
};

export default FrontendGuide;
