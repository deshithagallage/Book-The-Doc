import React from "react";
import { HiChevronDown, HiMiniPencilSquare } from "react-icons/hi2";

const DoctorCard = ({ doctor, handleEditDoctor, handleEditTimeSlots }) => {
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <div
        key={doctor._id}
        className="w-full bg-white p-4 rounded-lg shadow-md flex items-center -mb-1"
      >
        <img
          src={
            doctor.gender === "Male"
              ? "https://www.shutterstock.com/image-vector/male-doctor-smiling-selfconfidence-flat-260nw-2281709217.jpg"
              : "https://static.vecteezy.com/system/resources/previews/003/809/833/non_2x/woman-doctor-character-free-vector.jpg"
          }
          alt="Doctor Profile"
          className="w-32 h-32 mr-8 object-cover rounded-full"
        />
        <div className="flex flex-col justify-center items-start">
          <h2 className="font-bold">Name: {doctor.name}</h2>
          <p>Specialization: {doctor.specialization}</p>
          <p>Qualifications: {doctor.qualifications}</p>
          <p>SLMC Number: {doctor.SLMCNumber}</p>
        </div>
      </div>
      <div className="w-[99%] h-full flex gap-1">
        <div
          className="w-1/2 h-6 flex items-center justify-center bg-blue-200 mt-1 mb-3 rounded-b-md cursor-pointer transition-all hover:bg-blue-300 hover:h-8 group"
          onClick={handleEditDoctor}
        >
          <p className="text-gray-600 pr-3 tracking-wider group-hover:text-black">
            Edit Doctor Details
          </p>
          <HiMiniPencilSquare />
        </div>
        <div
          className="w-1/2 h-6 flex items-center justify-center bg-blue-200 mt-1 mb-3 rounded-b-md cursor-pointer transition-all hover:bg-blue-300 hover:h-8 group"
          onClick={handleEditTimeSlots}
        >
          <p className="text-gray-600 pr-3 tracking-wider group-hover:text-black">
            Time Slots
          </p>
          <HiChevronDown />
        </div>
      </div>
    </div>
  );
};

export default DoctorCard;
