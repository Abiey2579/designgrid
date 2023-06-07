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
} from "../assets/config/functions";
import {
  storage,
  PROFILE_PICTURE_BUCKET,
} from "../assets/config/appwrite-auth";
import ToastWarning from "../components/ToastWarning";
import { AVATAR } from "../assets/data/constants";
import { UserTOCProps } from "../assets/Model/model";

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
  const [profileImage, setProfileImage] = useState<string>("");
  const [profileImageError, setProfileImageError] = useState<boolean>(false);
  const [userToc, setUserToc] = useState<UserTOCProps>();

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

    const getProfilePicture = async () => {
      try {
        const user = await account.get();
        const files = await storage.listFiles(PROFILE_PICTURE_BUCKET);
        const existingFile = files.files.find(
          (file) => file.name === user?.$id
        );

        if (existingFile) {
          const previewLink = await storage.getFilePreview(
            PROFILE_PICTURE_BUCKET,
            existingFile.$id
          );
          setProfileImage(previewLink.href);
        } else {
          setProfileImage(AVATAR);
        }
      } catch (err) {
        setProfileImageError(true);
      }
    };

    getProfilePicture();

    const getToc = async () => {
      try {
        const session = await account.getSession("current");
        const userToc = await getUserTOC(session.userId);

        if (userToc === false) {
          logout();
          navigate(uriPaths.LOG_IN);
          return;
        }

        setUserToc(userToc);
      } catch (error) {
        console.log(error);
      }
    };

    getToc();
  });
  return (
    <React.Fragment>
      {profileImageError && (
        <ToastWarning
          title="Error Fetching Profile Picture"
          close={() => setProfileImageError(false)}
        />
      )}
      {preventView === false ? (
        <React.Fragment>
          <Navbar
            pageURI={uriPaths.DASHBOARD}
            userName={userData?.name}
            profilePicture={profileImage}
          />
          {userToc && (
            <Content profilePicture={profileImage} tableOfContent={userToc} />
          )}
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
