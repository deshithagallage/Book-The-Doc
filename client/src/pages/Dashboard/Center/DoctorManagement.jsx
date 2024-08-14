import React, { useEffect, useState } from "react";
import CenterSidebar from "../Sidebar/CenterSidebar.jsx";
import Navbar from "../../../components/Navbar/Navbar.jsx";
import axios from "axios";
import Cookies from "js-cookie";
import PrimaryButton from "../../../components/PrimaryButton/PrimaryButton.jsx";
import AddDoctorModal from "../../../components/Model/AddDoctorModal.jsx";
import EditDoctorModal from "../../../components/Model/EditDoctorModal.jsx";
import DoctorCard from "./DoctorCard.jsx";

const DoctorManagement = () => {
  const [doctors, setDoctors] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [editingDoctor, setEditingDoctor] = useState({});

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
                onClick={() => setShowModal(true)}
                className="p-6"
                removeTranslate={true}
              />
            </div>

            <h2 className="text-2xl font-bold text-start">
              Registered Doctors
            </h2>
            <div className="w-full h-1 bg-gray-200 mt-1 mb-3"></div>
            <div className="w-full grid grid-cols-2 gap-x-6 gap-y-2">
              {doctors.length > 0 ? (
                doctors.map((doctor) => (
                  <DoctorCard
                    key={doctor._id}
                    doctor={doctor}
                    handleEditDoctor={() => {
                      setEditingDoctor(doctor);
                      setShowEditModal(true);
                    }}
                    handleEditTimeSlots={() => console.log("Edit Time Slots")}
                  />
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
        handleClose={() => setShowModal(false)}
        refreshDoctors={refreshDoctors}
      />
      <EditDoctorModal
        formData={editingDoctor}
        showModal={showEditModal}
        handleClose={() => {
          setEditingDoctor({});
          setShowEditModal(false);
        }}
        refreshDoctors={refreshDoctors}
      />
    </div>
  );
};

export default DoctorManagement;
