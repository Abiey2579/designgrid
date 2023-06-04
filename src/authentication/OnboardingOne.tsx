import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import OnboardProgressBar from "../components/OnboardindProgressBar";
import * as uriPaths from "../assets/data/uriPaths";
import { account } from "../assets/config/appwrite-auth";
import ToastSuccess from "../components/ToastSuccess";
import ToastWarning from "../components/ToastWarning";
import { q1List } from "../assets/data/onboardingQuestions";
import Spinner from "../components/Spinner";
import {
  createUserProfile,
  checkIfUserExist,
  checkIfCompletedOnboarding,
  enrollFrontend101,
} from "../assets/config/functions";

const OnboardingOne = () => {
  const [selectedID, setSelectedID] = useState<number>(0);
  const [successToast, setSuccessToast] = useState<boolean>(false);
  const [errorToast, setErrorToast] = useState<boolean>(false);
  const [emptyOptionErrorToast, setEmptyOptionErrorToast] =
    useState<boolean>(false);
  const [preventView, setPreventView] = useState<boolean>(true);

  const navigate = useNavigate();

  useEffect(() => {
    let q1 = sessionStorage.getItem("q1");
    if (q1 !== null && parseInt(q1) !== 0) {
      setSelectedID(parseInt(q1));
    }

    const checkSession = async () => {
      try {
        await account.getSession("current");
      } catch (err) {
        navigate(uriPaths.SIGN_UP);
      }
    };
    checkSession();

    const createAccount = async () => {
      const session = await account.getSession("current");
      const userExist = await checkIfUserExist(session.userId);
      const completedOnboarding = await checkIfCompletedOnboarding(
        session.userId
      );

      if (userExist) {
        if (completedOnboarding) {
          navigate(uriPaths.DASHBOARD);
          return;
        } else {
          setPreventView(false);
        }
      } else {
        setPreventView(false);
        const accountCreation = await createUserProfile({
          uid: session.userId,
        });

        const courseEnrollment = await enrollFrontend101({
          uid: session.userId,
        });

        if (accountCreation !== null && courseEnrollment !== null) {
          setSuccessToast(true);
        }
      }
    };

    createAccount();
  }, []);

  const handleSelect = (id: number) => {
    setSelectedID(id);
    sessionStorage.setItem("q1", id.toString());
  };

  const handleNext = () => {
    return selectedID !== 0
      ? navigate(uriPaths.ONBOARDING_2)
      : setEmptyOptionErrorToast(true);
  };
  return (
    <React.Fragment>
      {successToast && (
        <ToastSuccess
          title="Your accout is created"
          close={() => setSuccessToast(false)}
        />
      )}
      {errorToast && (
        <ToastWarning
          title="An unexpected error occured"
          close={() => setErrorToast(false)}
        />
      )}
      {emptyOptionErrorToast && (
        <ToastWarning
          title="Choose from available options"
          close={() => setEmptyOptionErrorToast(false)}
        />
      )}
      {preventView === false ? (
        <div className="lg:px-24 md:px-10 px-6 min-h-screen flex flex-col justify-center items-center">
          <h1 className="text-dgDarkPurple text-4xl font-bold mb-5">
            Question 1
          </h1>
          <p className="text-dgDarkPurple_Opacity text-base mb-5">
            How familiar are you with frontend development?
          </p>
          {q1List.map((q) => (
            <p
              key={q.subId}
              onClick={() => handleSelect(q.subId)}
              className={`lg:min-w-[360px] md:min-w-[360px] min-w-full transition-all cursor-pointer select-none px-5 py-3 ${
                selectedID === q.subId
                  ? "bg-dgPurple text-dgLightPurple"
                  : "bg-dgLightPurple text-dgDarkPurple border border-slate-300"
              } border-dgBorder border rounded font-medium mb-2`}
            >
              {q.potentialAnswer}
            </p>
          ))}

          <div className="mb-10">
            <button
              onClick={() => handleNext()}
              className="px-6 py-1 text-center text-base bg-dgPurple text-dgLightPurple font-medium rounded border-0 outline-0"
            >
              Next
            </button>
          </div>
          <OnboardProgressBar stage={1} selected={selectedID !== 0} />
        </div>
      ) : (
        <div className="w-screen h-screen flex justify-center items-center">
          <Spinner className="w-10 fill-dgLightPurple text-dgPurple" />
        </div>
      )}
    </React.Fragment>
  );
};

export default OnboardingOne;
