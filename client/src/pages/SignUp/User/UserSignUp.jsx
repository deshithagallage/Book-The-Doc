import React, { useState } from "react";
import "../../../index.css";
import "../signup-custom.css";
import Alert from "../../../components/Alert/Alert";
import Navbar from "../../../components/Navbar/Navbar";
import PrimaryInput from "../../../components/PrimaryInput/PrimaryInput";
import axios from "axios";
import { useNavigate } from "react-router";

function UserSignUp() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [dob, setDob] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confPass, setConfPass] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      !firstName ||
      !lastName ||
      !email ||
      !gender ||
      !dob ||
      !password ||
      !confPass
    ) {
      alert("Please fill out all fields");
      return;
    }
    if (password !== confPass) {
      alert("Passwords do not match");
      return;
    }
    const name = firstName + " " + lastName;
    const address = "linda";
    try {
      const res = await axios.post(
        `${import.meta.env.VITE_API_BASE_URL}/api/auth/register/patient`,
        {
          name,
          address,
          phone,
          email,
          dob,
          password,
        }
      );
      if (res.status >= 200 && res.status < 300) {
        navigate("/login");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="w-full h-screen flex flex-col items-center pt-12">
      <Navbar />
      <div className="w-1/2 h-hull mt-7 flex justify-center items-center">
        <div className="w-1/2 h-full bg-blue-500 bg-opacity-70 rounded-l-xl">
          <img
            src="/src/assets/login_cover.png"
            alt="login-cover-image"
            className="w-full h-full object-scale-down rounded-l-xl justify-center items-center"
          />
        </div>
        <div className="w-1/2 h-full bg-blue-100 border-2 border-blue-500 border-opacity-70 rounded-r-xl flex items-center justify-center">
          <div className="w-full flex flex-col justify-center items-center">
            <h1 className="text-3xl font-bold text-center mt-10 mb-10">
              Welcome User
            </h1>
            <form
              className="flex flex-col justify-center items-center w-4/6"
              onSubmit={handleSubmit}
            >
              <div className="w-full flex items-center justify-center">
                <div className="w-1/2 relative mr-2">
                  <PrimaryInput
                    type="text"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    label="First Name"
                  />
                </div>
                <div className="w-1/2 relative ml-2">
                  <PrimaryInput
                    type="text"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    label="Last Name"
                  />
                </div>
              </div>
              <div className="w-full relative mt-4">
                <PrimaryInput
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  label="Enter Email"
                />
              </div>
              <div className="w-full flex items-center justify-center mt-4">
                <div className="w-1/2 relative mr-2">
                  <select
                    onChange={(e) => setGender(e.target.value)}
                    className="bg-white w-full h-10 rounded-md opacity-80 pl-2 drop-shadow-lg text-sm"
                  >
                    <option value="" disabled selected hidden>
                      Select
                    </option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                    <option value="prefer_not_to_say">Prefer not to say</option>
                  </select>
                  <label className="absolute -top-[10px] left-4 text-[12px] italic  text-gray-400">
                    Gender
                  </label>
                </div>
                <div className="w-1/2 relative ml-2">
                  <PrimaryInput
                    type="date"
                    value={dob}
                    onChange={(e) => setDob(e.target.value)}
                    label="Date of Birth"
                  />
                </div>
              </div>
              <div className="w-full relative mt-4">
                <PrimaryInput
                  type="text"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  label="Phone Number"
                />
              </div>
              <div className="w-full relative mt-4">
                <PrimaryInput
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  label="Enter Password"
                />
              </div>
              <div className="w-full relative mt-4">
                <PrimaryInput
                  type="password"
                  value={confPass}
                  onChange={(e) => setConfPass(e.target.value)}
                  label="Confirm Password"
                />
              </div>
              {password !== confPass && confPass ? (
                // need to make this align to the left
                <div className="w-full flex items-start">
                  <Alert
                    message="Passwords do not match"
                    isVisible={true}
                    type="error"
                  />
                </div>
              ) : password === confPass && confPass ? (
                <div className="w-full flex items-start">
                  <Alert
                    message="Passwords match!"
                    isVisible={true}
                    type="success"
                  />
                </div>
              ) : null}
              <button
                type="submit"
                className="w-full h-10 mt-4 bg-blue-500 text-white rounded-md drop-shadow-xl tracking-widest flex justify-center items-center hover:-translate-y-1 hover:bg-blue-600 hover:shadow-lg transition-transform duration-300"
              >
                REGISTER
              </button>
              <div className="w-full flex items-center mt-5">
                <div className="flex-grow border-t border-black border-opacity-30"></div>
                <div className="mx-2 text-black text-opacity-30 text-sm italic">
                  or continue with
                </div>
                <div className="flex-grow border-t border-black border-opacity-30"></div>
              </div>
              <div className="w-full flex items-center mt-4">
                <button className="m-auto p-3 w-14 h-14 bg-white drop-shadow-xl rounded-full overflow-hidden flex justify-center items-center hover:-translate-y-2 hover:border-white transition-transform duration-300">
                  <img
                    src="/src/assets/google.svg"
                    alt="google-icon"
                    className="w-16 h-16"
                  />
                </button>
                <button className="m-auto p-4 w-14 h-14 bg-white drop-shadow-xl rounded-full overflow-hidden flex justify-center items-center hover:-translate-y-2 hover:border-white transition-transform duration-300">
                  <img
                    src="/src/assets/apple.svg"
                    alt="apple-icon"
                    className="w-16 h-16"
                  />
                </button>
                <button className="m-auto p-3 w-14 h-14 bg-white drop-shadow-xl rounded-full overflow-hidden flex justify-center items-center hover:-translate-y-2 hover:border-white transition-transform duration-300">
                  <img
                    src="/src/assets/facebook.svg"
                    alt="fb-icon"
                    className="w-16 h-16"
                  />
                </button>
              </div>
              <div className="w-full flex items-center mt-4">
                <div className="flex-grow border-t border-black border-opacity-30"></div>
                <div className="mx-2 text-black text-opacity-30 text-sm italic">
                  Already have an account?
                </div>
                <div className="flex-grow border-t border-black border-opacity-30"></div>
              </div>
              <div className="w-full flex justify-center">
                <a
                  href="/login"
                  className="italic text-blue-600 text-opacity-70 text-sm mb-10"
                >
                  {" "}
                  Sign In Here!
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserSignUp;
