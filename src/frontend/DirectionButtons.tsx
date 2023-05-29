import * as React from "react";

const DirectionButton = () => {
  return (
    <div className="w-full flex lg:flex-row md:flex-row sm:flex-row gap-5 flex-col justify-between items-center">
      <div className="min-w-[240px] cursor-pointer select-none h-16 bg-dgLightPurple border flex flex-col gap-1 border-slate-300 rounded px-4 py-2">
        <h3 className="text-base font-semibold text-dgDarkPurple">Previous</h3>
        <p className="text-sm font-normal text-dgDarkPurple_Opacity">
          Course Overview
        </p>
      </div>
      <div className="min-w-[240px] cursor-pointer select-none h-16 bg-dgPurple flex flex-col gap-1 rounded px-4 py-2">
        <h3 className="text-base font-semibold text-dgLightPurple">Next</h3>
        <p className="text-sm font-normal text-dgLightPurple">
          Intro into Web Development
        </p>
      </div>
    </div>
  );
};

export default DirectionButton;
