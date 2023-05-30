import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import OnboardProgressBar from "../components/OnboardindProgressBar";
import { qListAnswers } from "../assets/data/onboardingQuestions";
import { account } from "../assets/config/appwrite-auth";
import ToastSuccess from "../components/ToastSuccess";
import ToastWarning from "../components/ToastWarning";
import Spinner from "../components/Spinner";
import { finishOnboarding } from "../assets/config/functions";
import * as uriPaths from "../assets/data/uriPaths";

const OnboardingFour = () => {
  const [selectedID, setSelectedID] = useState<number>(0);
  const [successToast, setSuccessToast] = useState<boolean>(false);
  const [errorToast, setErrorToast] = useState<boolean>(false);
  const [selectTagValue, setSelectTagValue] = useState<string>("");
  const [textareaValue, setTextareaValue] = useState<string>("");
  const [spin, setSpin] = useState<boolean>(false);
  const [userId, setUserId] = useState<string>("");
  const navigate = useNavigate();

  const handleSelectTag = (e: any) => {
    setSelectedID(100);
    setSelectTagValue(e);
  };
  const handleTextarea = (e: any) => {
    setSelectedID(100);
    setTextareaValue(e);
  };

  const handleFinishOnboarding = async () => {
    setSpin(true);
    account.getSession("current").then((e) => setUserId(e.userId));

    if (userId) {
      const promise = await finishOnboarding({
        uid: userId,
        q1: qListAnswers[1].potentialAnswer,
        q2: qListAnswers[2].potentialAnswer,
        q3: qListAnswers[3].potentialAnswer,
        feedback_q1: selectTagValue,
        feedback_q2: textareaValue,
      });

      if (promise !== null) {
        setSuccessToast(true);
        setSpin(false);
        navigate(uriPaths.UPDATE_PROFILE);
      } else {
        setErrorToast(true);
        setSpin(false);
      }
    } else {
      setSpin(false);
      setErrorToast(true);
      // navigate(uriPaths.SIGN_UP);
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
      <div className="lg:px-24 md:px-10 px-3 min-h-screen flex flex-col justify-center items-center">
        <h1 className="text-dgDarkPurple text-4xl font-bold mb-5">Feedback</h1>
        <p className="lg:min-w-[360px] md:min-w-[360px] min-w-full text-left text-dgDarkPurple_Opacity text-base mb-2">
          How did you here about us? Optional
        </p>
        <select
          onChange={(e) => handleSelectTag(e.target.value)}
          className="lg:min-w-[360px] md:min-w-[360px] min-w-full border border-slate-300 outline-0 cursor-pointer px-5 py-3 bg-dgLightPurple border-dgBorder border rounded font-medium text-dgDarkPurple mb-4"
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
          className="lg:min-w-[360px] md:min-w-[360px] min-w-full border border-slate-300 outline-0 cursor-pointer px-5 py-3 bg-dgLightPurple border-dgBorder border rounded font-medium text-dgDarkPurple mb-4"
        ></textarea>

        <div className="mb-10">
          <Link to={"/auth/onboarding/3"}>
            <button className="px-6 py-1 mr-5 text-center text-base bg-dgLightPurple text-dgDarkPurple font-medium rounded border-dgBorder border outline-0">
              Back
            </button>
          </Link>
          <button
            onClick={() => handleFinishOnboarding()}
            className="px-6 py-1 text-center text-base bg-dgPurple text-dgLightPurple font-medium rounded border-0 outline-0"
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
    </React.Fragment>
  );
};

export default OnboardingFour;
