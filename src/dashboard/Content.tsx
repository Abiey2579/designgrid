import * as React from "react";
import Topic from "./Topic";
import { Link } from "react-router-dom";
import * as uriPaths from "../assets/data/uriPaths";
import { UserTOCProps } from "../assets/Model/model";

const Content = (props: {
  profilePicture: string;
  tableOfContent: UserTOCProps;
}) => {
  const calculateProgress = (lessons: any[]) => {
    const totalLessons = lessons.length;
    const completedLessons = lessons.filter(
      (lesson) => lesson.completed === true
    ).length;
    const progressPercentage = (completedLessons / totalLessons) * 100;
    return progressPercentage; // Round the percentage to 2 decimal places
  };

  const sortedTOC = Object.keys(props.tableOfContent).sort((a, b) => {
    const aNum = parseInt(a.split("-")[0]);
    const bNum = parseInt(b.split("-")[0]);
    return aNum - bNum;
  });

  return (
    <div className="lg:px-24 md:px-10 px-6 max-w-4xl mx-auto my-16">
      <h1 className="font-bold text-dgDarkPurple text-2xl mb-5">Dashboard</h1>
      <div className="flex items-center gap-5 mb-14">
        <div className=" border-2 border-dgPurple border-spacing-1 p-1 rounded-full">
          <div
            className="profile-picture w-[132px] h-[132px] bg-center bg-no-repeat bg-cover rounded-full"
            style={{
              backgroundImage: `url(${props.profilePicture})`,
            }}
          ></div>
        </div>
        <Link to={uriPaths.UPDATE_PROFILE}>
          <span className="bg-dgPurple rounded-full border-0 outline-0 px-4 py-2 text-base font-medium text-dgLightPurple">
            Update profile
          </span>
        </Link>
      </div>
      <h1 className="font-semibold text-dgDarkPurple text-xl mb-5">
        Frontend Fundamentals
      </h1>
      <div className="grid lg:grid-cols-4 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-5">
        {sortedTOC.map((topic) => {
          const section = props.tableOfContent[topic];
          const progress = calculateProgress(section.lessons);
          return <Topic name={topic} percent={progress} />;
        })}
      </div>
    </div>
  );
};

export default Content;
