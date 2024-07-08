import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../../../components/Navbar/Navbar";

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
      <div className="flex justify-center items-center w-full h-3/5 mt-4">
        <div
          className="w-1/5 h-5/6 
        bg-blue-500 opacity-70 rounded-l-2xl p-4 
        flex items-center justify-center 
        transform transition-all duration-300 hover:w-1/4"
        >
          <ul className="space-y-3 text-white font-medium">
            <li>
              Easy access to a wide
              <br /> range of healthcare
              <br /> services.
            </li>
            <li>
              Secure and private
              <br /> management of health
              <br /> information.
            </li>
            <li>
              Convenient online
              <br /> consultations and
              <br /> follow-ups.
            </li>
            <li>
              Personalized healthcare
              <br /> recommendations and
              <br /> reminders.
            </li>
          </ul>
        </div>
        <div
          className={`w-1/4 h-full ${isMember ? "bg-blue-500" : "bg-blue-100 hover:bg-blue-500 transition-all duration-300 group"} border-2 border-r-0 border-blue-500 border-opacity-70 rounded-l-xl relative flex flex-col justify-between py-4 cursor-pointer`}
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
          className={`w-1/4 h-full ${isDoctor ? "bg-blue-500" : "bg-blue-100 hover:bg-blue-500 transition-all duration-300 group"} border-2 border-blue-500 border-opacity-70 rounded-r-xl relative flex flex-col justify-between py-4 cursor-pointer`}
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
        <div
          className="w-1/5 h-5/6 
        bg-blue-500 opacity-70 rounded-r-2xl p-4 
        flex items-center justify-center 
        transform transition-all duration-300 hover:w-1/4"
        >
          <ul className="space-y-3 text-white font-medium">
            <li>
              Increased visibility and
              <br /> reach to potential patients.
            </li>
            <li>
              Efficient management of
              <br /> patient appointments and
              <br /> records.
            </li>
            <li>
              Enhanced patient
              <br /> engagement through online
              <br /> consultations and
              <br />
              communication.
            </li>
            <li>
              Opportunities to grow your
              <br /> practice or medical center
              <br /> by leveraging online
              <br /> services.
            </li>
          </ul>
        </div>
      </div>
      <Link to={`${isMember ? "user" : isDoctor ? "center" : ""}`}>
        <button className="w-full h-10 mt-5 px-10 bg-blue-500 text-white rounded-md drop-shadow-xl tracking-widest flex justify-center items-center hover:-translate-y-1 hover:bg-blue-600 hover:shadow-lg transition-transform duration-300">
          CONTINUE
        </button>
      </Link>
    </div>
  );
}

export default ChooseSignUp;
