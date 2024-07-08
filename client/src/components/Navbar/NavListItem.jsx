import React from "react";

const NavListItem = ({ text, icon, href = "/" }) => {
  return (
    <li className="-ms-8 relative group">
      <a
        href={href}
        className="flex items-center px-14 pt-2 text-blue-500 hover:text-blue-700 relative z-10 tracking-widest"
      >
        {icon}
        <span>{text}</span>
      </a>
      <div className="absolute left-0 right-0 -bottom-3 h-0 bg-transparent transition-all duration-300 group-hover:h-12 z-0">
        <img
          src="/src/assets/nav-item-box.png"
          alt="nav-item-box"
          className="w-full h-full object-fill"
        />
      </div>
    </li>
  );
};

export default NavListItem;
