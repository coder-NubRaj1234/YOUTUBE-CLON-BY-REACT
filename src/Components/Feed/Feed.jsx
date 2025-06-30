import React, { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import chinal_Image from "../../assets/tom.png";
import { Link } from "react-router-dom";
import { Context } from "../../Context/Context";

import thumbane1 from "../../assets/thumbnail1.png";
import thumbane2 from "../../assets/thumbnail2.png";
import thumbane3 from "../../assets/thumbnail3.png";
import thumbane4 from "../../assets/thumbnail4.png";
import thumbane5 from "../../assets/thumbnail5.png";
import thumbane6 from "../../assets/thumbnail6.png";
import thumbane7 from "../../assets/thumbnail7.png";
import thumbane8 from "../../assets/thumbnail8.png";

const Feed = () => {
  const { deviseMobile, videoOpen, setVideoOpen } = useContext(Context);
  


  return (
    <div className=" sm:justify-center sm:items-center   flex lg:gap-4  flex-wrap gap-1 w-[100%] sm:gap-2  sm:pt-5 ">
      <Link
        to={`video`}
        className="lg:w-[30%] lg:h-auto sm:w-[47%] cursor-pointer   w-[100vw] min-h-[17rem]  "
        onClick={() => {
          setVideoOpen(true);
        }}
      >
        <img
          src={thumbane1}
          alt={thumbane1}
          className=" lg:h-auto w-[100vw] h-[75%]   sm:rounded-xl"
        />
        <div className="flex  gap-5 px-2 py-2 ">
          <img
            src={chinal_Image}
            alt="chinal_img"
            className="w-8 h-8 rounded-full"
          />
          <div className="py- box-border lg:flex lg:flex-col gap-0.5">
            <h2 className="lg:text-[1rem] lg:font-medium font-Roboto text-sm ">
              Create youtube Clone using react and tailwincdcss .
            </h2>
            <p className="lg:text-[0.9rem]  lg:font-semibold  font-medium  text-[0.8rem] text-[#555] lg:flex flex-col">
              <span className=" ">Greate Stack</span>{" "}
              <span className="italic">
                {deviseMobile ? <>&bull;</> : ""} 200k &bull; 13 hours ago
              </span>
            </p>
          </div>
        </div>
      </Link>
      <div className="lg:w-[30%] lg:h-auto sm:w-[47%] cursor-pointer   w-[100vw] min-h-[17rem]  ">
        <img
          src={thumbane2}
          alt={thumbane2}
          className=" lg:h-auto w-[100vw] h-[75%]   sm:rounded-xl"
        />
        <div className="flex  gap-5 px-2 py-2 items-center ">
          <img
            src={chinal_Image}
            alt="chinal_img"
            className="w-8 h-8 rounded-full"
          />
          <div className="py- box-border lg:flex lg:flex-col gap-0.5">
            <h2 className="lg:text-[1rem] lg:font-medium font-Roboto text-sm ">
              Create youtube Clone using react and tailwincdcss .
            </h2>
            <p className="lg:text-[0.9rem]  lg:font-semibold  font-medium  text-[0.8rem] text-[#555] lg:flex flex-col">
              <span className=" ">Greate Stack</span>{" "}
              <span className="italic">
                {deviseMobile ? <>&bull;</> : ""} 200k &bull; 13 hours ago
              </span>
            </p>
          </div>
        </div>
      </div>
      <div className="lg:w-[30%] lg:h-auto sm:w-[47%] cursor-pointer   w-[100vw] min-h-[17rem]  ">
        <img
          src={thumbane3}
          alt={thumbane3}
          className=" lg:h-auto w-[100vw] h-[75%]   sm:rounded-xl"
        />
        <div className="flex  gap-5 px-2 py-2 items-center ">
          <img
            src={chinal_Image}
            alt="chinal_img"
            className="w-8 h-8 rounded-full"
          />
          <div className="py- box-border lg:flex lg:flex-col gap-0.5">
            <h2 className="lg:text-[1rem] lg:font-medium font-Roboto text-sm ">
              Create youtube Clone using react and tailwincdcss .
            </h2>
            <p className="lg:text-[0.9rem]  lg:font-semibold  font-medium  text-[0.8rem] text-[#555] lg:flex flex-col">
              <span className=" ">Greate Stack</span>{" "}
              <span className="italic">
                {deviseMobile ? <>&bull;</> : ""} 200k &bull; 13 hours ago
              </span>
            </p>
          </div>
        </div>
      </div>
      <div className="lg:w-[30%] lg:h-auto sm:w-[47%] cursor-pointer   w-[100vw] min-h-[17rem]  ">
        <img
          src={thumbane4}
          alt={thumbane4}
          className=" lg:h-auto w-[100vw] h-[75%]   sm:rounded-xl"
        />
        <div className="flex  gap-5 px-2 py-2 items-center ">
          <img
            src={chinal_Image}
            alt="chinal_img"
            className="w-8 h-8 rounded-full"
          />
          <div className="py- box-border lg:flex lg:flex-col gap-0.5">
            <h2 className="lg:text-[1rem] lg:font-medium font-Roboto text-sm ">
              Create youtube Clone using react and tailwincdcss .
            </h2>
            <p className="lg:text-[0.9rem]  lg:font-semibold  font-medium  text-[0.8rem] text-[#555] lg:flex flex-col">
              <span className=" ">Greate Stack</span>{" "}
              <span className="italic">
                {deviseMobile ? <>&bull;</> : ""} 200k &bull; 13 hours ago
              </span>
            </p>
          </div>
        </div>
      </div>
      <div className="lg:w-[30%] lg:h-auto sm:w-[47%] cursor-pointer   w-[100vw] min-h-[17rem]  ">
        <img
          src={thumbane5}
          alt={thumbane5}
          className=" lg:h-auto w-[100vw] h-[75%]   sm:rounded-xl"
        />
        <div className="flex  gap-5 px-2 py-2 items-center ">
          <img
            src={chinal_Image}
            alt="chinal_img"
            className="w-8 h-8 rounded-full"
          />
          <div className="py- box-border lg:flex lg:flex-col gap-0.5">
            <h2 className="lg:text-[1rem] lg:font-medium font-Roboto text-sm ">
              Create youtube Clone using react and tailwincdcss .
            </h2>
            <p className="lg:text-[0.9rem]  lg:font-semibold  font-medium  text-[0.8rem] text-[#555] lg:flex flex-col">
              <span className=" ">Greate Stack</span>{" "}
              <span className="italic">
                {deviseMobile ? <>&bull;</> : ""} 200k &bull; 13 hours ago
              </span>
            </p>
          </div>
        </div>
      </div>
      <div className="lg:w-[30%] lg:h-auto sm:w-[47%] cursor-pointer   w-[100vw] min-h-[17rem]  ">
        <img
          src={thumbane6}
          alt={thumbane6}
          className=" lg:h-auto w-[100vw] h-[75%]   sm:rounded-xl"
        />
        <div className="flex  gap-5 px-2 py-2 items-center ">
          <img
            src={chinal_Image}
            alt="chinal_img"
            className="w-8 h-8 rounded-full"
          />
          <div className="py- box-border lg:flex lg:flex-col gap-0.5">
            <h2 className="lg:text-[1rem] lg:font-medium font-Roboto text-sm ">
              Create youtube Clone using react and tailwincdcss .
            </h2>
            <p className="lg:text-[0.9rem]  lg:font-semibold  font-medium  text-[0.8rem] text-[#555] lg:flex flex-col">
              <span className=" ">Greate Stack</span>{" "}
              <span className="italic">
                {deviseMobile ? <>&bull;</> : ""} 200k &bull; 13 hours ago
              </span>
            </p>
          </div>
        </div>
      </div>
      <div className="lg:w-[30%] lg:h-auto sm:w-[47%] cursor-pointer   w-[100vw] min-h-[17rem]  ">
        <img
          src={thumbane7}
          alt={thumbane7}
          className=" lg:h-auto w-[100vw] h-[75%]   sm:rounded-xl"
        />
        <div className="flex  gap-5 px-2 py-2 items-center ">
          <img
            src={chinal_Image}
            alt="chinal_img"
            className="w-8 h-8 rounded-full"
          />
          <div className="py- box-border lg:flex lg:flex-col gap-0.5">
            <h2 className="lg:text-[1rem] lg:font-medium font-Roboto text-sm ">
              Create youtube Clone using react and tailwincdcss .
            </h2>
            <p className="lg:text-[0.9rem]  lg:font-semibold  font-medium  text-[0.8rem] text-[#555] lg:flex flex-col">
              <span className=" ">Greate Stack</span>{" "}
              <span className="italic">
                {deviseMobile ? <>&bull;</> : ""} 200k &bull; 13 hours ago
              </span>
            </p>
          </div>
        </div>
      </div>
      <div className="lg:w-[30%] lg:h-auto sm:w-[47%] cursor-pointer   w-[100vw] min-h-[17rem]  ">
        <img
          src={thumbane8}
          alt={thumbane8}
          className=" lg:h-auto w-[100vw] h-[75%]   sm:rounded-xl"
        />
        <div className="flex  gap-5 px-2 py-2 items-center ">
          <img
            src={chinal_Image}
            alt="chinal_img"
            className="w-8 h-8 rounded-full"
          />
          <div className="py- box-border lg:flex lg:flex-col gap-0.5">
            <h2 className="lg:text-[1rem] lg:font-medium font-Roboto text-sm ">
              Create youtube Clone using react and tailwincdcss .
            </h2>
            <p className="lg:text-[0.9rem]  lg:font-semibold  font-medium  text-[0.8rem] text-[#555] lg:flex flex-col">
              <span className=" ">Greate Stack</span>{" "}
              <span className="italic">
                {deviseMobile ? <>&bull;</> : ""} 200k &bull; 13 hours ago
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feed;
