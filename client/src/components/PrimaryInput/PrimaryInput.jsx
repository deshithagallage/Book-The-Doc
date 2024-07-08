import React from "react";
import "./PrimaryInput.css";

const PrimaryInput = ({ type, value, onChange, label }) => {
  return (
    <div>
      <input
        type={type}
        placeholder=" "
        className="floating-label-input w-full h-10 rounded-md bg-white opacity-80 pl-3 drop-shadow-lg"
        value={value}
        onChange={onChange}
      />
      <label className="text-sm italic floating-label text-gray-600">
        {label}
      </label>
    </div>
  );
};

export default PrimaryInput;
