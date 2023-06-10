import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import OnboardProgressBar from "../components/OnboardindProgressBar";
import * as uriPaths from "../assets/data/uriPaths";
import { q3List } from "../assets/data/onboardingQuestions";
import ToastWarning from "../components/ToastWarning";
import { account } from "../assets/config/appwrite-auth";
import {
  checkIfUserExist,
  checkIfCompletedOnboarding,
} from "../assets/config/functions";
import Spinner from "../components/Spinner";

const OnboardingThree = () => {
  const [selectedID, setSelectedID] = useState<number>(0);
  const [emptyOptionErrorToast, setEmptyOptionErrorToast] =
    useState<boolean>(false);
  const [preventView, setPreventView] = useState<boolean>(true);

  const navigate = useNavigate();

  useEffect(() => {
    let q3 = sessionStorage.getItem("q3");
    if (q3 !== null && parseInt(q3) !== 0) {
      setSelectedID(parseInt(q3));
    }

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
    checkSession();
  }, []);

  const handleSelect = (id: number) => {
    setSelectedID(id);
    sessionStorage.setItem("q3", id.toString());
  };

  const handleNext = () => {
    return selectedID !== 0
      ? navigate(uriPaths.ONBOARDING_4)
      : setEmptyOptionErrorToast(true);
  };

  return (
    <React.Fragment>
      {emptyOptionErrorToast && (
        <ToastWarning
          title="Choose from available options"
          close={() => setEmptyOptionErrorToast(false)}
        />
      )}
      {preventView === false ? (
        <div className="lg:px-24 md:px-10 px-6 min-h-screen flex flex-col justify-center items-center">
          <h1 className="text-dgDarkPurple text-4xl font-bold mb-5">
            Question 3
          </h1>
          <p className="text-dgDarkPurple_Opacity text-base mb-5">
            What are your goals in learning frontend development?
          </p>
          {q3List.map((q) => (
            <p
              key={q.subId}
              onClick={() => handleSelect(q.subId)}
              className={`lg:min-w-[360px] md:min-w-[360px] min-w-full transition-all cursor-pointer select-none px-5 py-3 ${
                selectedID === q.subId
                  ? "bg-dgPurple text-dgLightPurple"
                  : "bg-dgLightPurple text-dgDarkPurple"
              } rounded font-medium mb-2`}
            >
              {q.potentialAnswer}
            </p>
          ))}
          <div className="mb-10">
            <Link to={uriPaths.ONBOARDING_2}>
              <button className="px-6 py-1 mr-5 text-center text-base bg-dgLightPurple text-dgDarkPurple font-medium rounded outline-0">
                Back
              </button>
            </Link>
            <button
              onClick={() => handleNext()}
              className="px-6 py-1 text-center text-base bg-dgPurple text-dgLightPurple font-medium rounded outline-0"
            >
              Next
            </button>
          </div>
          <OnboardProgressBar stage={3} selected={selectedID !== 0} />
        </div>
      ) : (
        <div className="w-screen h-screen flex justify-center items-center">
          <Spinner className="w-10 fill-dgPurple text-dgLightPurple" />
        </div>
      )}
    </React.Fragment>
  );
};

export default OnboardingThree;
