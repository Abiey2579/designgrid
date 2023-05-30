import * as React from "react";
import Navbar from "./Navbar";
import BlogCardOne from "./components/BlogCardOne";
import ImageOne from "../assets/images/1.jpg";
import ImageTwo from "../assets/images/2.jpg";
import ImageThree from "../assets/images/3.jpg";

const Blogs = () => {
  return (
    <React.Fragment>
      <Navbar />
      <div className="lg:px-24 md:px-10 px-6 max-w-6xl mx-auto my-16">
        <h1 className="font-bold text-dgDarkPurple text-2xl mb-5">Filter</h1>
        <select className="border border-slate-400 rounded font-medium outline-0 px-3 py-[10px] min-w-[240px] bg-dgLightPurple text-dgDarkPurple mb-10">
          <option value="All">All</option>
          <option value="Best Practice">Best Practice</option>
          <option value="Interview Guide">Interview Guide</option>
          <option value="Self-Development">Self-Development</option>
          <option value="Technical Problem Solving">
            Technical Problem Solving
          </option>
        </select>
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
    </React.Fragment>
  );
};

export default Blogs;
