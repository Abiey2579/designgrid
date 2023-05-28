import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import OnboardProgressBar from "../components/OnboardindProgressBar";

const OnboardingThree = () => {
  const [selectedID, setSelectedID] = useState<number>(0);
  const qList = [
    {
      subId: 1,
      potentialAnswer: "Building personal websites or portfolios",
    },
    {
      subId: 2,
      potentialAnswer: "Pursuing a career as a frontend developer",
    },
    {
      subId: 3,
      potentialAnswer: "Enhancing existing programming skills",
    },
    {
      subId: 4,
      potentialAnswer: "Exploring creative opportunities in web devel...",
    },
  ];

  useEffect(() => {
    let q3 = sessionStorage.getItem("q3");
    if (q3 !== null && parseInt(q3) !== 0) {
      setSelectedID(parseInt(q3));
    }
  }, []);

  const handleSelect = (id: number) => {
    setSelectedID(id);
    sessionStorage.setItem("q3", id.toString());
  };

  return (
    <div className="lg:px-24 md:px-10 px-6 min-h-screen flex flex-col justify-center items-center">
      <h1 className="text-dgDarkPurple text-4xl font-bold mb-5">Question 3</h1>
      <p className="text-dgDarkPurple_Opacity text-base mb-5">
        What are your goals in learning frontend development?
      </p>
      {qList.map((q) => (
        <p
          key={q.subId}
          onClick={() => handleSelect(q.subId)}
          className={`min-w-[360px] transition-all cursor-pointer select-none px-5 py-3 ${
            selectedID === q.subId
              ? "bg-dgPurple text-dgLightPurple"
              : "bg-dgLightPurple text-dgDarkPurple"
          } border-dgBorder border rounded font-medium mb-2`}
        >
          {q.potentialAnswer}
        </p>
      ))}
      <div className="mb-10">
        <Link to={"/auth/onboarding/2"}>
          <button className="px-6 py-1 mr-5 text-center text-base bg-dgLightPurple text-dgDarkPurple font-medium rounded border-dgBorder border outline-0">
            Back
          </button>
        </Link>
        <Link to={"/auth/onboarding/4"}>
          <button className="px-6 py-1 text-center text-base bg-dgPurple text-dgLightPurple font-medium rounded border-0 outline-0">
            Next
          </button>
        </Link>
      </div>
      <OnboardProgressBar stage={3} selected={selectedID !== 0} />
    </div>
  );
};

export default OnboardingThree;
