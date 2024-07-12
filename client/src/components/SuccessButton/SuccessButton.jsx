import React from "react";

const SuccessButton = ({
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
      className={`w-full h-full bg-green-600 text-white rounded-md drop-shadow-xl tracking-wider flex justify-center items-center hover:bg-green-700 hover:shadow-lg transition-transform ${!removeTranslate ? "hover:-translate-y-1" : ""} duration-300 focus:outline-none  ${className}`}
    >
      {text}
    </button>
  );
};

export default SuccessButton;
