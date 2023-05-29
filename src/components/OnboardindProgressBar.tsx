import * as React from "react";

interface progressBarProps {
  stage: number;
  selected: boolean;
}

const OnboardProgressBar = (props: progressBarProps) => {
  let perc;

  switch (props.stage) {
    case 1:
      perc = props.selected ? 25 * props.stage : 0;
      break;
    case 2:
      perc = props.selected ? 25 * props.stage : 25;
      break;
    case 3:
      perc = props.selected ? 25 * props.stage : 50;
      break;
    case 4:
      perc = props.selected ? 25 * props.stage : 75;
      break;

    default:
      perc = 0;
      break;
  }

  return (
    <div>
      <div className="min-w-[360px] min-h-[8px] border border-dgBorder rounded mb-1">
        <div
          style={{ width: perc + "%" }}
          className={`min-h-[8px] ${
            perc === 0 ? "border-0" : "border"
          } border-dgPurple rounded bg-dgPurple`}
        ></div>
      </div>
      <div className="min-w-[360px] flex justify-between items-center">
        <p className="text-sm font-semibold text-dgDarkPurple_Opacity">
          STEP {props.stage} OUT OF 4
        </p>
        <p className="text-sm font-semibold text-dgDarkPurple_Opacity">
          {perc}%
        </p>
      </div>
    </div>
  );
};

export default OnboardProgressBar;
