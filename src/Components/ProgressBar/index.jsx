import React from "react";

export default function ProgressBar({ progress }) {
  return (
    <div className="w-8/12 mx-auto my-5 bg-gray-300 h-3 rounded-md relative">
      <div
        className={`bg-cyan-600 h-full rounded-md absolute z-10 top-0 left-0 `}
        style={{ width: `${progress}%` }}
      >
        <div className="w-full relative h-full ">
          <span className="h-7 w-7 rounded-full bg-cyan-600   absolute -bottom-2 m-0 -right-2 z-20"></span>
        </div>
      </div>
    </div>
  );
}
