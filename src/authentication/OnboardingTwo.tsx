import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import OnboardProgressBar from "../components/OnboardindProgressBar";

const OnboardingTwo = () => {
  const [selectedID, setSelectedID] = useState<number>(0);
  const qList = [
    {
      subId: 1,
      potentialAnswer: "HTML and CSS styling",
    },
    {
      subId: 2,
      potentialAnswer: "JavaScript and interactivity",
    },
    {
      subId: 3,
      potentialAnswer: "Responsive web design",
    },
    {
      subId: 4,
      potentialAnswer: "UI/UX design and user-centric interfaces",
    },
  ];

  useEffect(() => {
    let q2 = sessionStorage.getItem("q2");
    if (q2 !== null && parseInt(q2) !== 0) {
      setSelectedID(parseInt(q2));
    }
  }, []);

  const handleSelect = (id: number) => {
    setSelectedID(id);
    sessionStorage.setItem("q2", id.toString());
  };

  return (
    <div className="lg:px-24 md:px-10 px-6 min-h-screen flex flex-col justify-center items-center">
      <h1 className="text-dgDarkPurple text-4xl font-bold mb-5">Question 2</h1>
      <p className="text-dgDarkPurple_Opacity text-base mb-5">
        Which aspect of frontend development are you most interested in?
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
        <Link to={"/auth/onboarding/1"}>
          <button className="px-6 py-1 mr-5 text-center text-base bg-dgLightPurple text-dgDarkPurple font-medium rounded border-dgBorder border outline-0">
            Back
          </button>
        </Link>
        <Link to={"/auth/onboarding/3"}>
          <button className="px-6 py-1 text-center text-base bg-dgPurple text-dgLightPurple font-medium rounded border-0 outline-0">
            Next
          </button>
        </Link>
      </div>
      <OnboardProgressBar stage={2} selected={selectedID !== 0} />
    </div>
  );
};

export default OnboardingTwo;
