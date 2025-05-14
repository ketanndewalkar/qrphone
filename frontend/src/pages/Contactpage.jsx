import React, { useContext, useEffect, useState } from "react";
import Loader from "../assests/tube-spinner.svg";
import { AppContext } from "../context/context";

const Contactpage = () => {
  const {status , setstatus , setpopshow} = useContext(AppContext)
  const [loader, setloader] = useState(false)
  const [formdata, setformdata] = useState({
    first: "",
    middle: "",
    last: "",
    email: "",
    phone: "",
    companyName: "",
    companyCategory: "",
    country: "",
    address: "",
    description: "",
    message: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setformdata((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const resetform = () => (setformdata({
    first: "",
    middle: "",
    last: "",
    email: "",
    phone: "",
    companyName: "",
    companyCategory: "",
    country: "",
    address: "",
    description: "",
    message: "",
  }));
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      !formdata.first ||
      !formdata.middle ||
      !formdata.last ||
      !formdata.email ||
      !formdata.phone ||
      !formdata.companyName ||
      !formdata.companyCategory ||
      !formdata.country ||
      !formdata.address ||
      !formdata.description ||
      !formdata.message
    ) {
      alert("Please fill all the fields");
      return;
    }
    try {
      setloader(true);
      const res = await fetch(
        `${import.meta.env.VITE_BACKEND_URL}/get-form-data`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formdata),
        }
      );
      setstatus(res.status)
      setloader(false);
      setpopshow(true);
      resetform();
    } catch (error) {
      console.error("Error:", error);
      setloader(false);
      setstatus(500)
      setpopshow(true);
    }
  };
  useEffect(()=>{
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  },[])
  return (
    <div className="w-full h-fit  border-black z-9 relative pt-35 ">
      <h1 className="w-full font-bold text-red-700 text-center text-3xl">
        CONTACT WITH PAGE
      </h1>
      <div className="w-full h-full p-15 pt-10">
        <div className="w-full h-full rounded-[20px] border border-white/20 shadow-[0_8px_32px_0_rgba(0,0,0,0.37)] px-20 py-10 bg-[#ffffffa2]">
          <div className="w-full h-full ">
            <div className=" flex flex-col items-start justify-center">
              <div className="w-full h-fit flex items-center gap-10">
                <label htmlFor="first" className="text-[1.2rem] w-1/3">
                  First Name :<br />
                  <input
                    type="text"
                    id="first"
                    name="first"
                    placeholder="First Name"
                    value={formdata.first}
                    onChange={handleChange}
                    className="px-3 py-2 w-full mt-3 focus:outline-0 rounded-md border-1 border-[#999ea3]"
                  />
                </label>
                <label htmlFor="middle" className="text-[1.2rem] w-1/3">
                  Middle Name :<br />
                  <input
                    type="text"
                    id="middle"
                    name="middle"
                    value={formdata.middle}
                    onChange={handleChange}
                    placeholder="Middle Name"
                    className="px-3 py-2 w-full mt-3 focus:outline-0 rounded-md border-1 border-[#999ea3]"
                  />
                </label>
                <label htmlFor="last" className="text-[1.2rem] w-1/3">
                  Last Name :<br />
                  <input
                    type="text"
                    id="last"
                    name="last"
                    value={formdata.last}
                    onChange={handleChange}
                    placeholder="Last Name"
                    className="px-3 py-2 w-full mt-3 focus:outline-0 rounded-md border-1 border-[#999ea3]"
                  />
                </label>
              </div>
              <br />
              <div className="w-full h-fit flex items-center gap-17 mt-5">
                <label htmlFor="email" className="text-[1.2rem] w-2/3">
                  Email :<br />
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formdata.email}
                    onChange={handleChange}
                    placeholder="Email"
                    className="px-3 py-2 w-full mt-3 focus:outline-0 rounded-md border-1 border-[#999ea3]"
                  />
                </label>
                <label htmlFor="phone" className="text-[1.2rem] w-1/3 ">
                  Phone No :<br />
                  <input
                    type="text"
                    id="phone"
                    name="phone"
                    value={formdata.phone}
                    onChange={handleChange}
                    placeholder="Phone No"
                    maxLength={14}
                    className="px-3 py-2 w-full mt-3 focus:outline-0 rounded-md border-1 border-[#999ea3]"
                  />
                </label>
              </div>
              <br />
              <div className="w-full h-fit flex mt-5 gap-10">
                <label for="companyName" class="text-[1.2rem] w-1/2">
                  Company Name :<br />
                  <input
                    type="text"
                    id="companyName"
                    name="companyName"
                    value={formdata.companyName}
                    onChange={handleChange}
                    placeholder="Enter your Company Name"
                    class="px-4 py-2 border border-[#999ea3] rounded-md focus:outline-none w-full mt-3"
                  />
                </label>

                <label
                  for="companyCategory"
                  class="text-[1.2rem] h-full w-1/2 "
                >
                  Company Category :<br />
                  <select
                    id="companyCategory"
                    name="companyCategory"
                    value={formdata.companyCategory}
                    onChange={handleChange}
                    class="px-4 py-2 border border-[#999ea3] rounded-md focus:outline-none w-full mt-3"
                  >
                    <option value="">Select a category</option>
                    <option value="Retail">Retail</option>
                    <option value="Hospitality">Hospitality</option>
                    <option value="Technology">Technology</option>
                    <option value="Healthcare">Healthcare</option>
                    <option value="Finance">Finance</option>
                    <option value="Education">Education</option>
                    <option value="Agriculture">Agriculture</option>
                    <option value="Construction">Construction</option>
                    <option value="Manufacturing">Manufacturing</option>
                    <option value="Transportation">Transportation</option>
                    <option value="Media & Entertainment">
                      Media & Entertainment
                    </option>
                    <option value="Real Estate">Real Estate</option>
                    <option value="Legal Services">Legal Services</option>
                    <option value="Marketing & Advertising">
                      Marketing & Advertising
                    </option>
                    <option value="Consulting">Consulting</option>
                    <option value="E-commerce">E-commerce</option>
                  </select>
                </label>
                <label htmlFor="country" className="text-[1.2rem] h-full w-1/2">
                  Country :<br />
                  <select
                    id="country"
                    name="country"
                    value={formdata.country}
                    onChange={handleChange}
                    className="px-4 py-2 border border-[#999ea3] rounded-md focus:outline-none w-full mt-3"
                  >
                    <option value="">Select a country</option>
                    <option value="India">India</option>
                    <option value="United States">United States</option>
                    <option value="United Kingdom">United Kingdom</option>
                    <option value="Canada">Canada</option>
                    <option value="Australia">Australia</option>
                    <option value="Germany">Germany</option>
                    <option value="France">France</option>
                    <option value="Japan">Japan</option>
                    <option value="China">China</option>
                    <option value="Brazil">Brazil</option>
                    <option value="South Africa">South Africa</option>
                    <option value="Italy">Italy</option>
                    <option value="Russia">Russia</option>
                    <option value="Mexico">Mexico</option>
                    <option value="Singapore">Singapore</option>
                  </select>
                </label>
              </div>
              <br />
              <label htmlFor="address" className="text-[1.2rem] w-full mt-5 ">
                Company Address :<br />
                <input
                  type="text"
                  id="address"
                  name="address"
                  value={formdata.address}
                  onChange={handleChange}
                  placeholder="Company Address"
                  className="px-3 py-2 w-full mt-3 focus:outline-0 rounded-md border-1 border-[#999ea3]"
                />
              </label>
              <br />
              <label
                htmlFor="description"
                className="text-[1.2rem] w-full mt-5 "
              >
                Company Description :<br />
                <textarea
                  type="text"
                  id="description"
                  name="description"
                  value={formdata.description}
                  onChange={handleChange}
                  placeholder="Company Description"
                  className="px-3 py-2 w-full mt-3 focus:outline-0 rounded-md border-1 border-[#999ea3] min-h-12"
                />
              </label>
              <label htmlFor="message" className="text-[1.2rem] w-full mt-5 ">
                Message :<br />
                <textarea
                  type="text"
                  id="message"
                  name="message"
                  value={formdata.message}
                  onChange={handleChange}
                  placeholder="Message"
                  className="px-3 py-2 w-full mt-3 focus:outline-0 rounded-md border-1 border-[#999ea3] min-h-60"
                />
              </label>

              {!loader?<button
                className="px-6 py-3 mt-5 bg-red-400 hover:cursor-pointer"
                onClick={handleSubmit}
              >
                <b className="text-white font-bold text-[1.2rem]">Submit</b>
              </button>:
              <img src={Loader} className="w-10 h-10 ml-9 mt-5" />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contactpage;
