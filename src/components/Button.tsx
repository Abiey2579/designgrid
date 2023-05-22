import * as React from "react";

const Button = (props: { name: string; className: string }) => {
  return (
    <a
      href="/"
      className={`bg-dgPurple px-10 py-4 font-normal text-dgLightPurple rounded-full text-base ${props.className}`}
    >
      {props.name}
    </a>
  );
};

export default Button;
