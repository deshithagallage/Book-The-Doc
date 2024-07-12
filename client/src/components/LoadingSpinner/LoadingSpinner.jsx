import React from "react";
import "./LoadingSpinner.css";

const LoadingSpinner = () => {
  return (
    <div className="flex items-center justify-center">
      <svg
        className="spinner"
        width="50px"
        height="50px"
        viewBox="0 0 66 66"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          className="path"
          fill="none"
          strokeWidth="8"
          strokeLinecap="round"
          cx="33"
          cy="33"
          r="25"
        ></circle>
      </svg>
    </div>
  );
};

export default LoadingSpinner;
