import React, { useState } from "react";
import Logo from "../assests/Logo.png";
import { FaAngleDoubleUp } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  const [feedback, setfeedback] = useState({
    msg: "",
  });
  const handlesubmit = async (event) => {
    event.preventDefault();
    console.log("clicked");
    try {
      const res = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/send-feedback`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(feedback),
        }
      );
      setfeedback({
        msg: "",
      });
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="w-full h-fit bg-[#323232] rounded-t-lg px-10 py-7 mt-20 relative">
      <div className="w-full h-full flex">
        <div className="w-1/2 h-full">
          <img src={Logo} className="h-20 mt-9" />
          <p className="w-full px-14 font-bold text-[#cfcfcff0] leading-7 tracking-widest mt-2 ">
            <div className="border-b-2 border-#cfcfcff0 w-full"></div>
            QR Walk isn’t just a service it’s a revolution in modern
            advertising. We redefine how businesses reach their audience by
            merging technology with creativity. Our platform enables brands to
            advertise in the most convenient, targeted, and effective way
            possible using QR technology.
          </p>
          
        </div>
        <div className="w-1/2 h-full mt-18">
          <div className="w-full h-fit flex border-b-2 border-[#cfcfcff0] p-3 gap-15">
            <FaFacebook className="text-[#cfcfcff0] text-3xl hover:scale-110 hover:cursor-pointer down" />
            <FaXTwitter className="text-[#cfcfcff0] text-3xl hover:scale-110 hover:cursor-pointer down" />
            <FaInstagram className="text-[#cfcfcff0] text-3xl hover:scale-110 hover:cursor-pointer down" />
            <FaLinkedinIn className="text-[#cfcfcff0] text-3xl hover:scale-110 hover:cursor-pointer down" />
          </div>
          <div className="w-full h-fit mt-8">
            <label className="text-[#cfcfcff0] font-bold text-[1.2rem]">
              Feedback :<br />
              <input
                className="w-full border-b-1 border-white focus:outline-0 bg-[#3232323e]"
                name="msg"
                value={feedback.msg}
                onChange={(event) => {
                  setfeedback({
                    ...feedback,
                    [event.target.name]: event.target.value,
                  });
                }}
              />
              <br />
              <button
                className="mt-5 w-fit px-4 py-1 border-1 border-white bg-[white] text-black hover:cursor-pointer"
                onClick={handlesubmit}
              >
                Submit
              </button>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
