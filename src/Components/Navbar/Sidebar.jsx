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
  faMusic,
  faFire,
  faGamepad,
  faTrophy,
} from "@fortawesome/free-solid-svg-icons";

const Sidebar = ({ style }) => {
  const { sideBarState, deviseMobile, category, setCategory } =
    useContext(Context);
  const [width, setWidth] = useState("w-[5vw] h-[100%]");

  useEffect(() => {
    let sideBarWidth = sideBarState ? "  min-w-[10rem] h-[100%] " : "min-w-[5vw] h-[100%] ";
    setWidth(sideBarWidth);
  }, [sideBarState]);

  return (
    <>
      <div
        className={`  ${style ? style : ""} ${
          !deviseMobile ? width : ""
        } lg:px-2  z-100 bg-white box-shasow-custom`}
      >
        <div className="shortCutKey flex justify-between text-[0.8rem]  items-center h-[100%] lg:flex-col lg:justify-start gap-8  box-border lg:py-2  lg:font-semibold lg:text-[0.6rem] lg:gap-0">
          <div
            onClick={() => setCategory(0)}
            className={`flex flex-col justify-center items-center gap-1 cursor-pointer lg:hover:bg-gray-200 lg:w-[4.2rem] lg:rounded-xl ${
              category === 0 ? "active" : ""
            } ${
              sideBarState
                ? "flex-row text-[0.9rem] lg:w-[90%] lg:gap-5 lg:justify-start lg:pl-4 lg:py-2.5"
                : "lg:py-5 "
            }`}
          >
            <FontAwesomeIcon
              className="text-[1.3rem]  lg:text-[1.1rem] "
              icon={faHome}
            />
            <p>Home</p>
          </div>
          <div
            onClick={() => setCategory(0)}
            className={`flex flex-col justify-center items-center gap-1 cursor-pointer lg:hover:bg-gray-200 lg:w-[4.2rem]  lg:rounded-xl   ${
              sideBarState
                ? "flex-row text-[0.9rem] lg:w-[90%] lg:gap-5 lg:justify-start lg:pl-4 lg:py-2.5"
                : "lg:py-5 "
            }`}
          >
            <FontAwesomeIcon
              className="text-[1.3rem] lg:text-[1.1rem]  "
              icon={faBolt}
            />
            <p>Shorts</p>
          </div>

          <div
            onClick={() => setCategory(0)}
            className={`flex flex-col justify-center items-center gap-1 cursor-pointer lg:hover:bg-gray-200 lg:w-[4.2rem]  lg:rounded-xl ${
              sideBarState
                ? "flex-row text-[0.9rem] lg:w-[90%] lg:gap-5 lg:justify-start lg:pl-4 lg:py-2.5  lg:pr-9"
                : "lg:py-5"
            }`}
          >
            <img src={subscribe} alt="subscibe-icon" className="w-6.5 lg:w-5" />
            <p>Subscriptions</p>
          </div>
          {!sideBarState && (
            <div
              onClick={() => setCategory(0)}
              className="flex flex-col justify-center items-center gap-1 cursor-pointer lg:hover:bg-gray-200 lg:w-[4.2rem] lg:py-5 lg:rounded-xl"
            >
              <FontAwesomeIcon
                className="text-[1.3rem] lg:text-[1.1rem]  "
                icon={faUser}
              />
              <p>You</p>
            </div>
          )}

          {sideBarState && (
            <>
              <p className="mt-5 w-full py-[0.3px] bg-gray-300"></p>
              <div className="w-full pt-5 ">
                <h2 className="text-lg py-2 pl-4 font font-Roboto font-semibold">
                  Explore
                </h2>
                <div className="text-[0.8rem] w-full flex flex-col items-center">
                  <div
                    onClick={() => setCategory(0)}
                    className={`flex text-[0.9rem] lg:w-[100%] lg:gap-5 lg:justify-start lg:pl-4 lg:py-2.5 cursor-pointer lg:hover:bg-gray-200  lg:rounded-xl `}
                  >
                    <FontAwesomeIcon
                      className="text-[1.3rem] lg:text-[1.1rem]  "
                      icon={faFire}
                    />
                    <p>Tranding</p>
                  </div>
                  <div
                    onClick={() => setCategory(10)}
                    className={`flex text-[0.9rem] lg:w-[100%] lg:gap-5 lg:justify-start lg:pl-4 lg:py-2.5 cursor-pointer lg:hover:bg-gray-200  lg:rounded-xl ${category === 10 ? "active" :""}`}
                  >
                    <FontAwesomeIcon
                      className="text-[1.3rem] lg:text-[1.1rem]  "
                      icon={faMusic}
                    />
                    <p>Musice</p>
                  </div>
                  <div
                    onClick={() => setCategory(20)}
                    className={`flex text-[0.9rem] lg:w-[100%] lg:gap-5 lg:justify-start lg:pl-4 lg:py-2.5 cursor-pointer lg:hover:bg-gray-200  lg:rounded-xl ${category === 20 ? "active" :""}`}
                  >
                    <FontAwesomeIcon
                      className="text-[1.3rem] lg:text-[1.1rem]  "
                      icon={faGamepad}
                    />
                    <p>Gaming</p>
                  </div>
                  <div
                    onClick={() => setCategory(17)}
                    className={`flex text-[0.9rem] lg:w-[100%] lg:gap-5 lg:justify-start lg:pl-4 lg:py-2.5 cursor-pointer lg:hover:bg-gray-200  lg:rounded-xl ${category === 17 ? "active" :""}`}
                  >
                    <FontAwesomeIcon
                      className="text-[1.3rem] lg:text-[1.1rem]  "
                      icon={faTrophy}
                    />
                    <p>Sports</p>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Sidebar;
