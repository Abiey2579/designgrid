import React, { useState } from "react";
import { XMarkIcon, CheckIcon } from "@heroicons/react/24/solid";

const ToastSuccess = (props: { title: string; close: Function }) => {
  return (
    <div
      id="toast-success"
      className="fixed top-4 right-4 z-50 flex items-center w-full max-w-xs p-4 rounded-lg shadow text-gray-400 bg-dgDarkPurple"
      role="alert"
    >
      <div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 bg-green-100 rounded-lg">
        <CheckIcon className="w-5 h-5 text-green-500" />
      </div>
      <div className="ml-3 text-sm font-normal">{props.title}</div>
      <button
        type="button"
        className="ml-auto -mx-1.5 -my-1.5 bg-dgDarkPurple text-dgLightPurple rounded-lg p-1.5 inline-flex h-8 w-8"
        data-dismiss-target="#toast-success"
        aria-label="Close"
        onClick={() => props.close()}
      >
        <XMarkIcon className="w-5 h-5 text-dgLightPurple" />
      </button>
    </div>
  );
};

export default ToastSuccess;
