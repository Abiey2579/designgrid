import React, { useEffect, useState } from "react";
import { changeActiveLesson } from "../assets/config/functions";
import { account } from "../assets/config/appwrite-auth";
import { Lesson, DirectionButtonProps } from "../assets/Model/model";
import Spinner from "../components/Spinner";
import ToastWarning from "../components/ToastWarning";

const DirectionButton: React.FC<DirectionButtonProps> = (props) => {
  const [previousLessonState, setPreviousLessonState] = useState<
    [string, Lesson] | undefined
  >();
  const [nextLessonState, setNextLessonState] = useState<
    [string, Lesson] | undefined
  >();
  const [spinNext, setSpinNext] = useState<boolean>(false);
  const [spinPrevious, setSpinPrevious] = useState<boolean>(false);
  const [nextErrorToast, setNextErrorToast] = useState<boolean>(false);
  const [previousErrorToast, setPreviousErrorToast] = useState<boolean>(false);

  const sortedTOC = Object.keys(props.tableOfContent).sort((a, b) => {
    const aNum = parseInt(a.split("-")[0]);
    const bNum = parseInt(b.split("-")[0]);
    return aNum - bNum;
  });

  const handleNextLesson = async () => {
    if (nextLessonState) {
      try {
        window.document.body.style.overflow = "hidden";
        setSpinNext(true);
        const session = await account.getSession("current");
        const topic = nextLessonState[0]
          .replace(/[\d-]+/g, "")
          .toLowerCase()
          .split(" ")
          .join("-");
        const lesson = nextLessonState[1].title
          .replace(/,|:/g, "")
          .toLowerCase()
          .split(" ")
          .join("-");
        const promise = await changeActiveLesson(session.userId, lesson);
        props.handleFetchLesson(topic, lesson);
        console.log(promise);
        setSpinNext(false);
        // setReload(!reload);
        window.location.reload();
      } catch (err) {
        console.log(err);
        setSpinNext(false);
      }
    } else {
      setNextErrorToast(true);
    }
  };

  const handlePreviousLesson = async () => {
    if (previousLessonState) {
      try {
        window.document.body.style.overflow = "hidden";
        setSpinPrevious(true);
        const session = await account.getSession("current");
        const topic = previousLessonState[0]
          .replace(/[\d-]+/g, "")
          .toLowerCase()
          .split(" ")
          .join("-");
        const lesson = previousLessonState[1].title
          .replace(/,|:/g, "")
          .toLowerCase()
          .split(" ")
          .join("-");
        const promise = await changeActiveLesson(session.userId, lesson);
        props.handleFetchLesson(topic, lesson);
        console.log(promise);
        setSpinPrevious(false);
        // setReload(!reload);
        window.location.reload();
      } catch (err) {
        console.log(err);
        setSpinPrevious(false);
      }
    } else {
      setPreviousErrorToast(true);
    }
  };

  useEffect(() => {
    const activeTopic = sortedTOC.find((topic) => {
      const section = props.tableOfContent[topic];
      return section.lessons.some((lesson: Lesson) => lesson.active === true);
    });

    if (activeTopic) {
      const previousTopicIndex = sortedTOC.indexOf(activeTopic) - 1;
      const previousTopic = sortedTOC[previousTopicIndex];
      const nextTopicIndex = sortedTOC.indexOf(activeTopic) + 1;
      const nextTopic = sortedTOC[nextTopicIndex];

      // NOW LET'S FIND ACTIVE LESSON
      const activeSection = props.tableOfContent[activeTopic];
      const activeLessonIndex = activeSection.lessons.findIndex(
        (lesson: Lesson) => lesson.active === true
      );

      let previousLesson = activeSection.lessons[activeLessonIndex - 1];
      let nextLesson = activeSection.lessons[activeLessonIndex + 1];

      // CHECK IF THERE IS NO PREVIOUS LESSON IN THE CURRENT TOPIC
      // TO GET THE LAST LESSON OF PREVIOUS TOPIC
      if (previousLesson === undefined) {
        if (previousTopic) {
          const previousSection = props.tableOfContent[previousTopic];
          previousLesson =
            previousSection.lessons[previousSection.lessons.length - 1];

          if (previousLesson) {
            setPreviousLessonState([previousTopic, previousLesson]);
          }
        }
      } else {
        setPreviousLessonState([activeTopic, previousLesson]);
      }
      // CHECK IF THERE IS NO NEXT LESSON IN THE CURRENT TOPIC
      // TO GET THE FIRST LESSON OF NEXT TOPIC
      if (nextLesson === undefined) {
        if (nextTopic) {
          const nextSection = props.tableOfContent[nextTopic];
          nextLesson = nextSection.lessons[0];
          if (nextLesson) {
            setNextLessonState([nextTopic, nextLesson]);
          }
        }
      } else {
        setNextLessonState([activeTopic, nextLesson]);
      }
    }
  }, []);

  return (
    <>
      {nextErrorToast && (
        <ToastWarning
          title="No Next Lesson"
          key={"Next Lesson Error"}
          close={() => setNextErrorToast(false)}
        />
      )}
      {previousErrorToast && (
        <ToastWarning
          title="No Previous Lesson"
          key={"Previous Lesson Error"}
          close={() => setPreviousErrorToast(false)}
        />
      )}
      <div className="w-full lg:px-10 md:px-7 px-5 pt-5 lg:pb-5 md:pb-5 pb-16 flex lg:flex-row md:flex-row sm:flex-row gap-5 flex-col justify-between items-center">
        <div
          onClick={handlePreviousLesson}
          className="min-w-[240px] cursor-pointer select-none h-16 bg-dgWhite border flex flex-col gap-1 border-slate-300 rounded px-4 py-2"
        >
          {spinPrevious === true ? (
            <div className="grid place-items-center w-full h-full">
              <Spinner className="w-10 fill-dgPurple text-dgLightPurple" />
            </div>
          ) : (
            <React.Fragment>
              <h3 className="text-base font-semibold text-dgDarkPurple">
                Previous
              </h3>
              <p className="text-sm font-normal text-dgDarkPurple_Opacity">
                {previousLessonState && previousLessonState[1].title}
              </p>
            </React.Fragment>
          )}
        </div>
        <div
          onClick={handleNextLesson}
          className="min-w-[240px] cursor-pointer select-none h-16 bg-dgPurple flex flex-col gap-1 rounded px-4 py-2"
        >
          {spinNext === true ? (
            <div className="grid place-items-center w-full h-full">
              <Spinner className="w-10 fill-dgLightPurple text-dgPurple" />
            </div>
          ) : (
            <React.Fragment>
              <h3 className="text-base font-semibold text-dgLightPurple">
                Next
              </h3>
              <p className="text-sm font-normal text-dgLightPurple">
                {nextLessonState && nextLessonState[1].title}
              </p>
            </React.Fragment>
          )}
        </div>
      </div>
    </>
  );
};

export default DirectionButton;
