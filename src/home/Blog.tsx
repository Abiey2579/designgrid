import * as React from "react";
import BlogImage from "../assets/svgs/BlogImage.svg";
import Button from "../components/Button";

const Blog = () => {
  return (
    <div className="lg:px-24 md:px-10 px-6 min-h-screen  md:my-20 my-16 flex gap-20 lg:flex-row md:flex-col-reverse flex-col-reverse justify-around items-center">
      <img src={BlogImage} alt="BlogImage" />
      <div className="max-w-md">
        <h2 className="text-dgDarkPurple font-bold lg:text-5xl md:text-4xl text-3xl  mb-6">
          Impactful Blogs
        </h2>
        <p className="text-dgDarkPurple_Opacity text-base mb-6 leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
        <Button name="Explore Blog" className="block w-fit" />
      </div>
    </div>
  );
};

export default Blog;
