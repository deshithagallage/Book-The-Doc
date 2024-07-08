import React from "react";
import PButton from "../primary_button/PButton";
import NavListItem from "./NavListItem";
import { Link } from "react-router-dom";

const Navbar = () => {
  const role = "user";
  return (
    <header>
      <div className="w-full h-full flex flex-col items-center">
        <nav className="w-screen flex justify-between items-center px-6 bg-blue-200 text-blue-500">
          <div className="flex h-full mt-2">
            <img
              src="/src/assets/logo.png"
              alt="logo"
              className="object-fill h-12"
            />
          </div>
          <ul className="flex h-[60px] justify-between items-end pb-3 text-lg tracking-widest font-semibold">
            <NavListItem text="Home" href="/" />
            <NavListItem text="Doctors" href="/find-doctor" />
            <NavListItem text="About" />
            <NavListItem text="Contact" />
            {/* Uncomment the following if you want to add the PButton */}
            <li>
              <div className="h-9 ml-5 flex space-x-4">
                <Link to="/login">
                  <PButton text="Log In / Register" removeTranslate={true} />
                </Link>
              </div>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
