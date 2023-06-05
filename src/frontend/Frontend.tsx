import React, { useState, useEffect } from "react";
import Sidebar from "./Sidebar";
import Topnav from "../components/Topnav";
import FrontendMarkdown from "./FrontendMarkdown";
import { account } from "../assets/config/appwrite-auth";
import { useNavigate } from "react-router-dom";
import * as uriPaths from "../assets/data/uriPaths";
import Spinner from "../components/Spinner";
import {
  checkIfUserExist,
  checkIfCompletedOnboarding,
  checkIfEnrolled_Frontend101,
  enrollFrontend101,
  getUserTOC,
} from "../assets/config/functions";
import { logout } from "../assets/config/functions";
import {
  database,
  storage,
  PROFILE_PICTURE_BUCKET,
  USER_PROFILE_COLLECTION,
  DATABASE_ID,
} from "../assets/config/appwrite-auth";
import ToastWarning from "../components/ToastWarning";
import { AVATAR } from "../assets/data/constants";
import { object } from "prop-types";

interface UserTOCProps {
  [key: string]: {
    [key: string]: any[];
  };
}

const Frontend = () => {
  const [showSidebar, setShowSidebar] = useState<boolean>(false);
  type FetchedUser = {
    $createdAt: string;
    $id: string;
    $updatedAt: string;
    email: string;
    name: string;
  };
  const [userData, setUserData] = useState<FetchedUser>();
  const navigate = useNavigate();
  const [preventView, setPreventView] = useState<boolean>(true);
  const [profileImage, setProfileImage] = useState<string>("");
  const [profileImageError, setProfileImageError] = useState<boolean>(false);
  const [userToc, setUserToc] = useState<UserTOCProps>();
  const [fetchedLesson, setFetchedLesson] = useState<string>("");

  const toggleSidebar = () => {
    return setShowSidebar(!showSidebar);
  };

  useEffect(() => {
    const checkSession = async () => {
      try {
        await account.getSession("current");
        const user = await account.get();
        setUserData(user);
        setPreventView(false);
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
      const enrolled = await checkIfEnrolled_Frontend101(session.userId);
      if (userExist) {
        if (enrolled === false) {
          try {
            await enrollFrontend101(session.userId);
          } catch (error) {
            const promise = logout();
            if (promise !== null) {
              navigate(uriPaths.LOG_IN);
            }
          }
        }
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
        console.log(err);
      }
    };
    getProfilePicture();
    const getToc = async () => {
      const session = await account.getSession("current");
      try {
        const userToc = await getUserTOC(session.userId);
        if (userToc === false) {
          logout();
          navigate(uriPaths.LOG_IN);
        } else {
          setUserToc(userToc);
        }
      } catch (error) {
        logout();
        navigate(uriPaths.LOG_IN);
      }
    };

    getToc();
  }, []);

  const fetchLesson = async (topic: string, lesson: string) => {
    console.log(`${topic}/${lesson}`);
    try {
      const uri = `https://raw.githubusercontent.com/Abiey2579/designgriddata/master/learnpath/frontend101/${topic}/${lesson}.md`;
      const mdResponse = await fetch(uri);
      const markdownText = await mdResponse.text();

      setFetchedLesson(markdownText);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <React.Fragment>
      {profileImageError && (
        <ToastWarning
          title="Error Fetching Profile Picture"
          close={() => setProfileImageError(false)}
        />
      )}
      {preventView === false ? (
        <div className="flex">
          {userToc !== undefined ? (
            <Sidebar
              sidebarControl={showSidebar}
              handleSidebarMenu={toggleSidebar}
              tableOfContent={userToc}
              handleFetchLesson={fetchLesson}
            />
          ) : (
            ""
          )}
          <div className="flex-1 max-h-screen ">
            <Topnav
              handleSidebarMenu={toggleSidebar}
              userData={userData}
              profilePicture={profileImage}
            />
            <div className="flex">
              <FrontendMarkdown lessonMarkdown={fetchedLesson} />
            </div>
          </div>
        </div>
      ) : (
        <div className="w-screen h-screen flex justify-center items-center">
          <Spinner className="w-10 fill-dgLightPurple text-dgPurple" />
        </div>
      )}
    </React.Fragment>
  );
};

export default Frontend;
