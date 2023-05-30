import React, { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import Topnav from "../components/Topnav";
import GuideDocs from "./GuideDocs";
import SmartScroll from "./SmartScroll";
import { account } from "../assets/config/appwrite-auth";
import { useNavigate } from "react-router-dom";
import * as uriPaths from "../assets/data/uriPaths";

const FrontendGuide = () => {
  const [showSidebar, setShowSidebar] = useState<boolean>(false);
  const [userId, setUserId] = useState<string>("");
  const navigate = useNavigate();

  const toggleSidebar = () => {
    return setShowSidebar(!showSidebar);
  };

  useEffect(() => {
    account.getSession("current").then((e) => setUserId(e.userId));
    if (!userId) {
      navigate(uriPaths.SIGN_UP);
    }
  }, []);

  return (
    <React.Fragment>
      {userId && (
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
