import React, { useState, useEffect, useRef  , useContext} from "react";

import {
  faThumbsUp,
  faThumbsDown,
  faDownload,
  faShare,
  faBookmark,
  faXmark,
  faCirclePlay,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import profile_img from "../../assets/jack.png";

import { Context } from "../../Context/Context";

import Video from "../../assets/video.mp4";

const VideoPlay = ({ deviseMobile }) => {
  const { commentShow, setCommentShow, showDiscription, setShowDiscription } =
    useContext(Context);

  const [commentHeight, setSetCommentHeight] = useState("h-[6rem]");
  const [showStyle, setShowStyle] = useState("");

  const videoRef = useRef("");

  useEffect(() => {
    if (commentShow || (showDiscription && deviseMobile)) {
      setShowStyle(
        "absolute left-0 top-0 h-full overflow-y-scroll px-2  bg-white z-11 w-full"
      );
    }
  }, [commentShow, showDiscription]);

  useEffect(() => {
    setSetCommentHeight(commentShow ? "min-h-[5rem]" : "h-[6rem]");
  }, [commentShow]);

  useEffect(() => {
    if (!deviseMobile) {
      setCommentShow(true);
    }
  }, [deviseMobile]);

  return (
    <div
      className={`video_play relative md:w-[65%] hide-scrollbar overflow-y-scroll     w-[100vw] flex flex-col  ${
        deviseMobile && (commentShow || showDiscription)
          ? "h-[100%]"
          : ""
      }
      
      ${!deviseMobile && "h-[100%]"}`}

    >
      <video
        ref={videoRef}
        src={Video}
        controls
        className="md:rounded-2xl aspact-video w-full "
      ></video>

      <div
        className={`vidoe_info px-2 py-5  sm:flex sm:flex-col flex-1 overflow-y-hidden sm:overflow-y-visible relative`}
      >
        <h1 className="text-[1.1rem] font-semibold  font-Roboto sm:order-1 md:font-bold md:text-[1.3rem] ">
          Create YouTube Clone Using React JS | Build Complete Website Like
          YouTube In React JS 2024
        </h1>

        {/* discription */}
        <div
          className={` ${
            !showDiscription && "cursor-pointer "
          } md:px-4 md:rounded-2xl md:bg-[#f2f2f2] discription sm:order-3 md:my-2 w-full ${
            showDiscription && deviseMobile && showStyle
          }`}
          onClick={() => {
            if (!showDiscription) {
              setShowDiscription(true);
            };
          }}
        >
          {deviseMobile && showDiscription && (
            <div>
              <div className="flex justify-between items-center pb-4 sticky top-0 left-0 z-10 bg-white border-b-2 border-b-gray-400  py-5">
                <h2 className="font-semibold text-[1.1rem] font-Roboto">
                  Discription
                </h2>
                <FontAwesomeIcon
                  icon={faXmark}
                  className="text-[1.5rem] pr-2"
                  onClick={() => {
                    setShowDiscription(false);
                    console.log(showDiscription);
                  }}
                />
              </div>
              <h1 className="py-4 font-Roboto font-semibold text-[0.9rem]">
                Create YouTube Clone Using React JS | Build Complete Website
                Like YouTube In React JS 2024
              </h1>

              <div className="about-vidoe ">
                <div className="flex justify-around text-center">
                  <p className="flex flex-col">
                    <span className="font-bold font-Roboto ">4.5K</span>
                    <span className="text-[0.8rem] italic">Likes</span>
                  </p>
                  <p className="flex flex-col">
                    <span className="font-bold font-Roboto ">203,563</span>
                    <span className="text-[0.8rem] italic">Views</span>
                  </p>
                  <p className="flex flex-col">
                    <span className="font-bold font-Roboto ">2024</span>
                    <span className="text-[0.8rem] italic">12 Feb</span>
                  </p>
                </div>

                <div className="flex py-4 gap-2 flex-wrap">
                  <p className="text-[0.8rem] bg-[#f2f2f2] px-3 rounded-3xl py-1 cursor-pointer">
                    #GreateStacl
                  </p>
                  <p className="text-[0.8rem] bg-[#f2f2f2] px-3 rounded-3xl py-1 cursor-pointer">
                    #react js
                  </p>
                  <p className="text-[0.8rem] bg-[#f2f2f2] px-3 rounded-3xl py-1 cursor-pointer">
                    #wevdevelopment
                  </p>
                  <p className="text-[0.8rem] bg-[#f2f2f2] px-3 rounded-3xl py-1 cursor-pointer">
                    #wevdevelopment
                  </p>
                  <p className="text-[0.8rem] bg-[#f2f2f2] px-3 rounded-3xl py-1 cursor-pointer">
                    #wevdevelopment
                  </p>
                </div>
              </div>
            </div>
          )}
          {(!showDiscription || !deviseMobile) && (
            <div className="md:text-[1rem] md:gap-1 md:font-medium md:flex-col py-2 text-[0.8rem] text-[#5a5a5a]  md:text-[1rem] md:font-semibold md:text-black flex  gap-2">
              <div className="views-tiem flex md:flex-row italic items-center ">
                <span className="font-semibold flex gap-1 ">
                  100k
                  <span className="font-medium md:font-semibold">views</span>
                </span>

                <span className="pl-2"> 5 mo ago</span>

                {!deviseMobile && (
                  <p className="flex gap-2 items-center mx-5  justify-center">
                    <span className=" text-[#626262]">#GreateStacl</span>
                    <span className=" text-[#626262]">#react js</span>
                    <span className=" text-[#626262]">#wevdevelopment</span>
                  </p>
                )}
              </div>

              {!deviseMobile && (
                <p className="font-normal font-Roboto ">
                  Learn How to crate YouTube clone using React JS and YouTube
                  Data API. Build website like YouTube with React JS. React JS
                  project for beginners.
                </p>
              )}
              {!showDiscription && (
                <span className="text-black font-semibold pl-2 cursor-pointer">
                  ...more
                </span>
              )}
            </div>
          )}

          {showDiscription && (
            <div className=" md:text-[0.9rem] extrate-info bg-[#f2f2f2] rounded-2xl p-2 text-[0.7rem] font-inter">
              {deviseMobile && (
                <p>
                  Learn How to crate YouTube clone using React JS and YouTube
                  Data API. Build website like YouTube with React JS. React JS
                  project for beginners.
                </p>
              )}

              <div className="py-5 ">
                <div className="flex flex-col gap-1">
                  <p>
                    <span>👉 Live Preview:</span>
                    <a href="#" className="text-blue-600">
                      https://vidtube-sable.vercel.app/
                    </a>
                  </p>
                  <p>
                    <span>👉 Source code:</span>
                    <a href="#" className="text-blue-600">
                      {" "}
                      https://greatstack.dev/go/youtube
                    </a>
                  </p>
                </div>

                <div>
                  <p>
                    <span>❤️ Get project completion certificate:</span>
                    <a href="#" className="text-blue-500">
                      {" "}
                      https://quiz.greatstack.dev/ytcl
                    </a>
                  </p>
                </div>
              </div>
            </div>
          )}

          {showDiscription && (
            <div className="bootom py-4">
              <div>
                <div className="left flex justify-between items-center md:gap-5 pb-5">
                  <div className="flex items-center gap-2 cursor-pointer">
                    <div>
                      <img
                        src={profile_img}
                        alt="profile_img"
                        className="w-8 rounded-full md:w-10 "
                      />
                    </div>
                    <div className="flex  text-[0.7rem] font-Roboto font-Roboto   flex-col">
                      <p className=" text-[0.9rem] md:text-[1.1rem] md:font-semibold">
                        Greate Stack
                      </p>
                      <p className="md:text-[0.8rem] after:content-['subscribers'] font-normal text-[#5e5e5e] after:pl-1">
                        125K
                      </p>
                    </div>
                  </div>
                  <div>
                    {deviseMobile && (
                      <button
                        className="bg-black px-5 py-1.5 rounded-full text-white font-semibold font-Roboto cursor-pointer text-[0.8rem]
              "
                      >
                        Subscribe
                      </button>
                    )}
                  </div>
                </div>

                <div className="flex gap-4 flex-wrap">
                  <p className="md:hover:bg-gray-300 flex gap-2 px-3 text-[0.8rem] border-1 border-gray-300 rounded-full py-2 items-center  cursor-pointer hover:bg-[#f2f2f2]">
                    <FontAwesomeIcon
                      className="text-[1rem]"
                      icon={faCirclePlay}
                    />
                    <span>Videos</span>
                  </p>
                  <p className="md:hover:bg-gray-300 flex gap-2 px-3 text-[0.8rem] border-1 border-gray-300 rounded-full py-2 items-center cursor-pointer hover:bg-[#f2f2f2]">
                    <FontAwesomeIcon className="text-[1rem]" icon={faUser} />
                    <span>About</span>
                  </p>
                </div>

                {!deviseMobile && (
                  <p className="font-Roboto text-[0.9rem] font-semibold mt-10 ">
                    <span
                      className="cursor-pointer "
                      onClick={() => {
                        if (showDiscription) {
                          setShowDiscription(false);
                        }
                        console.log(showDiscription);
                      }}
                    >
                      {" "}
                      See Less
                    </span>
                  </p>
                )}
              </div>
            </div>
          )}
        </div>

        {/* like shaire */}
        <div className="vidos_actions sm:order-2 md:flex md:justify-between">
          <div className="left flex justify-between items-center md:gap-5">
            <div className="flex items-center gap-2 cursor-pointer">
              <div>
                <img
                  src={profile_img}
                  alt="profile_img"
                  className="w-10 rounded-full "
                />
              </div>
              <div className="flex gap-2 text-[0.9rem] font-Roboto font-semibold  md:flex-col md:gap-0">
                <p className=" md:text-[1.1rem] ">Greate Stack</p>
                <p className="md:after:content-['subscribers'] md:font-normal md:after:pl-1">
                  125K
                </p>
              </div>
            </div>
            <div>
              <button
                className="bg-black px-5 py-1.5 rounded-lg text-white font-semibold font-Roboto cursor-pointer
              "
              >
                Subscribe
              </button>
            </div>
          </div>

          <div className="right flex py-5 justify-between order-2 md:gap-4">
            <p className="video_info_icon cursor-pointer">
              <span className="">
                <FontAwesomeIcon icon={faThumbsUp} />
              </span>
              <span className="text-[0.8rem] ">111K</span>|
              <span className="cursor-pointer">
                <FontAwesomeIcon icon={faThumbsDown} />
              </span>
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
        {/* comment */}
        <div
          className={` md:bg-transparent comments-container rounded-2xl sm:order-4 bg-[#f2f2f2]   ${commentHeight}  px-2 rounded-xl ${
            commentShow
              ? `min-h-[5rem] ${commentShow && deviseMobile && showStyle} `
              : "overflow-hidden"
          }`}
          onClick={() => {
            if (!commentShow) {
              setCommentShow(true);
            }
          }}
        >
          <div
            className={`md:bg-transparent md:static lg:h-[6rem] h-[5rem]  border-b-1 flex flex-col sticky top-0 left-0 pt-5 box-content ${
              commentShow && deviseMobile ? "bg-white" : "bg-[#f2f2f2]"
            }`}
          >
            <div
              className={`text-sm font-Roboto  ${
                commentShow ? " border-[#5e5e5e]" : ""
              }`}
            >
              <div className="flex justify-between">
                <span className="font-semibold font-Roboto lg:text-[1.1rem]">
                  Commets 10k
                </span>
                {commentShow && deviseMobile && (
                  <span>
                    <FontAwesomeIcon
                      onClick={() => {
                        setCommentShow(false);
                      }}
                      className="text-2xl"
                      icon={faXmark}
                    />
                  </span>
                )}
              </div>
            </div>
            {!commentShow && (
              <div className="comment flex gap-3 pt-3">
                <div>
                  <img
                    src={profile_img}
                    alt="profile"
                    className="rounded-full w-15 cursor-pointer sm:w-8"
                  />
                </div>
                <div className="comment-info flex flex-col gap-1.5 ">
                  {commentShow && (
                    <div className="flex gap-4 text-[#5a5a5a] text-sm">
                      <p>Nithesh Rajput</p>
                      <span> &bull; 1 day ago</span>
                    </div>
                  )}
                  <p className="text-[1rem] font-Roboto line-clamp-1">
                    This video is very help video for begginer . You can join
                    this project to skill up your skill
                  </p>
                  {commentShow && (
                    <div className="flex items-center  gap-5 text-lg">
                      <p className="flex gap-2 items-center cursor-pointer ">
                        <FontAwesomeIcon className="" icon={faThumbsUp} />
                        <span className="text-sm font-Roboto italic">500</span>
                      </p>
                      <p>
                        <FontAwesomeIcon
                          className="cursor-pointer"
                          icon={faThumbsDown}
                        />
                      </p>
                      <p>
                        <span className="text-sm font-Roboto italic cursor-pointer">
                          Reply
                        </span>
                      </p>
                    </div>
                  )}
                </div>
              </div>
            )}
            {commentShow && (
              <div className="btn flex gap-5 pt-3">
                <button className="lg:border-2 lg:hover:bg-white   lg:border-gray-500 bg-[#f2f2f2] text-[0.9rem] font-Roboto p-1.5 rounded-lg cursor-pointer">
                  Top
                </button>
                <button className="lg:border-2 lg:hover:bg-white  lg:border-gray-500 bg-[#f2f2f2] text-[0.9rem] font-Roboto p-1.5 rounded-lg cursor-pointer">
                  Newest
                </button>
              </div>
            )}
          </div>
          <div className="comments py-5 flex flex-col gap-8">
            <div className="comment flex gap-3">
              <div>
                <img
                  src={profile_img}
                  alt="profile"
                  className="rounded-full w-15 cursor-pointer sm:w-8"
                />
              </div>
              <div className="comment-info flex flex-col gap-1.5 ">
                {commentShow && (
                  <div className="flex gap-4 text-[#5a5a5a] text-sm">
                    <p>Nithesh Rajput</p>
                    <span> &bull; 1 day ago</span>
                  </div>
                )}
                <p className="text-[1rem] font-Roboto line-clamp-1">
                  This video is very help video for begginer . You can join this
                  project to skill up your skill
                </p>
                {commentShow && (
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
                )}
              </div>
            </div>
            <div className="comment flex gap-3">
              <div>
                <img
                  src={profile_img}
                  alt="profile"
                  className="rounded-full w-15 cursor-pointer  sm:w-8"
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
                  className="rounded-full w-15 cursor-pointer  sm:w-8"
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
                  className="rounded-full w-15 cursor-pointer  sm:w-8"
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
                  className="rounded-full w-15 cursor-pointer  sm:w-8"
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
                    <FontAwesomeIcon
                      className="cursor-pointer"
                      icon={faThumbsDown}
                    />
                  </p>
                  <p>
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
                  className="rounded-full w-15 cursor-pointer  sm:w-8"
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
