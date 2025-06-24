import React from "react";

import {
  faThumbsUp,
  faThumbsDown,
  faDownload,
  faShare,
  faBookmark
} from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import profile_img from "../../assets/jack.png";

import Video from "../../assets/video.mp4";

const VideoPlay = () => {
  return (
    <div className="video_play overflow-y-scroll pb-[8vh]">
      <video src={Video} controls className="aspact-video w-full"></video>
      <div className="vidoe_info px-2 py-2">
        <h1 className="text-[1.1rem] font-semibold  font-Roboto">
          Create YouTube Clone Using React JS | Build Complete Website Like
          YouTube In React JS 2024
        </h1>
        <div className="discription">
          <p className="py-2 text-[0.8rem] text-[#5a5a5a] italic">
            <span className="font-semibold">
              100k <span className="font-medium">views</span>
            </span>
            <span className="pl-2"> 5 mo ago</span>{" "}
            <span className="text-black font-semibold pl-1">...more</span>
          </p>
        </div>
        <div className="vidos_actions ">
          <div className="left flex justify-between items-center">
            <div className="flex items-center gap-2">
              <div>
                <img
                  src={profile_img}
                  alt="profile_img"
                  className="w-10 rounded-full "
                />
              </div>
              <div className="flex gap-2 text-[0.9rem] font-Roboto">
                <p>Greate Stack</p>
                <p className="font-semibold">125K</p>
              </div>
            </div>
            <div>
              <button className="bg-black px-4 py-1 rounded-lg text-white font-semibold font-Roboto ">
                Subscribe
              </button>
            </div>
          </div>
          <div className="right flex py-5 justify-between">
            <p className="video_info_icon cursor-pointer">
              <p className="">
                <FontAwesomeIcon icon={faThumbsUp} />
              </p>
              <span className="text-[0.8rem] ">111K</span>|
              <p className="cursor-pointer">
                <FontAwesomeIcon icon={faThumbsDown} />
              </p>
            </p>
            <p className="video_info_icon cursor-pointer">
              <FontAwesomeIcon icon={faShare} />
              <span className="text-[0.8rem]">Share</span>
            </p>
            <p className="video_info_icon cursor-pointer">
              <FontAwesomeIcon icon={faBookmark} />
              <span className="text-[0.8rem]">Save</span>
            </p>
            <p className="video_info_icon cursor-pointer">
              <FontAwesomeIcon icon={faDownload} />
              <span className="text-[0.8rem]">Download</span>
            </p>
          </div>
        </div>

        <div className="comments-container bg-[#f2f2f2] min-h-[5rem] p-2 rounded-xl">
          <h2 className="text-sm font-Roboto">Commets 10k</h2>
          <div className="comments py-5 flex flex-col gap-8">
            <div className="comment flex gap-3">
              <div>
                <img
                  src={profile_img}
                  alt="profile"
                  className="rounded-full w-15 cursor-pointer"
                />
              </div>
              <div className="comment-info flex flex-col gap-1.5 ">
                <div className="flex gap-4 text-[#5a5a5a] text-sm">
                  <p>Nithesh Rajput</p>
                  <span> &bull; 1 day ago</span>
                </div>
                <p className="text-[1rem] font-Roboto">
                  This video is very help video for begginer . You can join this
                  project to skill up your skill
                </p>
                <div className="flex items-center  gap-5 text-lg">
                  <p className="flex gap-2 items-center cursor-pointer ">
                    <FontAwesomeIcon className="" icon={faThumbsUp} />
                    <span className="text-sm font-Roboto italic">500</span>
                  </p>
                  <p>
                    {" "}
                    <FontAwesomeIcon
                      className="cursor-pointer"
                      icon={faThumbsDown}
                    />
                  </p>
                  <p>
                    {" "}
                    <span className="text-sm font-Roboto italic cursor-pointer">
                      Reply
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <div className="comment flex gap-3">
              <div>
                <img
                  src={profile_img}
                  alt="profile"
                  className="rounded-full w-15 cursor-pointer"
                />
              </div>
              <div className="comment-info flex flex-col gap-1.5 ">
                <div className="flex gap-4 text-[#5a5a5a] text-sm">
                  <p>Nithesh Rajput</p>
                  <span> &bull; 1 day ago</span>
                </div>
                <p className="text-[1rem] font-Roboto">
                  This video is very help video for begginer . You can join this
                  project to skill up your skill
                </p>
                <div className="flex items-center  gap-5 text-lg">
                  <p className="flex gap-2 items-center cursor-pointer ">
                    <FontAwesomeIcon className="" icon={faThumbsUp} />
                    <span className="text-sm font-Roboto italic">500</span>
                  </p>
                  <p>
                    {" "}
                    <FontAwesomeIcon
                      className="cursor-pointer"
                      icon={faThumbsDown}
                    />
                  </p>
                  <p>
                    {" "}
                    <span className="text-sm font-Roboto italic cursor-pointer">
                      Reply
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <div className="comment flex gap-3">
              <div>
                <img
                  src={profile_img}
                  alt="profile"
                  className="rounded-full w-15 cursor-pointer"
                />
              </div>
              <div className="comment-info flex flex-col gap-1.5 ">
                <div className="flex gap-4 text-[#5a5a5a] text-sm">
                  <p>Nithesh Rajput</p>
                  <span> &bull; 1 day ago</span>
                </div>
                <p className="text-[1rem] font-Roboto">
                  This video is very help video for begginer . You can join this
                  project to skill up your skill
                </p>
                <div className="flex items-center  gap-5 text-lg">
                  <p className="flex gap-2 items-center cursor-pointer ">
                    <FontAwesomeIcon className="" icon={faThumbsUp} />
                    <span className="text-sm font-Roboto italic">500</span>
                  </p>
                  <p>
                    {" "}
                    <FontAwesomeIcon
                      className="cursor-pointer"
                      icon={faThumbsDown}
                    />
                  </p>
                  <p>
                    {" "}
                    <span className="text-sm font-Roboto italic cursor-pointer">
                      Reply
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <div className="comment flex gap-3">
              <div>
                <img
                  src={profile_img}
                  alt="profile"
                  className="rounded-full w-15 cursor-pointer"
                />
              </div>
              <div className="comment-info flex flex-col gap-1.5 ">
                <div className="flex gap-4 text-[#5a5a5a] text-sm">
                  <p>Nithesh Rajput</p>
                  <span> &bull; 1 day ago</span>
                </div>
                <p className="text-[1rem] font-Roboto">
                  This video is very help video for begginer . You can join this
                  project to skill up your skill
                </p>
                <div className="flex items-center  gap-5 text-lg">
                  <p className="flex gap-2 items-center cursor-pointer ">
                    <FontAwesomeIcon className="" icon={faThumbsUp} />
                    <span className="text-sm font-Roboto italic">500</span>
                  </p>
                  <p>
                    {" "}
                    <FontAwesomeIcon
                      className="cursor-pointer"
                      icon={faThumbsDown}
                    />
                  </p>
                  <p>
                    {" "}
                    <span className="text-sm font-Roboto italic cursor-pointer">
                      Reply
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoPlay;
