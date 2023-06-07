import React, { useState } from "react";
import {
  BookOpenIcon,
  CodeBracketIcon,
  XMarkIcon,
  PlayCircleIcon,
} from "@heroicons/react/24/outline";
import { CheckBadgeIcon } from "@heroicons/react/24/solid";
import { changeActiveLesson } from "../assets/config/functions";
import { account } from "../assets/config/appwrite-auth";
import Spinner from "../components/Spinner";
import ToastWarning from "../components/ToastWarning";
import { SidebarProps, IconComponentsProps } from "../assets/Model/model";

const Sidebar: React.FC<SidebarProps> = (props) => {
  const [spin, setSpin] = useState<string>("");
  const [unCompletedLessonError, setUnCompletedLessonError] =
    useState<boolean>(false);

  const getSectionProgress = (section: any) => {
    const completedLessons = section.lessons.filter(
      (lesson: any) => lesson.completed
    );
    const progress = `${completedLessons.length}/${section.lessons.length}`;
    return progress;
  };

  const sortedTOC = Object.keys(props.tableOfContent).sort((a, b) => {
    const aNum = parseInt(a.split("-")[0]);
    const bNum = parseInt(b.split("-")[0]);
    return aNum - bNum;
  });

  const IconComponent: IconComponentsProps = {
    CheckBadgeIcon,
    BookOpenIcon,
    PlayCircleIcon,
    CodeBracketIcon,
  };

  const handleLessonClick = async (lesson: any, key: string) => {
    if (lesson.completed) {
      try {
        setSpin(
          lesson.title.replace(/,|:/g, "").toLowerCase().split(" ").join("-")
        );
        const session = await account.getSession("current");
        await changeActiveLesson(
          session.userId,
          lesson.title.replace(/,|:/g, "").toLowerCase().split(" ").join("-")
        );

        props.handleFetchLesson(
          key
            .replace(/[\d-]+/g, "")
            .toLowerCase()
            .split(" ")
            .join("-"),
          lesson.title.replace(/,|:/g, "").toLowerCase().split(" ").join("-")
        );
        setSpin("");
        window.location.reload();
      } catch (err) {
        console.log(err);
        setSpin("");
      }
    } else {
      setUnCompletedLessonError(true);
    }
  };

  return (
    <>
      {unCompletedLessonError && (
        <ToastWarning
          title="Follow Lessons in Order"
          key={"Next Lesson Error"}
          close={() => setUnCompletedLessonError(false)}
        />
      )}
      <div
        className={`min-w-[20%] max-w-[340px] h-screen bg-dgDarkPurple pl-5 pr-5 ${
          props.sidebarControl
            ? "fixed z-30 h-screen"
            : "lg:block md:hidden hidden"
        }`}
      >
        <div className="flex items-center justify-between py-7 mb-3">
          <h1 className="text-dgLightPurple text-xl font-bold">
            Learning Path
          </h1>
          <button className="w-auto px-3 py-1 bg-dgPurple outline-0 text-dgLightPurple font-semibold rounded-full text-center text-sm">
            v1.0
          </button>
          {props.sidebarControl && (
            <XMarkIcon
              onClick={() => props.handleSidebarMenu()}
              className="w-6 rounded text-dgLightPurple cursor-pointer"
            />
          )}
        </div>

        <div className="SidebarMenu max-h-[85vh] overflow-y-scroll border-t border-slate-500">
          {sortedTOC.map((key) => {
            const section = props.tableOfContent[key];
            const progress = getSectionProgress(section);
            const isSectionCompleted =
              parseInt(progress) === section.lessons.length;

            return (
              <React.Fragment key={key}>
                <p className="flex items-center justify-between font-semibold text-dgLightPurple text-base my-3 py-1 border-slate-500 border-b">
                  <span>{key.replace(/[\d-]+/g, "")}</span>

                  <h5 className="text-sm flex gap-1 items-center">
                    {/* TOPIC PROGRESS TRACKER */}
                    {progress}
                    {/* TOPIC COMPLETION ICON */}
                    {isSectionCompleted && (
                      <CheckBadgeIcon className="w-5 text-dgPurple" />
                    )}
                  </h5>
                </p>

                {section.lessons.map((lesson: any) => {
                  const Icon = IconComponent[lesson.icon];

                  return (
                    <span
                      key={Math.random() * 9999999}
                      title={lesson.title}
                      onClick={() => handleLessonClick(lesson, key)}
                      className={`pl-3 py-3 flex items-center select-none cursor-pointer ${
                        lesson.active ? "bg-dgPurple" : "hover:bg-dgPurple"
                      } rounded mb-1 text-sm block w-full transition-all text-dgLightPurple`}
                    >
                      {spin ===
                      lesson.title
                        .replace(/,|:/g, "")
                        .toLowerCase()
                        .split(" ")
                        .join("-") ? (
                        <Spinner className="w-4 h-4 fill-dgWhite text-dgPurple" />
                      ) : (
                        <>
                          {Icon && (
                            <Icon
                              className={`mr-2 w-4 ${
                                lesson.completed && !lesson.active
                                  ? "text-dgPurple"
                                  : "text-dgLightPurple"
                              }`}
                            />
                          )}

                          {lesson.title.length > 30
                            ? lesson.title.substring(0, 30) + "..."
                            : lesson.title}
                        </>
                      )}
                    </span>
                  );
                })}
              </React.Fragment>
            );
          })}
        </div>
      </div>
      {props.sidebarControl && (
        <div
          className="fixed min-h-screen w-screen z-10"
          style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
          onClick={() => props.handleSidebarMenu()}
        ></div>
      )}
    </>
  );
};

export default Sidebar;
