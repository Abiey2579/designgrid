import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Content from "./Content";
import * as uriPaths from "../assets/data/uriPaths";
import { account } from "../assets/config/appwrite-auth";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [userId, setUserId] = useState<string>("");
  const navigate = useNavigate();

  useEffect(() => {
    account.getSession("current").then((e) => setUserId(e.userId));
    if (!userId) {
      navigate(uriPaths.SIGN_UP);
    }
  }, []);
  return (
    <React.Fragment>
      {userId && (
        <React.Fragment>
          <Navbar pageURI={uriPaths.DASHBOARD} />
          <Content />
        </React.Fragment>
      )}
    </React.Fragment>
  );
};

export default Dashboard;
