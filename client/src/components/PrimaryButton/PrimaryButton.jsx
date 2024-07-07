import React from "react";

const PrimaryButton = ({ text, onClickFunc }) => {
  return (
    <button
      onClick={onClickFunc}
      className="w-full h-full mt-4 bg-blue-500 text-white rounded-md drop-shadow-xl flex justify-center items-center hover:-translate-y-1 hover:bg-blue-600 hover:shadow-lg transition-transform duration-300"
    >
      {text}
    </button>
  );
};

export default PrimaryButton;
