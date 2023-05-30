import * as React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { MD } from "../../assets/data/Markdown";
import "../assets/css/BlogPostContent.css";

const BlogPostContent = () => {
  return (
    <div className="Markdown">
      <ReactMarkdown children={MD} remarkPlugins={[remarkGfm]} />
    </div>
  );
};

export default BlogPostContent;
