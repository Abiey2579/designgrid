import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import "../assets/css/BlogPostContent.css";
import Spinner from "../components/Spinner";

const FrontendMarkdown = (props: { lessonMarkdown: string }) => {
  return (
    <div className=" lg:px-10 md:px-7 px-5 py-5 flex-1 bg-dgLightPurple ">
      {props.lessonMarkdown !== "" ? (
        <ReactMarkdown
          children={props.lessonMarkdown}
          className="Markdown"
          remarkPlugins={[remarkGfm]}
        />
      ) : (
        <div className="flex flex-grow justify-center items-center w-full h-full">
          <Spinner className="w-10 fill-dgLightPurple text-dgPurple" />
        </div>
      )}
    </div>
  );
};

export default FrontendMarkdown;
