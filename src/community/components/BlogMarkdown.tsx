import * as React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import "../../assets/css/BlogPostContent.css";

interface BlogMarkdownProps {
  md: string;
}

const BlogMarkdown = (props: BlogMarkdownProps) => {
  return (
    <div className="Markdown">
      <ReactMarkdown children={props.md} remarkPlugins={[remarkGfm]} />
    </div>
  );
};

export default BlogMarkdown;
