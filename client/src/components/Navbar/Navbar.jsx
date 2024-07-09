import React from "react";
import PrimaryButton from "../PrimaryButton/PrimaryButton";
import NavListItem from "./NavListItem";
import { Link } from "react-router-dom";

const Navbar = () => {
  const role = "user";
  return (
    <header>
      <div className="w-full h-full flex flex-col items-center">
        <nav className="w-screen h-16 flex justify-between items-center px-6 bg-blue-200 text-blue-500">
          <div className="flex h-12 my-auto">
            <img
              src="/src/assets/logo.png"
              alt="logo"
              className="object-fill"
            />
          </div>
          <ul className="flex h-[60px] justify-between items-end pb-3 text-lg tracking-widest font-semibold">
            <NavListItem text="Home" href="/" />
            <NavListItem text="Dashboard" href={`/dashboard/${role}`} />
            <NavListItem text="Doctors" href="/find-doctor" />
            <NavListItem text="About" />
            <NavListItem text="Contact" />
            {/* Uncomment the following if you want to add the PrimaryButton */}
            <li>
              <Link to="/login">
                <div className="h-9 w-28 flex ml-2">
                  <PrimaryButton text="Login" removeTranslate={true} />
                </div>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
