import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import OnboardProgressBar from "../components/OnboardindProgressBar";

const OnboardingOne = () => {
  const [selectedID, setSelectedID] = useState<number>(0);

  const qList = [
    {
      subId: 1,
      potentialAnswer: "Completely new to frontend development",
    },
    {
      subId: 2,
      potentialAnswer: "Beginner: I have some basic understanding",
    },
    {
      subId: 3,
      potentialAnswer: "Intermediate: I have build few web apps",
    },
    {
      subId: 4,
      potentialAnswer: "Advanced: I have extensive experience",
    },
  ];

  useEffect(() => {
    let q1 = sessionStorage.getItem("q1");
    if (q1 !== null && parseInt(q1) !== 0) {
      setSelectedID(parseInt(q1));
    }
  }, []);

  const handleSelect = (id: number) => {
    setSelectedID(id);
    sessionStorage.setItem("q1", id.toString());
  };
  return (
    <div className="lg:px-24 md:px-10 px-6 min-h-screen flex flex-col justify-center items-center">
      <h1 className="text-dgDarkPurple text-4xl font-bold mb-5">Question 1</h1>
      <p className="text-dgDarkPurple_Opacity text-base mb-5">
        How familiar are you with frontend development?
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
          <button className="px-6 py-1 text-center text-base bg-dgPurple text-dgLightPurple font-medium rounded border-0 outline-0">
            Next
          </button>
        </Link>
      </div>
      <OnboardProgressBar stage={1} selected={selectedID !== 0} />
    </div>
  );
};

export default OnboardingOne;
