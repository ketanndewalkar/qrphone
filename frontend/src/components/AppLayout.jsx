import React, { useContext } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import Home from '../pages/Home'
import Contactpage from '../pages/Contactpage'
import { Outlet } from 'react-router-dom'

import { AppContext } from '../context/context'
import { RxCross1 } from "react-icons/rx";
import Pop from './pop';



const AppLayout = () => {
  const {popshow , setpopshow , status } = useContext(AppContext);
  console.log(popshow);
  return (
    <div className="w-full h-screen relative">
      {popshow ? <><Pop status={status} handlepop={setpopshow}/></>:<></>}
      <div
        className="w-[1700px] h-[1500px] absolute top-[-30%] left-[55%]"
        style={{
          backgroundImage: 'radial-gradient(closest-side,rgba(255, 139, 139, 1),white)',
          zIndex: 0,
        }}
      ></div>
      <Navbar/>
      
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default AppLayout
