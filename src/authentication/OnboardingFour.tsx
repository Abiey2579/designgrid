import React, { useState } from "react";
import { Link } from "react-router-dom";
import OnboardProgressBar from "../components/OnboardindProgressBar";

const OnboardingFour = () => {
  const [selectedID, setSelectedID] = useState<number>(0);

  const handleSelectTag = (e: any) => {
    setSelectedID(100);
  };
  const handleTextarea = (e: any) => {
    setSelectedID(100);
  };
  return (
    <div className="lg:px-24 md:px-10 px-6 min-h-screen flex flex-col justify-center items-center">
      <h1 className="text-dgDarkPurple text-4xl font-bold mb-5">Feedback</h1>
      <p className="min-w-[360px] text-left text-dgDarkPurple_Opacity text-base mb-2">
        How did you here about us? Optional
      </p>
      <select
        onChange={(e) => handleSelectTag(e)}
        className="min-w-[360px] transition-all outline-0 cursor-pointer px-5 py-3 bg-dgLightPurple border-dgBorder border rounded font-medium text-dgDarkPurple mb-4"
      >
        <option value="">Choose</option>
        <option value="Google Search">Google Search</option>
        <option value="LinkedIn">LinkedIn</option>
        <option value="Facebook">Facebook</option>
        <option value="Ads">Ads</option>
        <option value="Friends">Friends</option>
      </select>
      <p className="min-w-[360px] text-left text-dgDarkPurple_Opacity text-base mb-2">
        How did you here about us? Optional
      </p>
      <textarea
        placeholder="Write here..."
        onChange={(e) => handleTextarea(e)}
        className="min-w-[360px] transition-all outline-0 cursor-pointer px-5 py-3 bg-dgLightPurple border-dgBorder border rounded font-medium text-dgDarkPurple mb-4"
      ></textarea>

      <div className="mb-10">
        <Link to={"/auth/onboarding/3"}>
          <button className="px-6 py-1 mr-5 text-center text-base bg-dgLightPurple text-dgDarkPurple font-medium rounded border-dgBorder border outline-0">
            Back
          </button>
        </Link>
        <Link to={"/frontend"}>
          <button className="px-6 py-1 text-center text-base bg-dgPurple text-dgLightPurple font-medium rounded border-0 outline-0">
            Finish
          </button>
        </Link>
      </div>
      <OnboardProgressBar stage={4} selected={selectedID !== 0} />
    </div>
  );
};

export default OnboardingFour;
