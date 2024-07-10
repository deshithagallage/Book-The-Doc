import React from "react";
import { useNavigate, Outlet } from "react-router-dom";
import Cookies from "js-cookie";
import Modal from "../Model/Model";
import PrimaryButton from "../PrimaryButton/PrimaryButton";

const ProtectedRoute = () => {
  const token = Cookies.get("token");
  const navigate = useNavigate();

  if (!token) {
    return (
      <Modal
        content={
          <div className="w-96 h-64 flex flex-col justify-center items-center">
            <p className="text-xl font-bold mb-8">
              You Can't Access This Page <br />
              Please Login or <br />
              Create an Account.
            </p>
            <div className="flex p-4 space-x-4 justify-center">
              <div className="w-24 h-10">
                <PrimaryButton
                  text="Login"
                  onClick={() => window.location.replace("/login")}
                />
              </div>
              <div className="w-24 h-10">
                <PrimaryButton text="Close" onClick={() => navigate("/")} />
              </div>
            </div>
          </div>
        }
        overlayClick={() => navigate("/")}
      />
    );
  }

  return <Outlet />;
};

export default ProtectedRoute;
