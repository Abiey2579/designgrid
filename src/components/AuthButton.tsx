import * as React from "react";

const AuthButton = (props: {
  name: string;
  className?: string;
  label: string;
  icon: any;
}) => {
  const { name, className, label, icon } = props;
  let background, color;

  if (name !== undefined && name === "Google") {
    background = "bg-dgWhite";
    color = "text-dgDarkPurple";
  } else if (name !== undefined && name === "Facebook") {
    background = "bg-dgFacebook";
    color = "text-dgLightPurple";
  } else if (name !== undefined && name === "Apple") {
    background = "bg-dgBlack";
    color = "text-dgLightPurple";
  } else {
    background = "bg-dgPurple";
    color = "text-dgLightPurple";
  }

  return (
    <button
      className={`${background} font-normal ${color} rounded-full text-base ${className} w-[300px] flex outline-0`}
    >
      <div className="w-20 text-center py-4">
        <img src={icon} alt={name} className="m-auto" />
      </div>
      <p className="w-fit py-4">{label}</p>
    </button>
  );
};

export default AuthButton;
