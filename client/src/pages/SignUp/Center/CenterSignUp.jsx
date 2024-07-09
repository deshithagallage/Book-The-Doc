import React, { useState } from "react";
import "../../../index.css";
import "../signup-custom.css";
import Alert from "../../../components/Alert/Alert";
import Navbar from "../../../components/Navbar/Navbar";
import PrimaryInput from "../../../components/PrimaryInput/PrimaryInput";

function UserSignUp() {
  const [centerName, setCenterName] = useState("");
  const [email, setEmail] = useState("");
  const [medLcnNum, setMedLcnNum] = useState("");
  const [password, setPassword] = useState("");
  const [confPass, setConfPass] = useState("");
  const [province, setProvince] = useState("");
  const [city, setCity] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [isFirstTime, setIsFirstTime] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsFirstTime(false);
    if (
      !centerName ||
      !email ||
      !medLcnNum ||
      !province ||
      !city ||
      !zipCode ||
      !password ||
      !confPass
    ) {
      return;
    }
    if (password !== confPass) {
      return;
    }
    history.push("/login");
  };

  return (
    <div className="w-full h-screen flex flex-col items-center">
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
            {/* heading 1 */}
            <h1 className="text-3xl font-bold text-center mt-10 mb-5">
              Center Registration
            </h1>

            {/* form */}
            <form
              className="flex flex-col justify-center items-center w-4/6"
              onSubmit={handleSubmit}
            >
              {/* center name input */}
              <div className="w-full relative mt-4">
                <PrimaryInput
                  type="text"
                  value={centerName}
                  onChange={(e) => setCenterName(e.target.value)}
                  label="Channeling Center Name"
                />
              </div>

              {/* alert */}
              <div className="w-full flex items-start">
                <Alert
                  message="Individual doctor? Enter name here."
                  isVisible={true}
                  type="info"
                />
              </div>

              {/* email input */}
              <div className="w-full relative mt-4">
                <PrimaryInput
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  label="Enter Email"
                />
              </div>

              {/* medical license number input */}
              <div className="w-full relative mt-4">
                <PrimaryInput
                  type="text"
                  value={medLcnNum}
                  onChange={(e) => setMedLcnNum(e.target.value)}
                  label="Medical License Number"
                />
              </div>

              {/* password input */}
              <div className="w-full relative mt-4">
                <PrimaryInput
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  label="Enter Password"
                />
              </div>

              {/* confirm password input */}
              <div className="w-full relative mt-4">
                <PrimaryInput
                  type="password"
                  value={confPass}
                  onChange={(e) => setConfPass(e.target.value)}
                  label="Confirm Password"
                />
              </div>

              {/* alert if password do not match */}
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

              {/* province and city input */}
              <div className="w-full flex items-center justify-center mt-4">
                {/* province input */}
                <div className="w-1/2 relative mr-2">
                  <select
                    onChange={(e) => setProvince(e.target.value)}
                    className="bg-white w-full h-10 rounded-md opacity-80 pl-2 drop-shadow-lg text-sm"
                  >
                    <option value="" disabled selected hidden>
                      Select
                    </option>
                    <option value="northern">Northern</option>
                    <option value="north-western">North Western</option>
                    <option value="western">Western</option>
                    <option value="north-central">North Central</option>
                    <option value="central">Central</option>
                    <option value="sabaragamuwa">Sabaragamuwa</option>
                    <option value="eastern">Eastern</option>
                    <option value="uva">Uva</option>
                    <option value="southern">Southern</option>
                  </select>
                  <label className="absolute -top-[10px] left-4 text-[12px] italic  text-gray-400">
                    State/Province
                  </label>
                </div>

                {/* city input */}
                <div className="w-1/2 relative ml-2">
                  <PrimaryInput
                    type="text"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    label="City"
                  />
                </div>
              </div>

              {/* zip code input */}
              <div className="w-full relative mt-4">
                <PrimaryInput
                  type="text"
                  value={zipCode}
                  onChange={(e) => setZipCode(e.target.value)}
                  label="Zip Code"
                />
              </div>

              {/* alert if any field is empty */}
              {!(
                centerName &&
                email &&
                medLcnNum &&
                password &&
                confPass &&
                province &&
                city &&
                zipCode
              ) && !isFirstTime ? (
                <div className="w-full flex items-start">
                  <Alert
                    message="Fill out All the fields!"
                    isVisible={true}
                    type="error"
                  />
                </div>
              ) : null}

              {/* register button */}
              <button
                type="submit"
                className="w-full h-10 mt-4 bg-blue-500 text-white rounded-md drop-shadow-xl tracking-widest flex justify-center items-center hover:-translate-y-1 hover:bg-blue-600 hover:shadow-lg transition-transform duration-300"
              >
                REGISTER
              </button>

              {/* divider */}
              <div className="w-full flex items-center mt-4">
                <div className="flex-grow border-t border-black border-opacity-30"></div>
                <div className="mx-2 text-black text-opacity-30 text-sm italic">
                  Already have an account?
                </div>
                <div className="flex-grow border-t border-black border-opacity-30"></div>
              </div>

              {/* sign in link */}
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
