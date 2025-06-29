import React , {useContext}from 'react'

import thumbnail1     from "../../assets/thumbnail1.png";
import thumbnail2     from "../../assets/thumbnail2.png";
import thumbnail3     from "../../assets/thumbnail3.png";
import thumbnail4     from "../../assets/thumbnail4.png";
import thumbnail5     from "../../assets/thumbnail5.png";
import thumbnail6     from "../../assets/thumbnail6.png";
import thumbnail7     from "../../assets/thumbnail7.png";
import thumbnail8     from "../../assets/thumbnail8.png";


import profileImg     from "../../assets/jack.png";

import { Context } from "../../Context/Context";

const Recommented = () => {

      const { deviseMobile } = useContext(Context);
  return (
    <div className="recommented md:basis-[33%] hide-scrollbar  md:h-[100%]  md:overflow-y-scroll w-[100vw] flex flex-col gap-4 ">
   
      <div className=" md:flex gap-2 w-[100%] cursor-pointer">
        <div className="left  md:w-[50%] w-[100%]">
          <img src={thumbnail1} alt="thumbnal1" className="md:rounded-lg w-[100%]" />
        </div>
        <div className="right-into md:flex-1  flex p-2 gap-3">
          {deviseMobile && (
            <div className="img">
              <img
                src={profileImg}
                alt="profile_img"
                className=" w-[2.5rem] rounded-full  "
              />
            </div>
          )}
          <div className="info">
            <h2 className="md:text-[0.9rem] font-semibold text-[1rem] font-Roboto ">
              How to make youtube cline using React js in 2025..
            </h2>
            <div className=" md:flex-col md:gap-0 md:pt-2 flex gap-2 text-[0.8rem] font-inter text-[#5e5e5e]">
              <p>Greate Stack</p>
              <p>
                <span>10M</span> <span>views</span> &bull;{" "}
                <span>1 year ago</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className=" md:flex gap-2 w-[100%] cursor-pointer">
        <div className="left  md:w-[50%]">
          <img src={thumbnail2} alt="thumbnal" className="md:rounded-lg" />
        </div>
        <div className="right-into md:flex-1  flex p-2 gap-3">
          {deviseMobile && (
            <div className="img">
              <img
                src={profileImg}
                alt="profile_img"
                className=" w-[2.5rem] rounded-full  "
              />
            </div>
          )}
          <div className="info">
            <h2 className="md:text-[0.9rem] font-semibold text-[1rem] font-Roboto ">
              How to make youtube cline using React js in 2025..
            </h2>
            <div className=" md:flex-col md:gap-0 md:pt-2 flex gap-2 text-[0.8rem] font-inter text-[#5e5e5e]">
              <p>Greate Stack</p>
              <p>
                <span>10M</span> <span>views</span> &bull;{" "}
                <span>1 year ago</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className=" md:flex gap-2 w-[100%] cursor-pointer">
        <div className="left  md:w-[50%]">
          <img src={thumbnail3} alt="thumbnal1" className="md:rounded-lg" />
        </div>
        <div className="right-into md:flex-1  flex p-2 gap-3">
          {deviseMobile && (
            <div className="img">
              <img
                src={profileImg}
                alt="profile_img"
                className=" w-[2.5rem] rounded-full  "
              />
            </div>
          )}
          <div className="info">
            <h2 className="md:text-[0.9rem] font-semibold text-[1rem] font-Roboto ">
              How to make youtube cline using React js in 2025..
            </h2>
            <div className=" md:flex-col md:gap-0 md:pt-2 flex gap-2 text-[0.8rem] font-inter text-[#5e5e5e]">
              <p>Greate Stack</p>
              <p>
                <span>10M</span> <span>views</span> &bull;{" "}
                <span>1 year ago</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className=" md:flex gap-2 w-[100%] cursor-pointer">
        <div className="left  md:w-[50%]">
          <img src={thumbnail4} alt="thumbnal1" className="md:rounded-lg" />
        </div>
        <div className="right-into md:flex-1  flex p-2 gap-3">
          {deviseMobile && (
            <div className="img">
              <img
                src={profileImg}
                alt="profile_img"
                className=" w-[2.5rem] rounded-full  "
              />
            </div>
          )}
          <div className="info">
            <h2 className="md:text-[0.9rem] font-semibold text-[1rem] font-Roboto ">
              How to make youtube cline using React js in 2025..
            </h2>
            <div className=" md:flex-col md:gap-0 md:pt-2 flex gap-2 text-[0.8rem] font-inter text-[#5e5e5e]">
              <p>Greate Stack</p>
              <p>
                <span>10M</span> <span>views</span> &bull;{" "}
                <span>1 year ago</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className=" md:flex gap-2 w-[100%] cursor-pointer">
        <div className="left  md:w-[50%]">
          <img src={thumbnail5} alt="thumbnal1" className="md:rounded-lg" />
        </div>
        <div className="right-into md:flex-1  flex p-2 gap-3">
          {deviseMobile && (
            <div className="img">
              <img
                src={profileImg}
                alt="profile_img"
                className=" w-[2.5rem] rounded-full  "
              />
            </div>
          )}
          <div className="info">
            <h2 className="md:text-[0.9rem] font-semibold text-[1rem] font-Roboto ">
              How to make youtube cline using React js in 2025..
            </h2>
            <div className=" md:flex-col md:gap-0 md:pt-2 flex gap-2 text-[0.8rem] font-inter text-[#5e5e5e]">
              <p>Greate Stack</p>
              <p>
                <span>10M</span> <span>views</span> &bull;{" "}
                <span>1 year ago</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className=" md:flex gap-2 w-[100%] cursor-pointer">
        <div className="left  md:w-[50%]">
          <img src={thumbnail6} alt="thumbnal1" className="md:rounded-lg" />
        </div>
        <div className="right-into md:flex-1  flex p-2 gap-3">
          {deviseMobile && (
            <div className="img">
              <img
                src={profileImg}
                alt="profile_img"
                className=" w-[2.5rem] rounded-full  "
              />
            </div>
          )}
          <div className="info">
            <h2 className="md:text-[0.9rem] font-semibold text-[1rem] font-Roboto ">
              How to make youtube cline using React js in 2025..
            </h2>
            <div className=" md:flex-col md:gap-0 md:pt-2 flex gap-2 text-[0.8rem] font-inter text-[#5e5e5e]">
              <p>Greate Stack</p>
              <p>
                <span>10M</span> <span>views</span> &bull;{" "}
                <span>1 year ago</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className=" md:flex gap-2 w-[100%] cursor-pointer">
        <div className="left  md:w-[50%]">
          <img src={thumbnail7} alt="thumbnal1" className="md:rounded-lg" />
        </div>
        <div className="right-into md:flex-1  flex p-2 gap-3">
          {deviseMobile && (
            <div className="img">
              <img
                src={profileImg}
                alt="profile_img"
                className=" w-[2.5rem] rounded-full  "
              />
            </div>
          )}
          <div className="info">
            <h2 className="md:text-[0.9rem] font-semibold text-[1rem] font-Roboto ">
              How to make youtube cline using React js in 2025..
            </h2>
            <div className=" md:flex-col md:gap-0 md:pt-2 flex gap-2 text-[0.8rem] font-inter text-[#5e5e5e]">
              <p>Greate Stack</p>
              <p>
                <span>10M</span> <span>views</span> &bull;{" "}
                <span>1 year ago</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className=" md:flex gap-2 w-[100%] cursor-pointer">
        <div className="left  md:w-[50%]">
          <img src={thumbnail8} alt="thumbnal1" className="md:rounded-lg" />
        </div>
        <div className="right-into md:flex-1  flex p-2 gap-3">
          {deviseMobile && (
            <div className="img">
              <img
                src={profileImg}
                alt="profile_img"
                className=" w-[2.5rem] rounded-full  "
              />
            </div>
          )}
          <div className="info">
            <h2 className="md:text-[0.9rem] font-semibold text-[1rem] font-Roboto ">
              How to make youtube cline using React js in 2025..
            </h2>
            <div className=" md:flex-col md:gap-0 md:pt-2 flex gap-2 text-[0.8rem] font-inter text-[#5e5e5e]">
              <p>Greate Stack</p>
              <p>
                <span>10M</span> <span>views</span> &bull;{" "}
                <span>1 year ago</span>
              </p>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default Recommented
