import React from "react";
import { useNavigate } from "react-router-dom";
import { HiOutlineEye, HiOutlineEyeSlash, HiEye } from "react-icons/hi2";
import PrimaryButtton from "../../components/PrimaryButton/PrimaryButton";
import Navbar from "../../components/Navbar/Navbar";
import PrimaryInput from "../../components/PrimaryInput/PrimaryInput";
import axios from "axios";
import Alert from "../../components/Alert/Alert";
import Cookies from "js-cookie";

function Login() {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [showPassword, setShowPassword] = React.useState(false);
  const [isFirstTime, setIsFirstTime] = React.useState(true);
  const [isLoginSuccess, setIsLoginSuccess] = React.useState(-1);
  const navigate = useNavigate();

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsFirstTime(false);
    if (!email || !password) {
      return;
    }
    try {
      const res = await axios.post(
        `${import.meta.env.VITE_API_BASE_URL}/api/auth/login`,
        {
          email,
          password,
        }
      );
      console.log(res);
      if (res.status >= 200 && res.status < 300) {
        setIsLoginSuccess(1);
        console.log(res.data);
        const { token, userId, userRole } = res.data;
        Cookies.set("token", token);
        Cookies.set("userId", userId);
        Cookies.set("userRole", userRole);
        navigate("/");
      } else {
        setIsLoginSuccess(0);
      }
    } catch (err) {
      if (err.response.status === 400) {
        // console.log("msg", err);
        setIsLoginSuccess(0);
      } else {
        console.log("msg", err.message);
      }
    }
  };

  return (
    <div className="w-full h-screen flex flex-col items-center pt-16">
      <Navbar />
      <div className="mt-20 w-1/2 h-hull flex justify-center items-center">
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
            <h1 className="text-3xl font-bold text-center mt-10 mb-10">
              Welcome Back
            </h1>

            {/* form */}
            <form
              onSubmit={handleSubmit}
              className="flex flex-col justify-center items-center w-4/6"
            >
              {/* email input */}
              <div className="w-full relative">
                <PrimaryInput
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  label="Enter Email"
                />
              </div>

              {!email && !isFirstTime ? (
                <div className="w-full flex items-start">
                  <Alert
                    message="Email can not be empty!"
                    isVisible={true}
                    type="error"
                  />
                </div>
              ) : null}

              {/* password input */}
              <div className="w-full relative mt-4">
                <PrimaryInput
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  label="Enter Password"
                />

                {/* show password icon and hide password icon */}
                {!showPassword ? (
                  <HiOutlineEye
                    color="1678F2"
                    className="absolute top-3 right-3"
                    onClick={toggleShowPassword}
                  />
                ) : (
                  <HiOutlineEyeSlash
                    color="1678F2"
                    className="absolute top-3 right-3"
                    onClick={toggleShowPassword}
                  />
                )}
              </div>

              {/* alert if password is empty */}
              {!password && !isFirstTime ? (
                <div className="w-full flex items-start">
                  <Alert
                    message="Password can not be empty!"
                    isVisible={true}
                    type="error"
                  />
                </div>
              ) : null}

              {/* forgot password */}
              <div className="w-full h-10 flex justify-end items-center">
                <a
                  href="#"
                  className="italic text-black text-opacity-30 text-sm"
                >
                  {" "}
                  Forgot Password?
                </a>

                {/* password incorrect alert */}
              </div>
              {isLoginSuccess === 0 ? (
                <div className="w-full flex items-start">
                  <Alert
                    message="Incorrect Email or Password!"
                    isVisible={true}
                    type="error"
                  />
                </div>
              ) : null}

              {/* login button */}
              <div className="w-full h-10 mt-4 flex justify-end items-center">
                <PrimaryButtton type="submit" text="LOGIN" />
              </div>

              {/* divider */}
              <div className="w-full flex items-center mt-7">
                <div className="flex-grow border-t border-black border-opacity-30"></div>
                <div className="mx-2 text-black text-opacity-30 text-sm italic">
                  or continue with
                </div>
                <div className="flex-grow border-t border-black border-opacity-30"></div>
              </div>

              {/* social media login */}
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

              {/* register here */}
              <div className="w-full flex items-center mt-4">
                <div className="flex-grow border-t border-black border-opacity-30"></div>
                <div className="mx-2 text-black text-opacity-30 text-sm italic">
                  Don't have an account?
                </div>
                <div className="flex-grow border-t border-black border-opacity-30"></div>
              </div>
              <div className="w-full flex justify-center">
                <a
                  href="/register"
                  className="italic text-blue-600 text-opacity-70 text-sm mb-10"
                >
                  {" "}
                  Register Here!
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
