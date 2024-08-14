import React from "react";
import "./PrimaryInput.css";

const PrimaryInput = ({
  type,
  name,
  value,
  onChange,
  label,
  bgColor = "bg-white",
}) => {
  return (
    <div>
      <input
        type={type}
        name={name}
        placeholder=" "
        className={`floating-label-input w-full h-10 rounded-md ${bgColor} opacity-80 px-3 drop-shadow-lg`}
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
