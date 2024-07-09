import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../../components/Navbar/Navbar";
import PrimaryButton from "../../../components/PrimaryButton/PrimaryButton";

function ChooseSignUp() {
  const [isMember, setIsMember] = useState(false);
  const [isDoctor, setIsDoctor] = useState(false);

  const setMember = function () {
    setIsMember(!isMember);
    setIsDoctor(false);
  };
  const setDoctor = function () {
    setIsMember(false);
    setIsDoctor(!isDoctor);
  };

  return (
    <div className="w-full h-screen flex flex-col items-center">
      <Navbar />
      <h1 className="text-3xl font-bold mt-16 mb-4">
        Choose Your Account Type
      </h1>
      <div className="flex justify-center items-center w-4/5 h-3/5 mt-4">
        <div
          className={`w-1/4 h-full mr-5 ${isMember ? "bg-blue-500" : "bg-blue-100 hover:bg-blue-500 transition-all duration-300 group"} border-2 border-blue-500 border-opacity-70 rounded-xl relative flex flex-col justify-between py-4 cursor-pointer`}
          onClick={setMember}
        >
          <p
            className={`text-center mt-6 ${isMember ? "text-blue-100" : "text-blue-500 group-hover:text-blue-100"} text-2xl font-bold`}
          >
            Sign up as <br />a Member <br />
            or a Patient
          </p>
          <img
            src="/src/assets/user-cover.png"
            alt="login-cover-image"
            className="w-full h-auto object-scale-down rounded-l-xl absolute bottom-0 px-4 pt-3"
          />
        </div>
        <div
          className={`w-1/4 h-full ml-5 ${isDoctor ? "bg-blue-500" : "bg-blue-100 hover:bg-blue-500 transition-all duration-300 group"} border-2 border-blue-500 border-opacity-70 rounded-xl relative flex flex-col justify-between py-4 cursor-pointer`}
          onClick={setDoctor}
        >
          <p
            className={`text-center mt-6 ${isDoctor ? "text-blue-100" : "text-blue-500 group-hover:text-blue-100"} text-2xl font-bold`}
          >
            Sign up as <br />a Doctor or <br />a Medical Clinic
          </p>
          <img
            src="/src/assets/clinic-cover.png"
            alt="login-cover-image"
            className="w-full h-auto object-scale-down rounded-r-xl absolute bottom-0 px-4 py-3"
          />
        </div>
      </div>
      <Link to={`${isMember ? "user" : isDoctor ? "center" : ""}`}>
        <div className="w-40 h-10 mt-5">
          <PrimaryButton text="CONTINUE" />
        </div>
      </Link>
    </div>
  );
}

export default ChooseSignUp;
