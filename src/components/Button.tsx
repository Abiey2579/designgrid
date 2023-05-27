import * as React from "react";
import { Link } from "react-router-dom";

const Button = (props: { name: string; className?: string; href: string }) => {
  const { name, className, href } = props;

  return (
    <Link to={href}>
      <span
        className={`bg-dgPurple inline-block px-10 py-4 font-normal text-dgLightPurple rounded-full text-base ${className}`}
      >
        {name}
      </span>
    </Link>
  );
};

export default Button;
