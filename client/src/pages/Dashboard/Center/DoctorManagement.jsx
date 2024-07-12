/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CenterSidebar from "../Sidebar/CenterSidebar.jsx";
import Navbar from "../../../components/Navbar/Navbar.jsx";
import axios from "axios";
import Cookies from "js-cookie";
import PrimaryButton from "../../../components/PrimaryButton/PrimaryButton.jsx";
import AddDoctorModal from "../../../components/Model/AddDoctorModal.jsx";

const DoctorManagement = () => {
  const navigate = useNavigate();
  const [doctors, setDoctors] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const handleEditDoctor = (doctorId) => {
    navigate(`/dashboard/center/doctors/edit/${doctorId}`);
  };

  const handleAddDoctor = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const refreshDoctors = () => {
    axios
      .get("http://localhost:3000/api/centers/doctors", {
        headers: {
          "x-auth-token": Cookies.get("token"),
        },
      })
      .then((res) => {
        setDoctors(res.data);
      })
      .catch((err) => {
        if (err.response && err.response.status === 401) {
          Cookies.remove("token");
          Cookies.remove("userRole");
          Cookies.remove("userId");
          console.log(err.response.status);
          window.location.reload();
        } else {
          console.log(err);
        }
      });
  };

  useEffect(() => {
    refreshDoctors();
  }, []);

  return (
    <div>
      <Navbar />
      <div className="flex w-full h-full">
        <div className="w-[17%] h-full">
          <CenterSidebar />
        </div>
        <div className="w-[83%] h-full my-24 flex flex-col justify-center items-center">
          <h1 className="text-4xl font-bold mb-8">Doctor Management</h1>
          <div className="w-full px-16 flex flex-col justify-center items-start">
            <h2 className="text-2xl font-bold text-start">
              Register a New Doctor
            </h2>
            <div className="w-full h-1 bg-gray-200 mt-1 mb-3"></div>
            <div className="h-12 mb-5">
              <PrimaryButton
                text="Register New Doctor"
                onClick={handleAddDoctor}
                className="p-6"
                removeTranslate={true}
              />
            </div>

            <h2 className="text-2xl font-bold text-start">
              Registered Doctors
            </h2>
            <div className="w-full h-1 bg-gray-200 mt-1 mb-3"></div>
            <div className="w-full grid grid-cols-2 gap-6">
              {doctors.length > 0 ? (
                doctors.map((doctor) => (
                  <div
                    key={doctor._id}
                    className="bg-white p-4 rounded-lg shadow-md flex items-center gap-4"
                    onClick={() => handleEditDoctor(doctor._id)}
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
                ))
              ) : (
                <h1 className="text-lg font-bold">No Doctors Found</h1>
              )}
            </div>
          </div>
        </div>
      </div>
      <AddDoctorModal
        showModal={showModal}
        handleClose={handleCloseModal}
        refreshDoctors={refreshDoctors}
      />
    </div>
  );
};

export default DoctorManagement;
