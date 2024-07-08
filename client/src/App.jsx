import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";

import Landing from "./pages/Landing/Landing";
import Login from "./pages/Login/Login";
import ChooseSignUp from "./pages/SignUp/ChooseSign/ChooseSignUp";
import UserSignUp from "./pages/SignUp/User/UserSignUp";
import CenterSignUp from "./pages/SignUp/Center/CenterSignUp";
import UserDashboard from "./pages/Dashboard/User/UserDashboard";
import CenterDashboard from "./pages/Dashboard/Center/CenterDashboard";

import AppointmentHistory from './pages/Dashboard/User/AppointmentHistory';
import UpcomingAppointments from './pages/Dashboard/User/UpcomingAppointments';
import ManageProfile from './pages/Dashboard/User/ManageProfile';

import Appointments from './pages/Dashboard/Center/Appointments';
import AppointmentCalendar from './pages/Dashboard/Center/AppointmentCalendar';
import UsersList from './pages/Dashboard/Center/UsersList';
import Messages from './pages/Dashboard/Center/Messages';
import DoctorManagement from './pages/Dashboard/Center/DoctorManagement';
import DoctorForm from './pages/Dashboard/Center/DoctorForm';

import FindDoc from "./pages/FindDoc/FindDoc";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<ChooseSignUp />} />
        <Route path="/signup/user" element={<UserSignUp />} />
        <Route path="/signup/center" element={<CenterSignUp />} />
        
        {/* User Dashboard Routes */}
        <Route path="/dashboard/user" element={<UserDashboard />} />
        <Route path="/dashboard/user/appointment-history" element={<AppointmentHistory />} />
        <Route path="/dashboard/user/upcoming-appointments" element={<UpcomingAppointments />} />
        <Route path="/dashboard/user/manage-profile" element={<ManageProfile />} />

        {/* Center Dashboard Routes */}
        <Route path="/dashboard/center" element={<CenterDashboard />} />
        <Route path="/dashboard/center/appointments" element={<Appointments />} />
        <Route path="/dashboard/center/appointment-calendar" element={<AppointmentCalendar />} />
        <Route path="/dashboard/center/users-list" element={<UsersList />} />
        <Route path="/dashboard/center/messages" element={<Messages />} />
        <Route path="/dashboard/center/doctor-management" element={<DoctorManagement />} />
        <Route path="/dashboard/center/doctors/edit/:doctorId" element={<DoctorForm />} />
        <Route path="/dashboard/center/doctors/new" element={<DoctorForm />} />

        <Route path="/find-doctor" element={<FindDoc />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
