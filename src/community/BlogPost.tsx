import * as React from "react";
import Navbar from "./Navbar";
import ImageOne from "../assets/images/1.jpg";
import ImageTwo from "../assets/images/2.jpg";
import ImageThree from "../assets/images/3.jpg";
import { FolderIcon, CalendarIcon, ClockIcon } from "@heroicons/react/24/solid";
import UserProfile from "../assets/svgs/user-profile.svg";
import BlogCardOne from "./BlogCardOne";
import Footer from "../home/Footer";
import Copyright from "../home/Copyright";
import BlogPostContent from "./BlogPostContent";

interface BlogPostTagsProps {
  icon: any;
  name: string;
}

const BlogPostTags = (props: BlogPostTagsProps) => {
  return (
    <div className="h-7 rounded-full bg-dgDarkPurple w-max flex gap-3 items-center px-4 cursor-pointer select-none">
      <props.icon className="text-dgLightPurple w-4" />
      <p className="text-dgLightPurple text-sm font-semibold">{props.name}</p>
    </div>
  );
};

const BlogPost = () => {
  return (
    <React.Fragment>
      <Navbar />
      <div className="lg:px-24 md:px-10 px-6 max-w-6xl mx-auto my-10">
        <div className="max-w-[960px] max-h-[532px] overflow-hidden rounded-lg mx-auto mb-5">
          <img src={ImageOne} alt="Image Cover" className="" />
        </div>
        <div className="flex lg:flex-row md:flex-row flex-col flex-wrap lg:gap-3 md:gap-2 gap-1 mb-5">
          <BlogPostTags icon={FolderIcon} name="Coding Best practice" />
          <BlogPostTags icon={CalendarIcon} name="May 28, 2023" />
          <BlogPostTags icon={ClockIcon} name="8min read" />
        </div>
        <div className="flex items-center cursor-pointer mb-5">
          <img src={UserProfile} alt="UserProfile" className="select-none" />
          <h3 className="text-xl font-bold ml-3 select-none">Yahya M. Bello</h3>
        </div>
        <hr className="bg-slate-300 block mb-5" />
        <BlogPostContent />
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
  );
};

export default BlogPost;
