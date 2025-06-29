import React from 'react'

import thumbnail1     from "../../assets/thumbnail1.png";
import thumbnail2     from "../../assets/thumbnail2.png";
import thumbnail3     from "../../assets/thumbnail3.png";
import thumbnail4     from "../../assets/thumbnail4.png";
import thumbnail5     from "../../assets/thumbnail5.png";
import thumbnail6     from "../../assets/thumbnail6.png";


import profileImg     from "../../assets/jack.png";




const Recommented = () => {
  return (
    <div className="recommented w-[100vw] ">
      <div className="py-2">
        <div className="left w-full">
          <img src={thumbnail1} alt="thumbnal1" />
        </div>
        <div className="right-into flex p-2 gap-3">
          <div className="img">
            <img
              src={profileImg}
              alt="profile_img"
              className="w-[2.5rem] rounded-full  "
            />
          </div>
          <div className="info">
            <h2 className="font-semibold text-[1rem] font-Roboto ">
              How to make youtube cline using React js in 2025..
            </h2>
            <div className="flex gap-2 text-[0.8rem] font-inter text-[#5e5e5e]">
              <p>Greate Stack</p>
              <p>
                <span>10M</span> <span>views</span> &bull;{" "}
                <span>1 year ago</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="py-2">
        <div className="left w-full">
          <img src={thumbnail1} alt="thumbnal1" />
        </div>
        <div className="right-into flex p-2 gap-3">
          <div className="img">
            <img
              src={profileImg}
              alt="profile_img"
              className="w-[2.5rem] rounded-full  "
            />
          </div>
          <div className="info">
            <h2 className="font-semibold text-[1rem] font-Roboto ">
              How to make youtube cline using React js in 2025..
            </h2>
            <div className="flex gap-2 text-[0.8rem] font-inter text-[#5e5e5e]">
              <p>Greate Stack</p>
              <p>
                <span>10M</span> <span>views</span> &bull;{" "}
                <span>1 year ago</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="py-2">
        <div className="left w-full">
          <img src={thumbnail1} alt="thumbnal1" />
        </div>
        <div className="right-into flex p-2 gap-3">
          <div className="img">
            <img
              src={profileImg}
              alt="profile_img"
              className="w-[2.5rem] rounded-full  "
            />
          </div>
          <div className="info">
            <h2 className="font-semibold text-[1rem] font-Roboto ">
              How to make youtube cline using React js in 2025..
            </h2>
            <div className="flex gap-2 text-[0.8rem] font-inter text-[#5e5e5e]">
              <p>Greate Stack</p>
              <p>
                <span>10M</span> <span>views</span> &bull;{" "}
                <span>1 year ago</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="py-2">
        <div className="left w-full">
          <img src={thumbnail1} alt="thumbnal1" />
        </div>
        <div className="right-into flex p-2 gap-3">
          <div className="img">
            <img
              src={profileImg}
              alt="profile_img"
              className="w-[2.5rem] rounded-full  "
            />
          </div>
          <div className="info">
            <h2 className="font-semibold text-[1rem] font-Roboto ">
              How to make youtube cline using React js in 2025..
            </h2>
            <div className="flex gap-2 text-[0.8rem] font-inter text-[#5e5e5e]">
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
