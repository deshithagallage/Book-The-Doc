// src/components/AddDoctorModal/AddDoctorModal.jsx
import React, { useState } from "react";
import PrimaryButton from "../PrimaryButton/PrimaryButton.jsx";
import PrimaryInput from "../PrimaryInput/PrimaryInput.jsx";
import Modal from "./Model.jsx";
import axios from "axios";
import Cookies from "js-cookie";

const AddDoctorModal = ({ showModal, handleClose, refreshDoctors }) => {
  const [formData, setFormData] = useState({
    name: "",
    specialization: "",
    qualifications: "",
    gender: "",
    // SLMCNumber: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const config = {
        headers: {
          "x-auth-token": Cookies.get("token"),
        },
      };
      const res = await axios.post(
        `${import.meta.env.VITE_API_BASE_URL}/api/doctors/adddoc`,
        formData,
        config
      );
      console.log(res.data); // Handle success scenario
      refreshDoctors(); // Refresh the doctors list after adding a new doctor
      handleClose(); // Close the modal after submission
    } catch (err) {
      console.error("Error adding doctor:", err);
      // Handle error scenario
    }
  };

  const handleCancel = () => {
    setFormData({
      name: "",
      specialization: "",
      qualifications: "",
      gender: "",
      // SLMCNumber: "",
    });
    handleClose();
  };

  const specializations = [
    "cardiologist",
    "dermatologist",
    "neurologist",
    "pediatrician",
    "oncologist",
    "radiologist",
    "psychiatrist",
    "ophthalmology",
    "general",
  ];

  return (
    showModal && (
      <Modal
        bgColor="bg-gray-200"
        content={
          <div className="w-96 flex flex-col justify-center items-center">
            <p className="text-2xl text-black font-bold mb-5">
              Add a New Doctor
            </p>
            <form className="flex w-full flex-col items-center text-black">
              <div className="w-full p-3">
                <div className="w-full relative mb-3">
                  <PrimaryInput
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    label="Name"
                  />
                </div>
                <div className="relative mb-3">
                  <select
                    name="specialization"
                    value={formData.specialization}
                    onChange={handleChange}
                    className="bg-white w-full h-10 opacity-80 pl-2 drop-shadow-lg text-sm text-gray-700"
                  >
                    <option value="">Select</option>
                    {specializations.map((specialization) => (
                      <option key={specialization} value={specialization}>
                        {specialization.charAt(0).toUpperCase() +
                          specialization.slice(1)}
                      </option>
                    ))}
                  </select>
                  <label className="absolute -top-[10px] left-4 text-[12px] italic  text-gray-400">
                    Specialization
                  </label>
                </div>
                <div className="w-full relative mb-3">
                  <PrimaryInput
                    type="text"
                    name="qualifications"
                    value={formData.qualifications}
                    onChange={handleChange}
                    label="Qualifications"
                  />
                </div>
                <div className="w-full relative mb-3">
                  <select
                    name="gender"
                    value={formData.gender}
                    onChange={handleChange}
                    className="bg-white w-full h-10 opacity-80 pl-2 drop-shadow-lg text-sm text-gray-700"
                  >
                    <option value="">Select</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                    <option value="prefer_not_to_say">Prefer not to say</option>
                  </select>
                  <label className="absolute -top-[10px] left-4 text-[12px] italic  text-gray-400">
                    Gender
                  </label>
                </div>
                <div className="w-full relative">
                  <PrimaryInput
                    type="text"
                    name="SLMCNumber"
                    // value={formData.SLMCNumber}
                    // onChange={handleChange}
                    label="SLMC Number"
                  />
                </div>
              </div>
              <div className="flex p-4 space-x-4 justify-center">
                <div className="w-24 h-10">
                  <PrimaryButton text="Submit" onClick={handleSubmit} />
                </div>
                <div className="w-24 h-10">
                  <PrimaryButton text="Close" onClick={handleCancel} />
                </div>
              </div>
            </form>
          </div>
        }
        onClose={handleCancel}
      />
    )
  );
};

export default AddDoctorModal;
