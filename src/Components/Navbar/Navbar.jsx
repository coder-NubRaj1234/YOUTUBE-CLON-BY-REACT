import React , {useContext , useEffect, useRef, useState} from "react";
import youtubeImg from "../../assets/logo.png";
import castIcon from "../../assets/cast.png";
import inofacationIcon from "../../assets/notification.png";
import searchIcon from "../../assets/search.png";
import menu from "../../assets/menu.png"
import uploadIcon from "../../assets/upload.png"
import moreIcon from "../../assets/more.png"
import profileIcon from "../../assets/jack.png"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faBell,
  
} from "@fortawesome/free-solid-svg-icons";

import { faArrowAltCircleLeft } from "@fortawesome/free-regular-svg-icons";
import { Context } from "../../Context/Context";

const Navbar = () => {

  const { deviseMobile, sideBarState, setsideBarState } = useContext(Context);
  const [mdSearchBar , setMdSearchBar] = useState(false);
  const inputRef = useRef();


useEffect(() =>{
  if(mdSearchBar && inputRef.current){
    inputRef.current.focus();
  }
} , [mdSearchBar]);

  return (
    <nav
      className={`relative box-shasow-custom lg:px-8  w-full  flex justify-between px-4 items-center ${
        mdSearchBar ? "" : "h-[8vh]"
      } z-11 `}
    >
      {mdSearchBar && (
        <div className="flex items-start pt-6 justify-between w-full gap-5 px-4 z-10 bg-white absolute top-0 left-0 h-[100vh]">
          <div className="flex w-full gap-5 items-center">
            <FontAwesomeIcon
              className="text-[1.8rem] font-light "
              icon={faArrowAltCircleLeft}
              onClick={() => {
                setMdSearchBar(false);
              }}
            />
            <input
              type="text"
              placeholder="Search"
              className="border border-gray-400 flex-1 px-4 py-1.5 rounded-2xl focus:outline-1"
              ref={inputRef}
            />
          </div>
        </div>
      )}

      {!mdSearchBar && (
        <>
          <div className="left">
            <div className=" flex items-center gap-5">
              {!deviseMobile && (
                <img
                  className="w-[1.5rem] cursor-pointer hover:bg-gray-200  h-[1.5rem]  rounded-xl p-2 box-content"
                  src={menu}
                  alt="castIcon"
                  onClick={() => {
                    setsideBarState((prive) => !prive);
                    console.log(sideBarState, "sideBarState");
                  }}
                />
              )}
              <img src={youtubeImg} alt="youtube-icon" className="w-[7.5rem]" />
            </div>
          </div>

          {!deviseMobile && (
            <div className="center w-[40%] h-full flex items-center">
              <div className="search   flex border-2 w-[100%] pl-4  border-[#d3d3d3]  h-[65%] rounded-3xl items-center ">
                <input
                  type="text"
                  placeholder="Search"
                  className="flex-1 outline-none"
                />
                <div className="h-full w-[10%]  box-content hover:bg-[#f1eded] bg-[#f8f8f8] border border-l border-[#d3d3d3] rounded-r-3xl flex justify-center items-center">
                  <img
                    src={searchIcon}
                    alt="searchIcon"
                    className="w-5 h-5 pl-5 box-content cursor-pointer pr-3"
                  />
                </div>
              </div>
            </div>
          )}

          <div className="left">
            <div className="lg:gap-6 flex gap-5 h-full justify-center items-center">
              {!deviseMobile && (
                <img
                  className="w-[1.5rem] cursor-pointer lg:hover:bg-gray-200 lg:p-2 lg:box-content rounded-full"
                  src={uploadIcon}
                  alt="castIcon"
                />
              )}
              {!deviseMobile && (
                <img
                  className="w-[1.5rem]  cursor-pointer lg:hover:bg-gray-200 lg:p-2 lg:box-content rounded-full"
                  src={moreIcon}
                  alt="castIcon"
                />
              )}

              {deviseMobile && (
                <img
                  className="w-[1.7rem] h-[1.7rem] cursor-pointer lg:hover:bg-gray-200 lg:p-2 lg:box-content rounded-full"
                  src={castIcon}
                  alt="castIcon"
                />
              )}
              <img
                className="w-[1.6rem] h-[1.6rem] lg:w-[1.5rem] lg:h-[1.5rem] cursor-pointer lg:hover:bg-gray-200 lg:p-2 lg:box-content rounded-full"
                src={inofacationIcon}
                alt="inofacationIcon"
              />

              {deviseMobile && (
                <img
                  className="w-[1.4rem] h-[1.4rem] cursor-pointer lg:hover:bg-gray-200 lg:p-2 lg:box-content lg:rounded-full"
                  src={searchIcon}
                  alt="searchIcon"
                  onClick={() => {
                    setMdSearchBar(true);
                  }}
                />
              )}
              {!deviseMobile && (
                <img
                  className="w-[1.5rem]  cursor-pointer  lg:hover:bg-gray-200 lg:p-2 lg:box-content lg:rounded-full"
                  src={profileIcon}
                  alt="searchIcon"
                />
              )}
            </div>
          </div>
        </>
      )}
    </nav>
  );
};

export default Navbar;
