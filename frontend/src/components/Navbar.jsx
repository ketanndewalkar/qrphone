import React, { useEffect, useState } from "react";
import Logo from "../assests/Logo.png";
import { IoMenuOutline } from "react-icons/io5";
import { Link, NavLink } from "react-router-dom";
import { IoClose } from "react-icons/io5";
import { IoMenu } from "react-icons/io5";

const Navbar = () => {
  const [shownav, setshownav] = useState(false);
  return (
    <div className="w-full h-35 bg-transparent px-12 absolute top-0 left-0 z-10 md:h-50 md:px-0">
      <div className="w-full h-full flex justify-between items-center">
        <div className={`hidden md:absolute md:h-full md:w-fit md:flex md:items-center md:right-12`}>
          {shownav?<IoClose className="text-[10vw]"onClick={()=>setshownav(false)}/>
          :<IoMenu className="text-[10vw]" onClick={()=>setshownav(true)}/>
          }
        </div>
        <img src={Logo} className="h-17 md:h-[70%]" />
        {shownav?<div className="h-full flex items-center justify-center md:top-[100%] md:w-full md:left-0 md:absolute md:h-full  md:flex md:items-center md:right-12 md:backdrop-blur-md md:bg-white/20 md:border md:border-white/30 md:shadow-lg md:rounded-lg md:px-2 md:border-1] ">
          <div className="flex h-15 mr-15 gap-12 border-red-400 md:h-fit md:gap-20 ">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `${
                  isActive ? "text-[#FF0000]  border-b-2" : "text-[#d15f5f]"
                } text-[1.5rem] font-semibold h-full flex items-center justify-center md:text-[4rem]`
              }
            >
              <p className="">Home</p>
            </NavLink>

            <NavLink
              to="/contact-page"
              className={({ isActive }) =>
                `${
                  isActive ? "text-[#FF0000]  border-b-2" : "text-[#d15f5f]"
                } text-[1.5rem] font-semibold h-full flex items-center justify-center md:text-[4rem]`
              }
            >
              <p className="">Contact</p>
            </NavLink>
          </div>
        </div>:""}
      </div>
    </div>
  );
};

export default Navbar;
