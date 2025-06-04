import React from "react";

const Spinner = ({label}: {label?: string}) => {
  return (
    <div className="flex items-center justify-center gap-4 min-h-screen">
      <div className="flex items-center justify-center h-20">{label}</div>
      <div className="relative h-6">
        <div
          className="w-6 h-6 rounded-full absolute
                            border-2 border-solid border-link"
        ></div>

        <div
          className="w-6 h-6 rounded-full animate-spin absolute
                            border-2 border-solid border-background border-t-transparent"
        ></div>
      </div>
    </div>
  );
};

export default Spinner;
