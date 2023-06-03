import * as React from "react";
import { Link } from "react-router-dom";
import * as CommonFunctions from "../../assets/common/functions";

interface BlogCardOneProps {
  image: string;
  category: string;
  date: string;
  readtime: string;
  title: string;
  partialDesc: string;
}

const BlogCardOne = (props: BlogCardOneProps) => {
  const name = props.title.split(" ").join("-").toLocaleLowerCase();
  const category = props.category.split(" ").join("-").toLocaleLowerCase();

  const handleSelectedBlog = () => {
    sessionStorage.setItem("cblogImage", props.image);
    sessionStorage.setItem("cblogCategory", props.category);
    sessionStorage.setItem("cblogReadtime", props.readtime);
    sessionStorage.setItem("cblogDate", CommonFunctions.formatDate(props.date));
  };

  return (
    <div>
      <img src={props.image} alt="ImageOne" className="rounded-lg mb-1" />
      <div className="flex gap-2 items-center">
        <span className="text-sm font-semibold text-dgPurple">
          {CommonFunctions.capitalizeWords(props.category)}
        </span>
        <span className="text-base font-bold text-dgDarkPurple select-none">
          |
        </span>
        <span className="text-sm font-normal">
          {CommonFunctions.formatDate(props.date)}
        </span>
        <span className="text-base font-bold text-dgDarkPurple select-none">
          |
        </span>
        <span className="text-sm font-normal">{props.readtime}min read</span>
      </div>
      <h1 className="text-xl font-semibold text-dgDarkPurple mb-1">
        <Link
          to={`/community/blog/${category}/${name}`}
          onClick={() => handleSelectedBlog()}
        >
          {CommonFunctions.capitalizeWords(props.title)}
        </Link>
      </h1>
      <p className="text-sm text-dgDarkPurple_Opacity leading-5">
        {props.partialDesc.length > 90
          ? props.partialDesc.substring(0, 90) + "..."
          : props.partialDesc}
      </p>
    </div>
  );
};

export default BlogCardOne;
