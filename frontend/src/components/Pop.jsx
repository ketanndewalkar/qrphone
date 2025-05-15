import React, { useContext } from "react";
import { ImCross } from "react-icons/im";

import { FaCheck } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";
import { AppContext } from "../context/context";

const Pop = () => {
  const { status, setpopshow } = useContext(AppContext);
  return (
    <>
      <div className="w-screen h-screen fixed top-0 left-0 z-11 bg-[#59595974] flex items-center justify-center">
        <div className="w-100 h-40 bg-white flex items-center justify-center flex-col gap-3 relative md:w-[80%] md:h-fit md:py-40 md:gap-20">
          {status === 200 ? (
            <FaCheck className={`text-green-500 text-5xl md:text-[10rem]`} aria-hidden="true" />
          ) : (
            <ImCross className={`text-red-500 text-5xl md:text-[13rem]`} />
          )}
          <p className="text-[1.2rem] md:text-[4rem] md:text-center">
            {status === 200 ? "Email Sent Successfully" : "Error"}
          </p>
          <RxCross1
            className="absolute text-1xl top-3 right-3 text-[#7F7F7F] hover:cursor-pointer md:text-[4rem] md:top-4 md:right-4"
            onClick={() => setpopshow(false)}
            aria-label="Close popup"
          />
        </div>
      </div>
    </>
  );
};

export default Pop;
