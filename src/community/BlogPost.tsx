import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import ImageOne from "../assets/images/1.jpg";
import ImageTwo from "../assets/images/2.jpg";
import ImageThree from "../assets/images/3.jpg";
import { FolderIcon, CalendarIcon, ClockIcon } from "@heroicons/react/24/solid";
import UserProfile from "../assets/svgs/user-profile.svg";
import BlogCardOne from "./components/BlogCardOne";
import Footer from "../home/Footer";
import Copyright from "../home/Copyright";
import BlogMarkdown from "./components/BlogMarkdown";
import { BlogPostTagProps } from "../assets/Model/model";
import { useNavigate, useParams } from "react-router-dom";
import {
  checkIfUserExist,
  checkIfCompletedOnboarding,
} from "../assets/config/functions";
import { account } from "../assets/config/appwrite-auth";
import * as uriPaths from "../assets/data/uriPaths";
import Spinner from "../components/Spinner";
import { Blog } from "../assets/Model/model";

import * as CommonFunctions from "../assets/common/functions";

const BlogPostTag = (props: BlogPostTagProps) => {
  return (
    <div className="h-7 rounded-full bg-dgDarkPurple w-max flex gap-3 items-center px-4 cursor-pointer select-none">
      <props.icon className="text-dgLightPurple w-4" />
      <p className="text-dgLightPurple text-sm font-semibold">{props.name}</p>
    </div>
  );
};

const BlogPost = () => {
  const [preventView, setPreventView] = useState<boolean>(true);
  const [markdownStorage, setMarkdownStorage] = useState<string>("");
  const navigate = useNavigate();
  const [blogImage, setBlogImage] = useState<string>("");
  const [blogCategory, setBlogCategory] = useState<string>("");
  const [blogReadtime, setBlogReadtime] = useState<string>("");
  const [blogDate, setBlogDate] = useState<string>("");

  const { category, name } = useParams();

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
        const uri = `https://raw.githubusercontent.com/Abiey2579/designgriddata/master/community/blog/${category}/${name}.md`;
        const mdResponse = await fetch(uri);
        const markdownText = await mdResponse.text();

        const Image = sessionStorage.getItem("cblogImage") || "";
        const Category = sessionStorage.getItem("cblogCategory") || "";
        const Readtime = sessionStorage.getItem("cblogReadtime") || "";
        const Date = sessionStorage.getItem("cblogDate") || "";

        setBlogImage(Image);
        setBlogCategory(Category);
        setBlogReadtime(Readtime);
        setBlogDate(Date);

        setMarkdownStorage(markdownText);
        setPreventView(false);
      } catch (err) {
        setPreventView(false);
        console.log(err);
        // navigate(uriPaths.COMMUNITY_BLOGS);
      }
    };

    fetchBlogs();
  }, []);
  return (
    <React.Fragment>
      {preventView === false ? (
        <React.Fragment>
          <Navbar />
          <div className="lg:px-24 md:px-10 px-6 max-w-6xl mx-auto my-10">
            <div className="max-w-[960px] max-h-[532px] overflow-hidden rounded-lg mx-auto mb-5">
              <img src={blogImage} alt="" />
            </div>
            <div className="flex lg:flex-row md:flex-row flex-col flex-wrap lg:gap-3 md:gap-2 gap-1 mb-5">
              <BlogPostTag
                icon={FolderIcon}
                name={`${CommonFunctions.capitalizeWords(blogCategory)}`}
              />
              <BlogPostTag icon={CalendarIcon} name={`${blogDate}`} />
              <BlogPostTag icon={ClockIcon} name={`${blogReadtime}min read`} />
            </div>
            <div className="flex items-center cursor-pointer mb-5 w-max">
              <img
                src={UserProfile}
                alt="UserProfile"
                className="select-none"
              />
              <h3 className="text-xl font-bold ml-3 select-none text-dgDarkPurple">
                Yahya M. Bello
              </h3>
            </div>
            <hr className="bg-slate-300 block mb-5" />
            <BlogMarkdown md={markdownStorage} />
            <hr className="bg-slate-300 block mb-8" />
            <h2 className="mb-4 text-xl font-bold text-dgDarkPurple">
              Related Blogs
            </h2>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">
              <BlogCardOne
                category={"Interview Guide"}
                image={ImageOne}
                date={"April 12"}
                readtime={"2"}
                title={"Restaurant Landing Page"}
                partialDesc={
                  "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididus ..."
                }
              />
              <BlogCardOne
                category={"Best practice"}
                image={ImageTwo}
                date={"May 21"}
                readtime={"4"}
                title={"Separation of Concern"}
                partialDesc={
                  "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididus ..."
                }
              />
              <BlogCardOne
                category={"Problem solving"}
                image={ImageThree}
                date={"February 1"}
                readtime={"1"}
                title={"Separation of Concern"}
                partialDesc={
                  "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididus ..."
                }
              />
            </div>
          </div>
          <Footer />
          <Copyright />
        </React.Fragment>
      ) : (
        <div className="w-screen h-screen flex justify-center items-center">
          <Spinner className="w-10 fill-dgLightPurple text-dgPurple" />
        </div>
      )}
    </React.Fragment>
  );
};

export default BlogPost;
