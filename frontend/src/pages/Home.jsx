import React, { useEffect, useRef } from "react";
import Landinglogo from "../assests/landinglogo.png";
import Landinglogo1 from "../assests/landinglogo1.png";
import Char from "../assests/image1.png";
import Qr from "../assests/image.png";
import Eatzze from "../assests/eatzze.png";
import Eatclub from "../assests/eatclub.png";
import Internzze from "../assests/internzze.png";
import Meesho from "../assests/meesho.png";
import Mikava from "../assests/mikava.png";
import Car from "../assests/car.png";
import Pc from "../assests/pc.png";
import Ecomerce from "../assests/ecomerce.png";
import Delivery from "../assests/delivery.png";
import Chat from "../assests/chat.png";
import Last from "../assests/last.png";
import { Link } from "react-router-dom";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Landinglogo3 from "../assests/landinglogo3.png";
import Landinglogo4 from "../assests/landinglogo4.png";

const Home = () => {
  const move = useRef(null);
  useEffect(() => {
    const handleWheel = (event) => {
      if (event.deltaY > 0) {
        gsap.to(move.current, {
          duration: 10,
          repeat: -1,
          transform: "translateX(-100%)",
          delay: 0.5,
          // right:"-100%",
          ease: "none",
        });
      } else {
        gsap.to(move.current, {
          duration: 10,
          delay: 0.5,
          repeat: -1,
          transform: "translateX(100%)",
          ease: "none",
        });
      }
    };

    window.addEventListener("wheel", handleWheel);

    // Cleanup when the component unmounts
    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  }, []);

  return (
    <div className="w-full h-fit  border-black z-9 relative pt-25">
      <div className=" w-full h-full">
        <h1 className="w-full h-fit text-[40px] font-bold text-center pt-9 leading-12 ">
          "Where the Streets Meet the Screen
          <br />
          <b className="bg-gradient-to-r from-red-500 to-gray-500 bg-clip-text text-transparent font-semibold">
            Scan
          </b>
          ,{" "}
          <b className="bg-gradient-to-r from-red-500 to-gray-500 bg-clip-text text-transparent font-semibold">
            Engage
          </b>
          ,{" "}
          <b className="bg-gradient-to-r from-red-500 to-gray-500 bg-clip-text text-transparent font-semibold">
            Convert
          </b>
          "
        </h1>
        <div className="w-full pt-10 flex  border-black h-fit gap-2 justify-between px-15">
          <p className="text-[20px] tracking-widest leading-9 text-[rgba(111, 111, 111, 1)] text-2xl mt-30 ml-5 h-fit  w-140 shrink-0">
            QRWalk is a smart street-level advertising platform that turns
            physical banners into interactive experiences.We place branded
            banners with QR codes in high-traffic locations.When people walk by,
            they scan and instantly connect with your digital platform app,
            website, product, or offer.
          </p>
          <div className="h-120  flex items-center justify-end w-50vw md:w-20vw relative">
            <img src={Landinglogo} className="h-full align-right" />
            <img
              src={Char}
              className="absolute bottom-0 right-[70%] scale-170 mb-4"
            />
            <img src={Qr} className="h-[20%] absolute bottom-70 right-[90%]" />
          </div>
        </div>
        <h1 className="w-full font-bold text-red-500 mt-40 text-center text-4xl">
          20+ Brands Join
        </h1>
        <div
          className="w-full h-50 flex items-center mt-10 gap-20 px-3"
          ref={move}
        >
          <img src={Eatzze} className="h-[94%] scale-90" />
          <img src={Eatclub} className="h-[94%] scale-90" />
          <img src={Internzze} className="h-[94%] scale-90" />
          <img src={Meesho} className="h-[94%] scale-90" />
          <img src={Mikava} className="h-[94%] scale-90" />
          <img src={Car} className="h-[94%] scale-90 bg-transparent" />
        </div>
        <div className="w-screen h-screen flex justify-center items-center mt-20 drop-shadow-[0_6px_6px_rgba(0,0,0,0.15)]" >
          <img src={Landinglogo3} className="h-screen w-full"/>
        </div>
        <div className="w-screen h-fit border-2 mt-30 relative bg-[#303030] overlfow-hidden">
          <img
            src={Landinglogo1}
            className="absolute right-0 bottom-0 h-120 z-7"
          />
          <div
            className="w-full h-full absolute top-0 left-[60%]"
            style={{
              backgroundImage: "radial-gradient(closest-side,#5b5d61,#303030)",
              zIndex: 6,
            }}
          ></div>
          <div className="w-full h-190 relative bg-transparent z-7 px-1">
            <h1 className="text-white text-3xl font-bold w-full text-center mt-15">
              Why QRWalk Works?
            </h1>
            <div className="bg-transparent min-h-screen p-10 mt-30">
              <div className="grid grid-cols-3 grid-rows-3 gap-5 w-200">
                {/* Cost-Effective */}
                <div className="bg-[#3a3a3a] rounded-lg p-4 col-span-1 row-span-1">
                  <h3 className="text-orange-400 text-xl font-bold mb-2">
                    Step 1: Place QR Codes
                  </h3>
                  <p className="text-white text-sm tracking-widest">
                    Set up QR codes at interesting points along a trail, path,
                    or indoor space like parks, museums, schools, or city
                    streets
                  </p>
                </div>

                {/* High Visibility */}
                <div className="bg-[#3a3a3a] rounded-lg p-4 col-span-1 row-span-2">
                  <h3 className="text-orange-400 text-xl font-bold mb-2">
                    Step 3: Show Engaging Content
                  </h3>
                  <p className="text-white text-sm tracking-widest text-center leading-10">
                    Each QR code opens something interactive like:
                    <br />
                    A video or audio guide
                    <br />
                    A short story or fun fact
                    <br />
                    A game or quiz
                    <br />
                    A coupon or reward
                    <br />A map or direction
                  </p>
                </div>

                {/* Real-Time Analytics */}
                <div className="bg-[#3a3a3a] rounded-lg p-4 col-span-1 row-span-1">
                  <h3 className="text-orange-400 text-xl font-bold mb-2">
                    Step 4: Learn & Enjoy

                  </h3>
                  <p className="text-white text-sm tracking-widest">
                    Visitors explore while learning, playing, or discovering new things making every walk more fun and meaningful.
                  </p>
                </div>

                {/* CAC */}
                <div className="bg-[#3a3a3a] rounded-lg p-4 col-span-1 row-span-1">
                  <h3 className="text-orange-400 text-xl font-bold mb-2">
                    Step 2: Scan with a Phone
                  </h3>
                  <p className="text-white text-sm tracking-widest">
                    Visitors scan the QR codes using their smartphone camera. No
                    app is needed — just point and scan.
                  </p>
                </div>

                {/* Multi-brand Banners */}
                <div className="bg-[#3a3a3a] rounded-lg p-4 col-span-1 row-span-1">
                  <h3 className="text-orange-400 text-xl font-bold mb-2">
                    Share & Come Back
                  </h3>
                  <p className="text-white text-sm tracking-widest">
                    Visitors can share their experience on social media or with friends and revisit the trail for new content, seasonal updates, or special events.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <h1 className="w-full font-bold text-red-500 mt-40 text-center text-4xl">
          Ideal For
        </h1>
        <div className=" w-full h-80 mt-16 flex items-center justify-center gap-18 px-3">
          <div className="w-70 border-2 h-full border-gray-400 flex items-center justify-center flex-col px-2 gap-6 bg-white rounded-2xl shadow-xl p-6 max-w-md m-4 transition-transform hover:shadow-2xl hover:-translate-y-1">
            <img src={Pc} className="" />
            <h1 className="font-bold text-3xl w-full text-center">
              App Based Startup
            </h1>
          </div>
          <div className="w-70 border-2 h-full border-gray-400 flex items-center justify-center flex-col px-2 gap-6 bg-white rounded-2xl shadow-xl p-6 max-w-md m-4 transition-transform hover:shadow-2xl hover:-translate-y-1">
            <img src={Ecomerce} className="" />
            <h1 className="font-bold text-3xl w-full text-center">
              E-commerce platforms
            </h1>
          </div>
          <div className="w-70 border-2 h-full border-gray-400 flex items-center justify-center flex-col px-2 gap-6 bg-white rounded-2xl shadow-xl p-6 max-w-md m-4 transition-transform hover:shadow-2xl hover:-translate-y-1">
            <img src={Delivery} className="" />
            <h1 className="font-bold text-3xl w-full text-center">
              Food delivery & D2C brands
            </h1>
          </div>
          <div className="w-70 border-2 h-full border-gray-400 flex items-center justify-center flex-col px-2 gap-6 bg-white rounded-2xl shadow-xl p-6 max-w-md m-4 transition-transform hover:shadow-2xl hover:-translate-y-1">
            <img src={Chat} className="" />
            <h1 className="font-bold text-3xl w-full text-center">
              Local-to-digital businesses
            </h1>
          </div>
        </div>
        <div className="w-screen h-screen flex justify-center items-center mt-20" >
          <img src={Landinglogo4} className="h-screen"/>
        </div>
        <h1 className="w-full font-bold text-red-500 mt-40 text-center text-4xl">
          Want Your Brand on the Next QRwalk?
        </h1>
        <div className="w-full px-30 h-fit flex pt-20 justify-between items-centers">
          <p className="w-150 text-[1.2rem] tracking-wide mt-3">
            Imagine your app or website being discovered not just online but
            right on the streets. With QRWalk, you get the power of physical
            visibility paired with instant digital engagement. Whether you're a
            startup looking for growth or an established brand wanting more
            eyes, QRWalk brings you closer to real users in real time.
            <br />
            <br />
            <Link
              to="/contact-page"
              className="px-6 py-3 border-2 rounded-lg text-red-500 border-red-500 font-semibold hover:cursor-pointer"
              
            >
              Contact with Us
            </Link>
          </p>
          <img src={Last} className="w-120 aspect-[16/9]" />
        </div>
      </div>
    </div>
  );
};

export default Home;
