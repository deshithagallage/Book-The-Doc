import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import PrimaryButton from "../PrimaryButton/PrimaryButton";
import NavListItem from "./NavListItem";
import Modal from "../Model/Model";
import Cookies from "js-cookie";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const isLoginPage = location.pathname === "/login";

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [userRole, setUserRole] = useState("");

  const logout = () => {
    Cookies.remove("token");
    Cookies.remove("userId");
    Cookies.remove("userRole");
    setIsLoggedIn(false);
    setShowModal(false);
    navigate("/");
  };

  useEffect(() => {
    const token = Cookies.get("token");
    const role = Cookies.get("userRole");
    if (token) {
      setIsLoggedIn(true);
      setUserRole(role);
    }
  }, []);

  return (
    <header>
      <div className="w-full h-full flex flex-col items-center">
        <nav className="w-screen h-16 flex justify-between items-center px-6 bg-blue-200 text-blue-500">
          <Link to="/">
            <div className="flex h-12 my-auto">
              <img
                src="/src/assets/logo.png"
                alt="logo"
                className="object-fill"
              />
            </div>
          </Link>
          <ul className="flex h-[60px] justify-between items-end pb-3 text-lg tracking-widest font-semibold">
            <NavListItem text="Home" href="/" />
            {/* If user is logged in, show dashboard link */}
            {isLoggedIn && (
              <NavListItem
                text="Dashboard"
                href={`/dashboard/${userRole === "patient" ? "user" : "center"}`}
              />
            )}

            <NavListItem text="Doctors" href="/find-doctor" />
            <NavListItem text="About" />
            <NavListItem text="Contact" />
            <li className="w-full px-4">
              {isLoggedIn ? (
                <div className="h-9 w-full">
                  <PrimaryButton
                    text="Logout"
                    onClick={() => setShowModal(true)}
                    className="px-6 bg-white text-blue-600 border-2 border-blue-600 hover:bg-blue-200"
                    removeTranslate={true}
                  />
                </div>
              ) : (
                <Link to={isLoginPage ? "/register" : "/login"}>
                  <div className="h-9 w-full">
                    <PrimaryButton
                      text={isLoginPage ? "Register" : "Login"}
                      className="px-6"
                      removeTranslate={true}
                    />
                  </div>
                </Link>
              )}
            </li>
          </ul>
        </nav>
        {showModal && (
          <Modal
            overlayClick={() => setShowModal(false)}
            content={
              <>
                <div className="w-96 h-64 flex flex-col justify-center items-center">
                  <p className="text-xl font-bold mb-8">
                    Are you sure you want to log out? <br />
                    Logging out will securely <br />
                    end your session.
                  </p>
                  <div className="flex p-4 space-x-4 justify-center">
                    <div className="w-24 h-10">
                      <PrimaryButton text="Logout" onClick={logout} />
                    </div>
                    <div className="w-24 h-10">
                      <PrimaryButton
                        text="Close"
                        onClick={() => setShowModal(false)}
                      />
                    </div>
                  </div>
                </div>
              </>
            }
            onClose={() => setShowModal(false)}
          />
        )}
      </div>
    </header>
  );
};

export default Navbar;
