import React, { useState } from "react";
import { XMarkIcon, BellAlertIcon } from "@heroicons/react/24/solid";

const ToastWarning = (props: { title: string; close: Function }) => {
  return (
    <div
      id="toast-warning"
      className={`fixed top-4 right-4 flex items-center w-full max-w-xs p-4 rounded-lg shadow text-gray-400 bg-dgDarkPurple`}
      role="alert"
    >
      <div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 bg-orange-100 rounded-lg ">
        <BellAlertIcon className="w-5 h-5 text-orange-500" />
      </div>
      <div className="ml-3 text-sm font-normal">{props.title}</div>
      <button
        type="button"
        className="ml-auto -mx-1.5 -my-1.5 bg-dgDarkPurple text-dgLightPurple rounded-lg p-1.5 inline-flex h-8 w-8"
        data-dismiss-target="#toast-warning"
        aria-label="Close"
        onClick={() => props.close()}
      >
        <XMarkIcon className="w-5 h-5 text-dgLightPurple" />
      </button>
    </div>
  );
};

export default ToastWarning;
