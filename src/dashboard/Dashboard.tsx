import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Content from "./Content";
import * as uriPaths from "../assets/data/uriPaths";
import { account } from "../assets/config/appwrite-auth";
import { useNavigate } from "react-router-dom";
import Spinner from "../components/Spinner";
import {
  checkIfUserExist,
  checkIfCompletedOnboarding,
} from "../assets/config/functions";

const Dashboard = () => {
  const [preventView, setPreventView] = useState<boolean>(true);
  const navigate = useNavigate();
  type FetchedUser = {
    $createdAt: string;
    $id: string;
    $updatedAt: string;
    email: string;
    name: string;
  };
  const [userData, setUserData] = useState<FetchedUser>();

  useEffect(() => {
    const checkSession = async () => {
      try {
        await account.getSession("current");
        const user = await account.get();
        setUserData(user);
      } catch (err) {
        navigate(uriPaths.SIGN_UP);
      }
    };
    checkSession();

    const checkUser = async () => {
      const session = await account.getSession("current");
      const userExist = await checkIfUserExist(session.userId);
      const completedOnboarding = await checkIfCompletedOnboarding(
        session.userId
      );

      if (userExist) {
        if (completedOnboarding) {
          setPreventView(false);
        } else {
          navigate(uriPaths.ONBOARDING_1);
        }
      } else {
        navigate(uriPaths.SIGN_UP);
      }
    };

    checkUser();
  }, []);
  return (
    <React.Fragment>
      {preventView === false ? (
        <React.Fragment>
          <Navbar pageURI={uriPaths.DASHBOARD} userName={userData?.name} />
          <Content />
        </React.Fragment>
      ) : (
        <div className="w-screen h-screen flex justify-center items-center">
          <Spinner className="w-10 fill-dgLightPurple text-dgPurple" />
        </div>
      )}
    </React.Fragment>
  );
};

export default Dashboard;
