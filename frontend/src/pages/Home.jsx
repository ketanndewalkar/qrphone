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
    <div className="w-full h-fit  border-black z-9 relative pt-40">
      <div className=" w-full h-full">
        <h1 className="w-full h-fit text-[40px] font-bold text-center pt-9 leading-12 md:text-[3.5rem] md:mt-8 md:leading-16">
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
        <div className="w-full pt-10 flex h-fit gap-2 justify-between px-15 md:flex-col">
          <p className="text-[20px] tracking-widest leading-9 text-[rgba(111, 111, 111, 1)] text-2xl mt-30 ml-5 h-fit  w-140 shrink-0 md:w-full md:mt-5 md:text-[2rem] md:text-[#7e7e7e] md:tracking-wider ">
            QRWalk is a smart street-level advertising platform that turns
            physical banners into interactive experiences.We place branded
            banners with QR codes in high-traffic locations.When people walk by,
            they scan and instantly connect with your digital platform app,
            website, product, or offer.
          </p>
          <div className="h-120  flex items-center justify-end w-50vw md:w-20vw relative">
            <img
              src={Landinglogo}
              className="h-full align-right w-auto md:w-full md:h-auto md:mt-30"
            />
            {/* <img
              src={Char}
              className="absolute bottom-0 right-[70%] scale-170 mb-4"
            />
            <img src={Qr} className="h-[20%] absolute bottom-70 right-[90%]" /> */}
          </div>
        </div>
        <h1 className="w-full font-bold text-red-500 mt-40 text-center text-4xl md:text-[4rem] md:mt-60">
          20+ Brands Join
        </h1>
        <div
          className="w-full h-50 flex justify-center items-center mt-10 gap-20 px-3 md:h-40 md:gap-6 md:overflow-y-scroll md:py-2"
          ref={move}
        >
          <img src={Eatzze} className="h-[94%] scale-90" />
          <img src={Eatclub} className="h-[94%] scale-90" />
          <img src={Internzze} className="h-[94%] scale-90" />
          <img src={Meesho} className="h-[94%] scale-90" />
          <img src={Mikava} className="h-[94%] scale-90" />
          <img src={Car} className="h-[94%] scale-90 bg-transparent" />
          <img src={Eatzze} className="h-[94%] scale-90" />
          <img src={Eatclub} className="h-[94%] scale-90" />
          <img src={Internzze} className="h-[94%] scale-90" />
          <img src={Meesho} className="h-[94%] scale-90" />
          <img src={Mikava} className="h-[94%] scale-90" />
          <img src={Car} className="h-[94%] scale-90 bg-transparent" />
          <img src={Eatzze} className="h-[94%] scale-90" />
          <img src={Eatclub} className="h-[94%] scale-90" />
          <img src={Internzze} className="h-[94%] scale-90" />
          <img src={Meesho} className="h-[94%] scale-90" />
          <img src={Mikava} className="h-[94%] scale-90" />
          <img src={Car} className="h-[94%] scale-90 bg-transparent" />
        </div>

        <div className="w-screen h-fit border-2 mt-30 relative bg-[#303030] overlfow-hidden">
          <div
            className="w-full h-full absolute top-0 left-[60%]"
            style={{
              backgroundImage: "radial-gradient(closest-side,#5b5d61,#303030)",
              zIndex: 6,
            }}
          ></div>

          <div className="w-full h-190 relative bg-transparent z-7 px-1">
            <h1 className="text-white text-3xl font-bold w-full text-center mt-15 md:text-[3.5rem]">
              Why QRWalk Works?
            </h1>
            <div className="bg-transparent min-h-screen p-10 mt-30">
              <div className="flex flex-wrap gap-5 w-[50rem]">
                {/* Step 1 */}
                <div className="bg-[#3a3a3a] rounded-lg p-4 basis-[30%] grow">
                  <h3 className="text-orange-400 text-xl font-bold mb-2">
                    Step 1: Place QR Codes
                  </h3>
                  <p className="text-white text-sm tracking-widest">
                    Set up QR codes at interesting points along a trail, path,
                    or indoor space like parks, museums, schools, or city
                    streets
                  </p>
                </div>

                {/* Step 3 */}
                <div className="bg-[#3a3a3a] rounded-lg p-4 basis-[63%] grow">
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

                {/* Step 4 */}
                <div className="bg-[#3a3a3a] rounded-lg p-4 basis-[30%] grow">
                  <h3 className="text-orange-400 text-xl font-bold mb-2">
                    Step 4: Learn & Enjoy
                  </h3>
                  <p className="text-white text-sm tracking-widest">
                    Visitors explore while learning, playing, or discovering new
                    things making every walk more fun and meaningful.
                  </p>
                </div>

                {/* Step 2 */}
                <div className="bg-[#3a3a3a] rounded-lg p-4 basis-[30%] grow">
                  <h3 className="text-orange-400 text-xl font-bold mb-2">
                    Step 2: Scan with a Phone
                  </h3>
                  <p className="text-white text-sm tracking-widest">
                    Visitors scan the QR codes using their smartphone camera. No
                    app is needed — just point and scan.
                  </p>
                </div>

                {/* Share & Come Back */}
                <div className="bg-[#3a3a3a] rounded-lg p-4 basis-[30%] grow">
                  <h3 className="text-orange-400 text-xl font-bold mb-2">
                    Share & Come Back
                  </h3>
                  <p className="text-white text-sm tracking-widest">
                    Visitors can share their experience on social media or with
                    friends and revisit the trail for new content, seasonal
                    updates, or special events.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <img
            src={Landinglogo1}
            className="absolute md:relative right-0 bottom-0 h-120 z-7 md:w-full md:h-auto"
          />
        </div>
        <h1 className="w-full font-bold text-red-500 mt-40 text-center text-4xl md:text-[3.5rem]">
          Ideal For
        </h1>
        <div className=" w-full h-80 mt-16 flex items-center justify-center gap-18 px-3 md:flex-col md:h-fit">
          <div className="w-70 md:w-[100vw] border-2 h-full md:h-[50vw] border-gray-400 flex items-center justify-center flex-col px-2 gap-6 bg-white rounded-2xl shadow-xl p-6 max-w-md m-4 transition-transform hover:shadow-2xl hover:-translate-y-1 md:max-w-none">
            <img src={Chat} className=" h-[30vw]" />
            <h1 className="font-bold text-3xl w-full text-center  md:text-[3rem]">
              Local-to-digital businesses
            </h1>
          </div>
          <div className="w-70 md:w-[100vw] border-2 h-full md:h-[50vw] border-gray-400 flex items-center justify-center flex-col px-2 gap-6 bg-white rounded-2xl shadow-xl p-6 max-w-md m-4 transition-transform hover:shadow-2xl hover:-translate-y-1 md:max-w-none">
            <img src={Pc} className=" h-[30vw]" />
            <h1 className="font-bold text-3xl w-full text-center  md:text-[3rem]">
              App Based Startup
            </h1>
          </div>
          <div className="w-70 md:w-[100vw] border-2 h-full md:h-[50vw] border-gray-400 flex items-center justify-center flex-col px-2 gap-6 bg-white rounded-2xl shadow-xl p-6 max-w-md m-4 transition-transform hover:shadow-2xl hover:-translate-y-1 md:max-w-none">
            <img src={Delivery} className=" h-[30vw]" />
            <h1 className="font-bold text-3xl w-full text-center  md:text-[3rem]">
              Food delivery & D2C brands
            </h1>
          </div>
          <div className="w-70 md:w-[100vw] border-2 h-full md:h-[50vw] border-gray-400 flex items-center justify-center flex-col px-2 gap-6 bg-white rounded-2xl shadow-xl p-6 max-w-md m-4 transition-transform hover:shadow-2xl hover:-translate-y-1 md:max-w-none">
            <img src={Ecomerce} className=" h-[30vw]" />
            <h1 className="font-bold text-3xl w-full text-center md:text-[3rem]">
              E-commerce platforms
            </h1>
          </div>
        </div>
        <h1 className="w-full font-bold text-red-500 mt-40 text-center text-4xl md:text-[3.5rem] md:mt-20">
          Launching Citys
        </h1>
        <div className="w-screen h-screen flex justify-center items-center mt-20 md:mt-8 md:w-full md:h-fit">
          <img src={Landinglogo4} className="h-screen md:w-full md:h-auto" />
        </div>
        <h1 className="w-full font-bold text-red-500 mt-40 text-center text-4xl md:text-[3.3rem] md:mt-20 ">
          Want Your Brand on the Next QRwalk?
        </h1>
        <div className="w-full px-30 h-fit flex pt-20 justify-between items-centers md:flex-col md:px-10 ">
          <p className="w-150 text-[1.2rem] tracking-wide mt-3 md:w-full md:text-[2rem]">
            Imagine your app or website being discovered not just online but
            right on the streets. With QRWalk, you get the power of physical
            visibility paired with instant digital engagement. Whether you're a
            startup looking for growth or an established brand wanting more
            eyes, QRWalk brings you closer to real users in real time.
            <br />
            <br />
            <div className="md:w-full md:flex md:justify-center md:items-center">
              <Link
                to="/contact-page"
                className="px-6 py-3 border-2 rounded-lg text-red-500 border-red-500 font-semibold hover:cursor-pointer md:px-20 md:py-5 md:text-[3rem] md:w-full md:text-center md:text-white md:bg-red-500"
              >
                Contact with Us
              </Link>
            </div>
          </p>
          <img src={Last} className="w-120 aspect-[16/9] md:w-full md:h-auto md:mt-20" />
        </div>
      </div>
    </div>
  );
};

export default Home;
