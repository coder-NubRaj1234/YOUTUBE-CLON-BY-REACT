import React , {useEffect, useState  , useContext} from "react";
import Sidebar from "../Navbar/Sidebar";
import { Route , Routes } from "react-router-dom";
import Home from "../../Pages/Home/Home";
import Videos from "../../Pages/Videos/Videos";
import { Context } from "../../Context/Context";


const Main = ({ deviseMobile }) => {
  const sideBarStyleMin = "absolute bottom-0 w-full h-[8vh]  box-border px-4";

  const { videoOpen, setVideoOpen } = useContext(Context);
  



  return (
    <main className=" relative h[92vh] bg-amber-700 z-12 ">
      <div
        className={`lg:pb-[0] lg:px-0 lg:flex  bg-[#f9f9f9]   w-full   w-[100vw] overflow-y-scroll hide-scrollbar ${
          !videoOpen ? "h-[92vh]" : ""
        } `}
      >
        <Routes>
          <Route path="/" element={<Home deviseMobile={deviseMobile} />} />
          <Route
            path="/video"
            element={<Videos deviseMobile={deviseMobile} />}
          />
        </Routes>
      </div>

      {window.innerWidth < 1025 && !videoOpen && (
        <Sidebar style={sideBarStyleMin} />
      )}
    </main>
  );
};

export default Main;
