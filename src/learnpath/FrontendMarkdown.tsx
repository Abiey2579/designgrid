import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import "../assets/css/BlogPostContent.css";
import Spinner from "../components/Spinner";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dark } from "react-syntax-highlighter/dist/esm/styles/prism";

const FrontendMarkdown = (props: { lessonMarkdown: string }) => {
  return (
    <div className="lg:px-10 md:px-7 px-3 py-5 flex-1 bg-dgWhite ">
      {props.lessonMarkdown !== "" ? (
        <ReactMarkdown
          children={props.lessonMarkdown}
          className="Markdown"
          remarkPlugins={[remarkGfm]}
          rehypePlugins={[rehypeRaw]}
          components={{
            code({ node, inline, className, children, ...props }) {
              const match = /language-(\w+)/.exec(className || "");
              return !inline && match ? (
                <SyntaxHighlighter
                  {...props}
                  children={String(children).replace(/\n$/, "")}
                  style={dark}
                  language={match[1]}
                  PreTag="div"
                />
              ) : (
                <code {...props} className={className}>
                  {children}
                </code>
              );
            },
          }}
        />
      ) : (
        <div className="flex flex-grow justify-center items-center w-full h-full">
          <Spinner className="w-10 fill-dgPurple text-dgLightPurple" />
        </div>
      )}
    </div>
  );
};

export default FrontendMarkdown;
