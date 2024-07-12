/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import UserSidebar from "../Sidebar/UserSidebar.jsx";
import axios from "axios";
import Cookies from "js-cookie";
import Navbar from "../../../components/Navbar/Navbar.jsx";
import PrimaryInput from "../../../components/PrimaryInput/PrimaryInput.jsx";
import PrimaryButton from "../../../components/PrimaryButton/PrimaryButton.jsx";

import profilePic from "../../../assets/UserProfilePic.jpg";

const ManageProfile = () => {
  const token = Cookies.get("token");
  const [user, setUser] = useState({});
  const [appointments, setAppointments] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/patients/patient", {
        headers: {
          "x-auth-token": token,
        },
      })
      .then((res) => {
        setUser(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/appointments/patient", {
        headers: {
          "x-auth-token": token,
        },
      })
      .then((res) => {
        setAppointments(res.data);
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
  }, [token]);

  const [isEditing, setIsEditing] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    // Add save logic here (e.g., API call to save user details)
    setIsEditing(false);
  };

  const handleCancel = () => {
    // Add cancel logic here (e.g., revert to original user details)
    setIsEditing(false);
  };

  const calculateAge = (dateString) => {
    const birthDate = new Date(dateString);
    if (isNaN(birthDate.getTime())) {
      return null;
    } else {
      const ageDiffMs = Date.now() - birthDate.getTime();
      const ageDate = new Date(ageDiffMs); // miliseconds from epoch
      return Math.abs(ageDate.getUTCFullYear() - 1970);
    }
  };

  const upcomingAppointmentsCount = appointments.filter(
    (appointment) => appointment.status === "upcoming"
  ).length;
  const pastAppointmentsCount = appointments.filter(
    (appointment) => appointment.status === "completed"
  ).length;

  return (
    <div>
      <Navbar />
      <div className="flex w-full h-full">
        <div className="w-[17%] h-full">
          <UserSidebar />
        </div>
        <div className="w-[83%] h-full my-24 flex justify-center items-center">
          <div className="w-1/2 p-10 pr-0 flex justify-end">
            <img
              src={profilePic}
              alt="Profile"
              className="w-4/5 h-[550px] object-cover rounded-2xl shadow-2xl"
            />
          </div>
          <div className="w-2/5 p-10 pl-0 mr-28 rounded-r-2xl bg-white shadow-2xl flex flex-col justify-start">
            <h1 className="text-4xl font-bold mb-5">Manage Profile</h1>
            <div className="flex flex-col items-center">
              {isEditing ? (
                <div className="w-1/2">
                  <div className="relative mb-4">
                    <PrimaryInput
                      type="text"
                      value={user.name}
                      onChange={handleChange}
                      label="Name"
                      bgColor="bg-blue-100"
                    />
                  </div>
                  <div className="relative mb-4">
                    <PrimaryInput
                      type="email"
                      value={user.email}
                      onChange={handleChange}
                      label="Email"
                      bgColor="bg-blue-100"
                    />
                  </div>
                  <div className="relative mb-4">
                    <PrimaryInput
                      type="date"
                      value={user.dob}
                      onChange={handleChange}
                      label="Date of Birth"
                      bgColor="bg-blue-100"
                    />
                  </div>
                  <div className="relative mb-4">
                    <PrimaryInput
                      type="text"
                      value={user.phone}
                      onChange={handleChange}
                      label={"Phone"}
                      bgColor="bg-blue-100"
                    />
                  </div>
                  {/* <PrimaryInput
                    type="text" 
                    value={user.city}
                    onChange={handleChange}
                    label="City"
                    />
                  */}
                  <div className="flex h-10 gap-4">
                    <PrimaryButton text="Save" onClick={handleSave} />
                    <PrimaryButton text="Cancel" onClick={handleCancel} />
                  </div>
                </div>
              ) : (
                <div className="flex flex-col items-center justify-center gap-2">
                  <p>
                    <strong>Name:</strong> {user.name}
                  </p>
                  <p>
                    <strong>Email:</strong> {user.email}
                  </p>
                  <p>
                    <strong>Age:</strong> {calculateAge(user.dob)}
                  </p>
                  <p>
                    <strong>Phone:</strong> {user.phone}
                  </p>
                  {/* <p>
                    <strong>City:</strong> {user.city}
                  </p> */}
                  <p>
                    <strong>Total Ongoing Appointments:</strong>{" "}
                    {upcomingAppointmentsCount}
                  </p>
                  <p>
                    <strong>Total Past Appointments:</strong>{" "}
                    {pastAppointmentsCount}
                  </p>
                  <div className="w-24 h-8 mt-4 flex justify-center">
                    <PrimaryButton text="Edit" onClick={handleEdit} />
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageProfile;
