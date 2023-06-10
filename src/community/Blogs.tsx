import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import BlogCardOne from "./components/BlogCardOne";
import {
  account,
  database,
  DATABASE_ID,
  COMMUNITY_BLOGS_COLLECTION,
} from "../assets/config/appwrite-auth";
import * as uriPaths from "../assets/data/uriPaths";
import { useNavigate } from "react-router-dom";
import {
  checkIfUserExist,
  checkIfCompletedOnboarding,
} from "../assets/config/functions";
import Spinner from "../components/Spinner";
import { Blog } from "../assets/Model/model";
import {
  storage,
  PROFILE_PICTURE_BUCKET,
} from "../assets/config/appwrite-auth";
import { AVATAR } from "../assets/data/constants";

const Blogs = () => {
  const [preventView, setPreventView] = useState<boolean>(true);
  const [blogLists, setBlogLists] = useState<Blog[]>([]);
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

  const navigate = useNavigate();
  const checkSession = async () => {
    try {
      const session = await account.getSession("current");
      const userExist = await checkIfUserExist(session.userId);
      const completedOnboarding = await checkIfCompletedOnboarding(
        session.userId
      );

      if (userExist) {
        if (!completedOnboarding) {
          navigate(uriPaths.ONBOARDING_1);
        }
      } else {
        navigate(uriPaths.SIGN_UP);
      }
    } catch (err) {
      navigate(uriPaths.SIGN_UP);
    }
  };

  const fetchBlogs = async () => {
    try {
      const promise = await database.listDocuments(
        DATABASE_ID,
        COMMUNITY_BLOGS_COLLECTION
      );
      const blogDocuments: Blog[] = promise.documents as Blog[];
      setBlogLists(blogDocuments);
      const user = await account.get();
      setUserData(user);
      setPreventView(false);
    } catch (err) {
      setPreventView(false);
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
    } catch (err) {
      setProfileImageError(true);
    }
  };

  const fetchData = async () => {
    await checkSession();
    await fetchBlogs();
    await getProfilePicture();
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      {preventView === false ? (
        <>
          {userData && (
            <Navbar userData={userData} profilePicture={profileImage} />
          )}
          <div className="lg:px-24 md:px-10 px-6 max-w-6xl mx-auto my-16">
            {/* <h1 className="font-bold text-dgDarkPurple text-2xl mb-5">
              Filter
            </h1>
            <select className="border border-slate-400 rounded font-medium outline-0 px-3 py-[10px] min-w-[240px] text-dgDarkPurple mb-10">
              <option value="All">All</option>
              <option value="Interview Guide">Interview Guide</option>
              <option value="Coding Best Practice">Coding Best Practice</option>
              <option value="Problem Solving">Problem Solving</option>
              <option value="Self Development">Self Development</option>
              <option value="Resource Recommendation">
                Resource Recommendation
              </option>
              <option value="Others">Others</option>
            </select> */}
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
              {blogLists.map((blog) => (
                <BlogCardOne
                  category={blog.category}
                  image={blog.cover_image_url}
                  date={blog.$createdAt}
                  readtime={blog.readtime}
                  title={blog.name}
                  partialDesc={blog.partial_description}
                />
              ))}
            </div>
          </div>
        </>
      ) : (
        <div className="w-screen h-screen flex justify-center items-center">
          <Spinner className="w-10 fill-dgPurple text-dgLightPurple" />
        </div>
      )}
    </>
  );
};

export default Blogs;
