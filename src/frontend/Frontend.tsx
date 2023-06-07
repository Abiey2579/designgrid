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
  storage,
  PROFILE_PICTURE_BUCKET,
} from "../assets/config/appwrite-auth";
import ToastWarning from "../components/ToastWarning";
import { AVATAR } from "../assets/data/constants";
import DirectionButton from "./DirectionButtons";

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
  const [reload, setReload] = useState<boolean>(false);

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
      try {
        const session = await account.getSession("current");
        const userToc = await getUserTOC(session.userId);

        if (userToc === false) {
          logout();
          navigate(uriPaths.LOG_IN);
          return;
        }

        setUserToc(userToc);

        const fetchActiveLesson = async (topic: string, lesson: string) => {
          try {
            const activeTopic = topic
              .replace(/[\d-]+/g, "")
              .toLowerCase()
              .split(" ")
              .join("-");
            const activeLesson = lesson
              .replace(/,|:/g, "")
              .toLowerCase()
              .split(" ")
              .join("-");
            await fetchLesson(activeTopic, activeLesson);
          } catch (error) {
            console.log(error);
          }
        };

        const sortedTOC = Object.keys(userToc).sort((a, b) => {
          const aNum = parseInt(a.split("-")[0]);
          const bNum = parseInt(b.split("-")[0]);
          return aNum - bNum;
        });

        for (const topic of sortedTOC) {
          const section = userToc[topic];
          const lesson = section.lessons.find(
            (lesson: any) => lesson.active === true
          );
          if (lesson) {
            await fetchActiveLesson(topic, lesson.title);
          }
        }
      } catch (error) {
        console.log(error);
      }
    };

    getToc();
  }, []);

  const fetchLesson = async (topic: string, lesson: string) => {
    try {
      if (topic === "" && lesson === "") {
        topic = "welcome";
        lesson = "course-overview";
      }
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
            <div className="flex flex-col FrontendMarkdown max-h-[88.4vh] overflow-y-scroll">
              <FrontendMarkdown lessonMarkdown={fetchedLesson} />
              {userToc && (
                <DirectionButton
                  tableOfContent={userToc}
                  handleFetchLesson={fetchLesson}
                />
              )}
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
