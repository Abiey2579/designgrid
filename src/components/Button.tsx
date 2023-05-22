import * as React from "react";

const Button = (props: {
  name: string;
  className?: string;
  outlined?: boolean;
}) => {
  const { name, className, outlined } = props;

  return (
    <a
      href="/"
      className={`bg-dgPurple px-10 py-4 font-normal text-dgLightPurple rounded-full text-base ${className}`}
    >
      {name}
    </a>
  );
};

export default Button;
