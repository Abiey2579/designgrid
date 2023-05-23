import * as React from "react";
import AngleDoubleRight from "../assets/svgs/angle-dobule-right.svg";

const NextButton = (props: {
  name: string;
  className?: string;
  outlined?: boolean;
}) => {
  const { name, className, outlined } = props;

  return (
    <a
      href="/"
      className={`bg-dgPurple px-10 py-3 font-normal text-dgLightPurple block w-fit flex rounded-full text-base ${className}`}
    >
      {name}
      <img src={AngleDoubleRight} alt="AngleDoubleRight" className="ml-5" />
    </a>
  );
};

export default NextButton;
