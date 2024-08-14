// EditDoctorModal

import React, { useState, useEffect } from "react";
import PrimaryButton from "../PrimaryButton/PrimaryButton.jsx";
import PrimaryInput from "../PrimaryInput/PrimaryInput.jsx";
import Modal from "./Model.jsx";
import axios from "axios";
import Cookies from "js-cookie";

const EditDoctorModal = ({
  showModal,
  handleClose,
  refreshDoctors,
  formData,
}) => {
  const [tempFormData, setTempFormData] = useState(formData);

  useEffect(() => {
    setTempFormData(formData);
  }, [formData]);

  const handleChange = (e) => {
    setTempFormData({ ...tempFormData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(tempFormData);
    // try {
    //   const config = {
    //     headers: {
    //       "x-auth-token": Cookies.get("token"),
    //     },
    //   };
    //   const res = await axios.post(
    //     "http://localhost:3000/api/doctors/adddoc",
    //     tempFormData,
    //     config
    //   );
    //   console.log(res.data); // Handle success scenario
    //   refreshDoctors(); // Refresh the doctors list after adding a new doctor
    //   handleClose(); // Close the modal after submission
    // } catch (err) {
    //   console.error("Error adding doctor:", err);
    //   // Handle error scenario
    // }
  };

  const handleCancel = () => {
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
        bgColor="bg-gray-300"
        content={
          <div className="w-96 flex flex-col justify-center items-center">
            <p className="text-2xl text-black font-bold mb-5">
              Edit Doctor Details
            </p>
            <form className="flex w-full flex-col items-center text-black">
              <div className="w-full p-3">
                <div className="w-full relative mb-3">
                  <PrimaryInput
                    type="text"
                    name="name"
                    value={tempFormData.name}
                    onChange={handleChange}
                    label="Name"
                  />
                </div>
                <div className="relative mb-3">
                  <select
                    name="specialization"
                    value={tempFormData.specialization}
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
                    value={tempFormData.qualifications}
                    onChange={handleChange}
                    label="Qualifications"
                  />
                </div>
                <div className="w-full relative mb-3">
                  <select
                    name="gender"
                    value={tempFormData.gender}
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
                    // value={tempFormData.SLMCNumber}
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

export default EditDoctorModal;
