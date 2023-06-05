import React from "react";
import DirectionButton from "./DirectionButtons";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import "../assets/css/BlogPostContent.css";
import Spinner from "../components/Spinner";

const FrontendMarkdown = (props: { lessonMarkdown: string }) => {
  return (
    <div className="FrontendMarkdown lg:px-10 md:px-7 px-5 py-5 flex-1 bg-dgLightPurple max-h-[88.4vh] overflow-y-scroll">
      {props.lessonMarkdown !== "" ? (
        <ReactMarkdown
          children={props.lessonMarkdown}
          className="Markdown"
          remarkPlugins={[remarkGfm]}
        />
      ) : (
        <div className="flex-1 justify-center items-center w-full h-full">
          <Spinner className="w-10 fill-dgLightPurple text-dgPurple" />
        </div>
      )}
      <DirectionButton />
    </div>
  );
};

export default FrontendMarkdown;
