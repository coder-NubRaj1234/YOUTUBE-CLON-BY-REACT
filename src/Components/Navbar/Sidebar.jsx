import React, { useEffect, useState, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

//some images or icons for sidebar...

import home from "../../assets/home.png";
import game_icon from "../../assets/game_icon.png";
import automobiles from "../../assets/automobiles.png";
import sports from "../../assets/sports.png";
import entertainment from "../../assets/entertainment.png";
import teach from "../../assets/tech.png";
import music from "../../assets/music.png";
import blogs from "../../assets/blogs.png";
import news from "../../assets/news.png";
import jack from "../../assets/jack.png";
import simon from "../../assets/simon.png";
import tom from "../../assets/tom.png";
import megan from "../../assets/megan.png";
import cameron from "../../assets/cameron.png";
import shorts from "../../assets/shorts.png";
import subscribe from "../../assets/subscribeIcon.png";
import useIcon from "../../assets/jack.png";

import { Context } from "../../Context/Context";
import { width } from "@fortawesome/free-brands-svg-icons/fa42Group";
// import Sidebar from './Sidebar';

import {
  faBolt,
  faHome,
  faPlus,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

const Sidebar = ({ style }) => {
  const value = useContext(Context);

  const [width, setWidth] = useState("w-[5vw] h-[100%]");

  useEffect(() => {
    let sideBarWidth = value.sideBarState
      ? "w-[13vw] h-[100%]"
      : "w-[5vw] h-[100%] lg:px-2";
    setWidth(sideBarWidth);
  }, [value.sideBarState]);

  return (
    <>
      <div
        className={`  ${style ? style : ""} ${
          !value.deviseMobile ? width : ""
        } `}
      >
        <div className="shortCutKey flex justify-between text-[10px]  items-center h-[100%] lg:flex-col lg:justify-start gap-8  box-border lg:py-2  lg:font-semibold lg:text-[0.6rem] lg:gap-0">
          <div
            className={`flex flex-col justify-center items-center gap-1 cursor-pointer lg:hover:bg-gray-200 lg:w-[4.2rem] lg:rounded-xl ${
              value.sideBarState
                ? "flex-row text-[0.9rem] lg:w-[90%] lg:gap-5 lg:justify-start lg:pl-4 lg:py-2.5"
                : "lg:py-5 "
            }`}
          >
            <FontAwesomeIcon className="text-[1.1rem] " icon={faHome} />
            <p>Home</p>
          </div>
          <div
            className={`flex flex-col justify-center items-center gap-1 cursor-pointer lg:hover:bg-gray-200 lg:w-[4.2rem]  lg:rounded-xl  ${
              value.sideBarState
                ? "flex-row text-[0.9rem] lg:w-[90%] lg:gap-5 lg:justify-start lg:pl-4 lg:py-2.5"
                : "lg:py-5 "
            }`}
          >
            <FontAwesomeIcon className="text-[1.1rem] " icon={faBolt} />
            <p>Shorts</p>
          </div>
          {value.deviseMobile && (
            <div className="flex flex-col justify-center items-center gap-1 cursor-pointer bg-gray-200 w-[2rem] h-[2rem] rounded-full  relative left-1">
              <FontAwesomeIcon
                className="text-[1.1rem]  bg-gray-200"
                icon={faPlus}
              />
            </div>
          )}
          <div
            className={`flex flex-col justify-center items-center gap-1 cursor-pointer lg:hover:bg-gray-200 lg:w-[4.2rem]  lg:rounded-xl  ${
              value.sideBarState
                ? "flex-row text-[0.9rem] lg:w-[90%] lg:gap-5 lg:justify-start lg:pl-4 lg:py-2.5"
                : "lg:py-5 "
            }`}
          >
            <img src={subscribe} alt="subscibe-icon" className="w-5 " />
            <p>Subscriptions</p>
          </div>
          {!value.sideBarState && (
            <div className="flex flex-col justify-center items-center gap-1 cursor-pointer lg:hover:bg-gray-200 lg:w-[4.2rem] lg:py-5 lg:rounded-xl">
              <FontAwesomeIcon className="text-[1.1rem] " icon={faUser} />
              <p>You</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Sidebar;
