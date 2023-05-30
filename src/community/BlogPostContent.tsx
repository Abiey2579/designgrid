import * as React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { MD } from "../assets/data/test";
import "../assets/css/BlogPostContent.module.css";

const BlogPostContent = () => {
  return (
    <React.Fragment>
      <ReactMarkdown children={MD} remarkPlugins={[remarkGfm]} />
    </React.Fragment>
  );
};

export default BlogPostContent;
