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
  getUserTOC,
  logout,
  getUserProfile,
} from "../assets/config/functions";
import {
  storage,
  PROFILE_PICTURE_BUCKET,
} from "../assets/config/appwrite-auth";
import ToastWarning from "../components/ToastWarning";
import { AVATAR } from "../assets/data/constants";
import {
  UserTOCProps,
  FetchedUser,
  UserProfileData,
} from "../assets/Model/model";

const Dashboard = () => {
  const [preventView, setPreventView] = useState<boolean>(false);
  const navigate = useNavigate();
  const [userData, setUserData] = useState<FetchedUser>();
  const [profileImage, setProfileImage] = useState<string>("");
  const [errorToast, setErrorToast] = useState<string>("");
  const [userToc, setUserToc] = useState<UserTOCProps>();
  const [userProfile, setUserProfile] = useState<UserProfileData>();

  const checkSession = async () => {
    try {
      await account.getSession("current");
      const user = await account.get();
      setUserData(user);
    } catch (err) {
      navigate(uriPaths.SIGN_UP);
    }
  };

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

  const getProfilePicture = async () => {
    try {
      const user = await account.get();
      const files = await storage.listFiles(PROFILE_PICTURE_BUCKET);
      const existingFile = files.files.find((file) => file.name === user?.$id);

      if (existingFile) {
        const previewLink = await storage.getFilePreview(
          PROFILE_PICTURE_BUCKET,
          existingFile.$id
        );
        setProfileImage(previewLink.href);
      } else {
        setProfileImage(AVATAR);
      }
    } catch (error) {
      setErrorToast((error as Error).message);
    }
  };

  const getToc = async () => {
    try {
      const session = await account.getSession("current");
      const userToc = await getUserTOC(session.userId);

      if (userToc === false) {
        logout();
        navigate(uriPaths.SIGN_IN);
        return;
      }

      setUserToc(userToc);
    } catch (error) {
      setErrorToast((error as Error).message);
    }
  };

  const fetchUserProfile = async () => {
    try {
      const session = await account.getSession("current");
      const promise = await getUserProfile(session.userId);

      setUserProfile(promise);
    } catch (error) {
      setErrorToast((error as Error).message);
    }
  };

  const fetchData = async () => {
    await checkSession();
    await checkUser();
    await getProfilePicture();
    await getToc();
    await fetchUserProfile();
  };

  useEffect(() => {
    window.document.body.style.overflowY = "scroll";
    fetchData();
  }, []);

  return (
    <React.Fragment>
      {errorToast && (
        <ToastWarning title={errorToast} close={() => setErrorToast("")} />
      )}
      {preventView === false ? (
        <React.Fragment>
          {userData && (
            <Navbar
              pageURI={uriPaths.DASHBOARD}
              userData={userData}
              profilePicture={profileImage}
            />
          )}
          {userToc && userData && userProfile ? (
            <Content
              userData={userData}
              userProfile={userProfile}
              profilePicture={profileImage}
              tableOfContent={userToc}
            />
          ) : (
            <div className="w-screen h-[85vh] flex justify-center items-center">
              <Spinner className="w-10 fill-dgPurple text-dgLightPurple" />
            </div>
          )}
        </React.Fragment>
      ) : (
        <div className="w-screen h-screen flex justify-center items-center">
          <Spinner className="w-10 fill-dgPurple text-dgLightPurple" />
        </div>
      )}
    </React.Fragment>
  );
};

export default Dashboard;
