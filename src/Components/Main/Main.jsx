import React , {useState} from "react";
import Sidebar from "../Navbar/Sidebar";
import { Route , Routes } from "react-router-dom";
import Home from "../../Pages/Home/Home";
import Videos from "../../Pages/Videos/Videos";

const Main = () => {
  const sideBarStyleMin = "absolute bottom-0 w-full h-[8vh]  box-border px-4";


  return (
    <main className=" relative h[92vh] ">
      <div className="lg:pb-[0] lg:px-0 lg:flex    h-[92vh] w-full   w-[100vw] overflow-y-scroll hide-scrollbar pb-[8vh]">

        {window.innerWidth > 1025 && <Sidebar  />}

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/video" element={<Videos />} />
        </Routes>
      </div>

      {window.innerWidth < 1025 && <Sidebar style={sideBarStyleMin} />}
    </main>
  );
};

export default Main;
