import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import OnboardProgressBar from "../components/OnboardindProgressBar";
import * as uriPaths from "../assets/data/uriPaths";
import { q2List } from "../assets/data/onboardingQuestions";
import ToastWarning from "../components/ToastWarning";
import { account } from "../assets/config/appwrite-auth";

const OnboardingTwo = () => {
  const [selectedID, setSelectedID] = useState<number>(0);
  const [emptyOptionErrorToast, setEmptyOptionErrorToast] =
    useState<boolean>(false);
  const [preventView, setPreventView] = useState<boolean>(true);

  const navigate = useNavigate();

  useEffect(() => {
    let q2 = sessionStorage.getItem("q2");
    if (q2 !== null && parseInt(q2) !== 0) {
      setSelectedID(parseInt(q2));
    }

    const checkSession = async () => {
      try {
        await account.getSession("current");
        setPreventView(false);
      } catch (err) {
        navigate(uriPaths.SIGN_UP);
      }
    };
    checkSession();
  }, []);

  const handleSelect = (id: number) => {
    setSelectedID(id);
    sessionStorage.setItem("q2", id.toString());
  };

  const handleNext = () => {
    return selectedID !== 0
      ? navigate(uriPaths.ONBOARDING_3)
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
            Question 2
          </h1>
          <p className="text-dgDarkPurple_Opacity text-base mb-5">
            Which aspect of frontend development are you most interested in?
          </p>
          {q2List.map((q) => (
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
            <Link to={uriPaths.ONBOARDING_1}>
              <button className="px-6 py-1 mr-5 text-center text-base bg-dgLightPurple text-dgDarkPurple font-medium rounded border-dgBorder border outline-0">
                Back
              </button>
            </Link>
            <button
              onClick={() => handleNext()}
              className="px-6 py-1 text-center text-base bg-dgPurple text-dgLightPurple font-medium rounded border-0 outline-0"
            >
              Next
            </button>
          </div>
          <OnboardProgressBar stage={2} selected={selectedID !== 0} />
        </div>
      ) : (
        ""
      )}
    </React.Fragment>
  );
};

export default OnboardingTwo;
