import React, { useEffect, useState, useContext, useRef } from "react";
import Sidebar from "../Navbar/Sidebar";
import { Route, Routes } from "react-router-dom";
import Home from "../../Pages/Home/Home";
import Videos from "../../Pages/Videos/Videos";
import { Context } from "../../Context/Context";

const Main = () => {
  const sideBarStyleMin = "absolute bottom-0 w-full h-[8vh]  box-border px-4";

  const {
    videoOpen,
    setVideoOpen,
    deviseMobile,
    mdSearchBar,
    scrollZero,
    setScrollZero,
    scrollContainer,
  } = useContext(Context);

  return (
    <main
      className={`relative ${
        (videoOpen && deviseMobile) || mdSearchBar ? "h-[100vh]" : "h-[92vh]"
      }   `}
    >
      <div
        ref={scrollContainer}
        className={` overflow-y-scroll lg:pb-[0] lg:px-0 lg:flex     h-[100%]   w-[100vw] hide-scrollbar ${
          !videoOpen ? "h-[92vh]" : ""
        } `}
      >
        <Routes>
          <Route path="/" element={<Home deviseMobile={deviseMobile} />} />
          <Route
            path="/video/:categoryId/:videoId"
            element={<Videos deviseMobile={deviseMobile} />}
          />
        </Routes>
      </div>

      {window.innerWidth < 1025 && !videoOpen && !mdSearchBar && (
        <Sidebar style={sideBarStyleMin} />
      )}
    </main>
  );
};

export default Main;
