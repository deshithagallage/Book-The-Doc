import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./App.css";

import Landing from "./pages/Landing/Landing";
import Login from "./pages/Login/Login";
import ChooseSignUp from "./pages/SignUp/ChooseSign/ChooseSignUp";
import UserSignUp from "./pages/SignUp/User/UserSignUp";
import CenterSignUp from "./pages/SignUp/Center/CenterSignUp";
import UserDashboard from "./pages/Dashboard/User/UserDashboard";
import CenterDashboard from "./pages/Dashboard/Center/CenterDashboard";
import FindDoc from "./pages/FindDoc/FindDoc";
import CardiologistPage from "./pages/FindDoc/DoctorPages/cardiologist";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<ChooseSignUp />} />
        <Route path="/register/user" element={<UserSignUp />} />
        <Route path="/register/center" element={<CenterSignUp />} />

        <Route path="/dashboard/user" element={<UserDashboard />} />
        <Route path="/dashboard/center" element={<CenterDashboard />} />

        <Route path="/find-doctor" element={<FindDoc />} />
        <Route path="/find-doctor/cardiologist" element={<CardiologistPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
