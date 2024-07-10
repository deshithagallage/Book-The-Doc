import React from "react";

const PrimaryButton = ({
  text,
  onClick,
  removeTranslate = false,
  type,
  className = "",
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`w-full h-full bg-blue-500 text-white rounded-md drop-shadow-xl tracking-wider flex justify-center items-center hover:bg-blue-600 hover:shadow-lg transition-transform ${!removeTranslate ? "hover:-translate-y-1" : ""} duration-300 focus:outline-none  ${className}`}
    >
      {text}
    </button>
  );
};

export default PrimaryButton;
