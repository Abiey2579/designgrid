import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import OnboardProgressBar from "../../components/OnboardindProgressBar";
import { q1List, q2List, q3List } from "../../assets/data/onboardingQuestions";
import { account } from "../../assets/config/appwrite-auth";
import ToastSuccess from "../../components/ToastSuccess";
import ToastWarning from "../../components/ToastWarning";
import Spinner from "../../components/Spinner";
import { finishOnboarding } from "../../assets/config/functions";
import * as uriPaths from "../../assets/data/uriPaths";
import {
  checkIfUserExist,
  checkIfCompletedOnboarding,
} from "../../assets/config/functions";
import { AnswersProps } from "../../assets/Model/model";

const OnboardingFour = () => {
  const [selectedID, setSelectedID] = useState<number>(0);
  const [successToast, setSuccessToast] = useState<boolean>(false);
  const [errorToast, setErrorToast] = useState<boolean>(false);
  const [selectTagValue, setSelectTagValue] = useState<string>("");
  const [textareaValue, setTextareaValue] = useState<string>("");
  const [spin, setSpin] = useState<boolean>(false);
  const navigate = useNavigate();
  const [preventView, setPreventView] = useState<boolean>(true);
  const [answers, setAnswers] = useState<AnswersProps>();

  const handleSelectTag = (e: any) => {
    setSelectedID(100);
    setSelectTagValue(e);
  };
  const handleTextarea = (e: any) => {
    setSelectedID(100);
    setTextareaValue(e);
  };
  const checkSession = async () => {
    try {
      const session = await account.getSession("current");
      const userExist = await checkIfUserExist(session.userId);
      const completedOnboarding = await checkIfCompletedOnboarding(
        session.userId
      );

      if (userExist) {
        if (completedOnboarding) {
          navigate(uriPaths.DASHBOARD);
        } else {
          setPreventView(false);
        }
      } else {
        navigate(uriPaths.SIGN_UP);
      }
    } catch (err) {
      navigate(uriPaths.SIGN_UP);
    }
  };

  useEffect(() => {
    checkSession();
    const q1 = sessionStorage.getItem("q1") || "";
    const q2 = sessionStorage.getItem("q2") || "";
    const q3 = sessionStorage.getItem("q3") || "";

    const qListAnswers = {
      1: q1List.find((e) => e.subId === parseInt(q1))?.potentialAnswer || "",
      2: q2List.find((e) => e.subId === parseInt(q2))?.potentialAnswer || "",
      3: q3List.find((e) => e.subId === parseInt(q3))?.potentialAnswer || "",
    };

    if (qListAnswers[1] && qListAnswers[2] && qListAnswers[3]) {
      setAnswers({
        answer1: qListAnswers[1],
        answer2: qListAnswers[2],
        answer3: qListAnswers[3],
      });
    } else {
      setErrorToast(true);
    }
  }, []);

  const handleFinishOnboarding = async () => {
    setSpin(true);

    try {
      const session = await account.getSession("current");

      if (session) {
        if (answers) {
          const promise = await finishOnboarding({
            uid: session.userId,
            q1: answers.answer1,
            q2: answers.answer2,
            q3: answers.answer3,
            feedback_q1: selectTagValue,
            feedback_q2: textareaValue,
          });

          if (promise) {
            setSuccessToast(true);
            setSpin(false);
            navigate(uriPaths.UPDATE_PROFILE);
          } else {
            setErrorToast(true);
            setSpin(false);
          }
        }
      } else {
        setSpin(false);
        setErrorToast(true);
        navigate(uriPaths.SIGN_UP);
      }
    } catch (err) {
      setSpin(false);
      setErrorToast(true);
      navigate(uriPaths.SIGN_UP);
    }
  };

  return (
    <React.Fragment>
      {successToast && (
        <ToastSuccess
          title="Onboarding QA Completed"
          close={() => setSuccessToast(false)}
        />
      )}
      {errorToast && (
        <ToastWarning
          title="An unexpected error occured"
          close={() => setErrorToast(false)}
        />
      )}
      {preventView === false ? (
        <div className="lg:px-24 md:px-10 px-3 min-h-screen flex flex-col justify-center items-center">
          <h1 className="text-dgDarkPurple text-4xl font-bold mb-5">
            Feedback
          </h1>
          <p className="lg:min-w-[360px] md:min-w-[360px] min-w-full text-left text-dgDarkPurple_Opacity text-base mb-2">
            How did you here about us? Optional
          </p>
          <select
            onChange={(e) => handleSelectTag(e.target.value)}
            className="lg:min-w-[360px] md:min-w-[360px] min-w-full border border-slate-300 outline-0 cursor-pointer px-5 py-3 border rounded font-medium text-dgDarkPurple mb-4"
          >
            <option value="">Choose</option>
            <option value="Google Search">Google Search</option>
            <option value="LinkedIn">LinkedIn</option>
            <option value="Facebook">Facebook</option>
            <option value="Ads">Ads</option>
            <option value="Friends">Friends</option>
          </select>
          <p className="lg:min-w-[360px] md:min-w-[360px] min-w-full text-left text-dgDarkPurple_Opacity text-base mb-2">
            How did you here about us? Optional
          </p>
          <textarea
            placeholder="Write here..."
            onChange={(e) => handleTextarea(e.target.value)}
            className="lg:min-w-[360px] md:min-w-[360px] min-w-full border border-slate-300 outline-0 cursor-pointer px-5 py-3 border rounded font-medium text-dgDarkPurple mb-4"
          ></textarea>

          <div className="mb-10">
            <Link to={"/auth/onboarding/3"}>
              <button className="px-6 py-1 mr-5 text-center text-base bg-dgLightPurple text-dgDarkPurple font-medium rounded outline-0">
                Back
              </button>
            </Link>
            <button
              onClick={() => handleFinishOnboarding()}
              className="px-6 py-1 text-center text-base bg-dgPurple text-dgLightPurple font-medium rounded outline-0"
            >
              {spin ? (
                <Spinner className="w-4 h-4 fill-dgPurple text-dgWhite" />
              ) : (
                "Finish"
              )}
            </button>
          </div>
          <OnboardProgressBar stage={4} selected={selectedID !== 0} />
        </div>
      ) : (
        <div className="w-screen h-screen flex justify-center items-center">
          <Spinner className="w-10 fill-dgPurple text-dgLightPurple" />
        </div>
      )}
    </React.Fragment>
  );
};

export default OnboardingFour;
