import React from "react";
import DirectionButton from "./DirectionButtons";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { MD } from "../assets/data/Markdown";
import "../assets/css/BlogPostContent.css";

const FrontendMarkdown = () => {
  return (
    <div className="FrontendMarkdown lg:px-10 md:px-7 px-5 py-5 flex-1 bg-dgLightPurple max-h-[88.4vh] overflow-y-scroll">
      <ReactMarkdown
        children={MD}
        className="Markdown"
        remarkPlugins={[remarkGfm]}
      />
      <DirectionButton />
    </div>
  );
};

export default FrontendMarkdown;
