import React from "react";

const PrimaryButton = ({
  text,
  onClick,
  color = "blue", // default color set to blue
  removeTranslate = false,
  type,
  className = "",
}) => {
  const colorClasses = {
    blue: "bg-blue-500 hover:bg-blue-600",
    green: "bg-green-600 hover:bg-green-700",
    red: "bg-red-500 hover:bg-red-600",
    yellow: "bg-yellow-500 hover:bg-yellow-600",
    // Add more colors as needed
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`w-full h-full text-white rounded-md drop-shadow-xl tracking-wider flex justify-center items-center ${colorClasses[color]} hover:shadow-lg transition-transform ${!removeTranslate ? "hover:-translate-y-1" : ""} duration-300 focus:outline-none  ${className}`}
    >
      {text}
    </button>
  );
};

export default PrimaryButton;
