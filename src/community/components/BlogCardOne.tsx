import * as React from "react";
import { Link } from "react-router-dom";

interface BlogCardOneProps {
  image: string;
  category: string;
  date: string;
  readtime: string;
  title: string;
  partialDesc: string;
}

const BlogCardOne = (props: BlogCardOneProps) => {
  const uri = props.title.split(" ").join("-").toLocaleLowerCase();
  return (
    <div>
      <img src={props.image} alt="ImageOne" className="rounded-lg mb-1" />
      <div className="flex gap-2 items-center">
        <span className="text-sm font-semibold text-dgPurple">
          {props.category}
        </span>
        <span className="text-base font-bold text-dgDarkPurple select-none">
          |
        </span>
        <span className="text-sm font-normal">{props.date}</span>
        <span className="text-base font-bold text-dgDarkPurple select-none">
          |
        </span>
        <span className="text-sm font-normal">{props.readtime}min read</span>
      </div>
      <h1 className="text-xl font-semibold text-dgDarkPurple mb-1">
        <Link to={`/community/blog/${uri}`}>{props.title}</Link>
      </h1>
      <p className="text-sm text-dgDarkPurple_Opacity leading-5">
        {props.partialDesc}
      </p>
    </div>
  );
};

export default BlogCardOne;
