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

  const navigate = useNavigate();

  useEffect(() => {
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
    checkSession();

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

    fetchBlogs();
  }, []);
  return (
    <React.Fragment>
      {preventView === false ? (
        <React.Fragment>
          <Navbar userName={userData?.name} />
          <div className="lg:px-24 md:px-10 px-6 max-w-6xl mx-auto my-16">
            <h1 className="font-bold text-dgDarkPurple text-2xl mb-5">
              Filter
            </h1>
            <select className="border border-slate-400 rounded font-medium outline-0 px-3 py-[10px] min-w-[240px] bg-dgLightPurple text-dgDarkPurple mb-10">
              <option value="All">All</option>
              <option value="Interview Guide">Interview Guide</option>
              <option value="Coding Best Practice">Coding Best Practice</option>
              <option value="Problem Solving">Problem Solving</option>
              <option value="Self Development">Self Development</option>
              <option value="Resource Recommendation">
                Resource Recommendation
              </option>
              <option value="Others">Others</option>
            </select>
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
        </React.Fragment>
      ) : (
        <div className="w-screen h-screen flex justify-center items-center">
          <Spinner className="w-10 fill-dgLightPurple text-dgPurple" />
        </div>
      )}
    </React.Fragment>
  );
};

export default Blogs;
