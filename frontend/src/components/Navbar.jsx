import React, { useEffect } from "react";
import Logo from "../assests/Logo.png";
import { IoMenuOutline } from "react-icons/io5";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="w-full h-35 bg-transparent px-12 absolute top-0 left-0 z-10">
      <div className="w-full h-full flex justify-between items-center">
        <img src={Logo} className="h-17 contrast-more:" />
        <div className="h-full flex items-center justify-center">
          <div className="flex h-15 mr-15 gap-12 border-b-1 border-red-400">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `${
                  isActive ? "text-[#FF0000]  border-b-2" : "text-[#d15f5f]"
                } text-[1.5rem] font-semibold h-full flex items-center justify-center`
              }
            >
              <p className="">Home</p>
            </NavLink>

            <NavLink
              to="/contact-page"
              className={({ isActive }) =>
                `${
                  isActive ? "text-[#FF0000]  border-b-2" : "text-[#d15f5f]"
                } text-[1.5rem] font-semibold h-full flex items-center justify-center`
              }
            >
              <p className="">Contact</p>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
