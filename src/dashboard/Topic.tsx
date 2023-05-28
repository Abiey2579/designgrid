import * as React from "react";

interface TopicProps {
  percent: number;
  name: string;
  icon?: JSX.Element;
}

const Topic = (props: TopicProps) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex items-center justify-center bg-dgLightPurple border-4 border-dgPurple h-[146px] w-[146px] rounded-full mb-4">
        {props.icon !== undefined ? (
          props.icon
        ) : (
          <h1 className="text-6xl font-bold text-dgDarkPurple">
            {props.percent}
            <span className="text-xl">%</span>
          </h1>
        )}
      </div>
      <h3 className="text-xl font-medium text-dgDarkPurple">{props.name}</h3>
    </div>
  );
};

export default Topic;
