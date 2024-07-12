/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import UserSidebar from "../Sidebar/UserSidebar.jsx";
import axios from "axios";
import Cookies from "js-cookie";
import Navbar from "../../../components/Navbar/Navbar.jsx";
import LoadingSpinner from "../../../components/LoadingSpinner/LoadingSpinner.jsx";

const UpcomingAppointments = () => {
  const [appointments, setAppointments] = useState([]);
  const token = Cookies.get("token");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/appointments/patient", {
        headers: {
          "x-auth-token": token,
        },
      })
      .then((res) => {
        setAppointments(res.data);
        setIsLoading(false);
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
          setIsLoading(false);
        }
      });
  }, [token]);

  const upcomingAppointments = appointments.filter(
    (appointment) => appointment.status === "upcoming"
  );

  const formatDate = (dateString, index) => {
    const date = new Date(dateString);
    if (isNaN(date.getTime())) {
      return null;
    } else {
      return date.toLocaleString().split(", ")[index];
    }
  };

  const getAllMedicalCenters = (appointments) => {
    const medicalCenters = {};
    appointments.forEach((appointment) => {
      if (!medicalCenters.hasOwnProperty(appointment.medicalCenter)) {
        medicalCenters[appointment.medicalCenter] = [appointment];
      } else {
        medicalCenters[appointment.medicalCenter].push(appointment);
      }
    });
    return medicalCenters;
  };

  const medicalCentersAppointments = getAllMedicalCenters(upcomingAppointments);

  return (
    <div>
      <Navbar />
      <div className="flex w-full h-full">
        <div className="w-[17%] h-full">
          <UserSidebar />
        </div>
        <div className="w-[83%] h-full my-16 py-14 px-10 flex flex-col justify-center items-center">
          <h1 className="text-4xl font-bold mb-7">Upcoming Appointments</h1>
          <div className="w-5/6 h-full">
            {isLoading ? (
              <div className="flex justify-center items-center h-full gap-x-4 font-semibold text-lg">
                <LoadingSpinner />
                <p>Appoinments Loading...</p>
              </div>
            ) : Object.keys(medicalCentersAppointments).length > 0 ? (
              Object.keys(medicalCentersAppointments).map((medicalCenter) => (
                <div key={medicalCenter} className="flex flex-col gap-y-3">
                  <h1 className="text-2xl font-bold text-start">
                    {`Medical Center Name : ${medicalCenter[0].toUpperCase() + medicalCenter.slice(1)}`}
                  </h1>
                  <div className="flex justify-center items-center">
                    <div className="w-1/6 h-16 flex justify-start items-center">
                      <h2 className="text-lg text-start font-bold pl-3 border-l-2 border-gray-300">
                        Queue Number
                      </h2>
                    </div>
                    <div className="w-5/6 h-16 bg-gray-100 flex justify-center items-center">
                      <h2 className="w-1/4 text-lg font-bold pl-3 text-start border-l-2 border-gray-300">
                        Doctor
                      </h2>
                      <h2 className="w-1/4 text-lg font-bold pl-3 text-start border-l-2 border-gray-300">
                        Date
                      </h2>
                      <h2 className="w-1/4 text-lg font-bold pl-3 text-start border-l-2 border-gray-300">
                        Time
                      </h2>
                      <h2 className="w-1/4 text-lg font-bold pl-3 text-start border-l-2 border-gray-300">
                        Status
                      </h2>
                    </div>
                  </div>
                  {medicalCentersAppointments[medicalCenter].map(
                    (appointment) => (
                      <div
                        key={appointment._id}
                        className="flex justify-center items-center border-b-2 border-gray-300 shadow-md rounded-md"
                      >
                        <div className="w-1/6 h-16 bg-blue-300 flex justify-center items-center">
                          <div className="rounded-full bg-white w-10 h-10 flex justify-center items-center">
                            <h2 className="text-2xl font-bold">
                              {appointment.queueNumber}
                            </h2>
                          </div>
                        </div>
                        <div className="w-5/6 h-16 bg-gray-100 flex justify-center items-center px-auto">
                          <h2 className="w-1/4 text-lg font-bold pl-3 text-start border-r-2 border-gray-300">
                            {appointment.doctor}
                          </h2>
                          <div className="w-1/4 font-bold pl-3 text-start border-r-2 border-gray-300">
                            {formatDate(appointment.date, 0)}
                          </div>
                          <div className="w-1/4 font-bold pl-3 text-start border-r-2 border-gray-300">
                            {formatDate(appointment.date, 1)}
                          </div>
                          <div className="w-1/4 font-bold pl-3 text-start">
                            <span
                              className={`${
                                appointment.status === "upcoming"
                                  ? "text-green-500"
                                  : "text-red-500"
                              }`}
                            >
                              {appointment.status}
                            </span>
                          </div>
                        </div>
                      </div>
                    )
                  )}
                </div>
              ))
            ) : (
              <p>No upcoming appointments found.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpcomingAppointments;
