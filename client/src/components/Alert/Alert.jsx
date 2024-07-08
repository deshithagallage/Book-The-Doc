import React from "react";
import { FcHighPriority, FcOk, FcInfo } from "react-icons/fc";
import { HiExclamationTriangle } from "react-icons/hi2";

const Alert = ({ message, isVisible, type }) => {
  const alertCSS = {
    error: "border-red-500 bg-red-200 text-red-900",
    success: "border-green-500 bg-green-200 text-green-900",
    warning: "border-yellow-500 bg-yellow-200 text-yellow-900",
    info: "border-blue-500 bg-blue-200 text-blue-900",
  };
  if (
    type !== "warning" &&
    type !== "error" &&
    type !== "success" &&
    type !== "info"
  ) {
    type = "info";
    console.error("Invalid Alert type. Defaulting to 'info'.");
  }
  if (!isVisible) return null;
  return (
    <div
      className={`relative px-2 py-[2px] mt-2 ${alertCSS[type]} opacity-90 rounded-full drop-shadow-md`}
    >
      {type === "error" ? (
        <FcHighPriority className="absolute top-1" />
      ) : type === "success" ? (
        <FcOk className="absolute top-1" />
      ) : type === "warning" ? (
        <HiExclamationTriangle color="#ff9060" className="absolute top-1" />
      ) : (
        <FcInfo className="absolute top-1" />
      )}
      <div className="pl-5 pr-1 text-sm whitespace-nowrap" role="alert">
        {message}
      </div>
    </div>
  );
};

export default Alert;
