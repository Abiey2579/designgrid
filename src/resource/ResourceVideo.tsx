import * as React from "react";
import PlayButton from "../assets/svgs/PlayButton.svg";

const ResourceVideo = () => {
  return (
    <div className="mb-8">
      <div className="w-auto h-[364px] bg-dgPurple rounded flex justify-center items-center mb-3">
        <img src={PlayButton} alt="PlayButton" />
      </div>
      <p className="text-base text-dgDarkPurple pb-3">
        Source: <span className="font-bold text-dgPurple">FreeCodeCamp</span>
      </p>
      <hr />
    </div>
  );
};

export default ResourceVideo;
