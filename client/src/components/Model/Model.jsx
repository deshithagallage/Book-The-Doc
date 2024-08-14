//modal

import React from "react";
import { useNavigate } from "react-router-dom";
import PrimaryButton from "../PrimaryButton/PrimaryButton";

const Modal = ({ content, overlayClick, bgColor = "bg-black" }) => {
  const navigate = useNavigate();

  return (
    <div
      onClick={overlayClick}
      className={`fixed top-0 left-0 w-full h-full bg-black bg-opacity-70 backdrop-blur-sm flex justify-center items-center z-10`}
    >
      <div className={`${bgColor} p-5 text-center text-white rounded-lg`}>
        {content}
      </div>
    </div>
  );
};

export default Modal;
