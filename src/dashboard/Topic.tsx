import { TopicProps } from "../assets/Model/model";
import { CheckBadgeIcon } from "@heroicons/react/24/solid";

const Topic = (props: TopicProps) => {
  return (
    <div className="bg-dgWhite border border-slate-300 h-[146px] min-w-[240px] rounded p-5">
      {/* PROGRESS TRACKERS */}
      <div className="flex justify-between items-center">
        <div className="text-xs tracking-wider font-medium mb-1 text-dgDarkPurple flex gap-2">
          <h5>{props.numberOfLessons}</h5> <p>LESSONS</p>
        </div>
        {props.numberOfLessons === props.numberOfCompletedLessons ? (
          <CheckBadgeIcon className="w-6 text-dgPurple" />
        ) : (
          ""
        )}
      </div>
      <h3 className="text-xl font-bold text-dgDarkPurple_Opacity">
        {props.name.replace(/[\d-]+/g, "")}
      </h3>
      <div className="min-w-full mt-6">
        <div className="min-w-full block min-h-[8px] bg-dgLightPurple rounded mb-1">
          <div
            style={{ width: `${props.percent}%` }}
            className={`min-h-[8px] rounded bg-dgPurple`}
          ></div>
        </div>
        <div className="min-w-full block flex justify-between items-center">
          <div className="text-sm font-medium mb-1 text-dgDarkPurple_Opacity flex gap-1">
            <h5>{props.numberOfCompletedLessons}</h5> <p> of </p>
            <h5>{props.numberOfLessons}</h5>
          </div>
          <div className="text-sm font-medium mb-1 text-dgDarkPurple_Opacity flex">
            <h5>{props.percent.toFixed(0)}</h5>
            <p>%</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topic;
