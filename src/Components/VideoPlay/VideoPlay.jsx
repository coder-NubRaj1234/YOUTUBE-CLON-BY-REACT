import React, { useState, useEffect, useRef, useContext } from "react";
import Recommented from "../Recommented/Recommented";
import Linkify from "linkify-react";

import {
  faThumbsUp,
  faThumbsDown,
  faDownload,
  faShare,
  faBookmark,
  faXmark,
  faCirclePlay,
  faUser,
  faCircleUser,
} from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import profile_img from "../../assets/jack.png";
import comProfileImg from "../../img/useProfile.png";

import { Context } from "../../Context/Context";

import Video from "../../assets/video.mp4";
import ApiKey from "../../data";
import { data } from "react-router-dom";
import { value_convorter, localDateConvorter } from "../../data";
import moment from "moment";

import { dateConvorter } from "../../data";
import { width } from "@fortawesome/free-brands-svg-icons/fa42Group";
import { useLocation } from "react-router-dom";

const VideoPlay = ({ deviseMobile, categoryId, videoId }) => {
  const { commentShow, setCommentShow, showDiscription, setShowDiscription , scrollZero,
      setScrollZero,} =
    useContext(Context);

  const [commentHeight, setSetCommentHeight] = useState("h-[6rem]");
  const [showStyle, setShowStyle] = useState("");
  const [videoData, setVideoData] = useState(null);
  const [chinalData, setChinalData] = useState(null);
  const [commentsData, setCommentsData] = useState(null);
  const videoRef = useRef("");

  // current scroll 0;

  const location = useLocation();
  useEffect(() => {
    if ((location.pathname == `/video/${categoryId}/${videoId}` )) {
      setScrollZero(true);
      console.log("video")
    }else{
      setScrollZero(false);
      console.log("not_video")
    }
  }, [location]);

  const [oneComment, setOneComment] = useState(null);
  const [showLessDiscIN_info, setShowLessDiscIN_info] = useState(
    "overflow-clip h-[6rem]"
  );

  // discription state..
  useEffect(() => {
    if (!deviseMobile) {
      setShowLessDiscIN_info("");
    }
  }, [deviseMobile]);

  //diactiprion manage to show...
  function discriptionManage(string) {
    const line = string.split("\n");
    const discription = line.map((link, index) => {
      return (
        <p key={index} className="mb-2 whitespace-pre-wrap">
          <Linkify
            options={{
              target: "_blank",
              rel: "noopener noreferrer",
              attributes: {
                class: "text-blue-500", // <-- your Tailwind or custom class here
              },
            }}
          >
            {link}
          </Linkify>
        </p>
      );
    });

    // console.log(discription);
    return discription;
  }

  useEffect(() => {
    setOneComment(commentsData ? commentsData[0] : "");
    // console.log(commentsData ? commentsData[0] : "comments");
  }, [commentsData]);

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

  const YTData = async () => {
    const Api_URL = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${ApiKey} `;

    const response = await fetch(Api_URL);
    const data = await response.json();
    setVideoData(data.items[0]);
    // console.log(data.items[0]);
  };

  useEffect(() => {
    YTData();
  }, [videoId]);

  // featching chinal data......
  const fatchChinaldata = async () => {
    if (videoData) {
      const chinalDataURL = `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=${videoData.snippet.channelId}&key=${ApiKey}`;

      const response = await fetch(chinalDataURL);
      const data = await response.json();
      setChinalData(data.items[0]);
      // console.log(data.items[0]);

      const comment_URL = `https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&maxResults=100&videoId=${videoId}&key=${ApiKey}`;
      const comResponsive = await fetch(comment_URL);
      const comItems = await comResponsive.json();
      setCommentsData(comItems.items);
      // console.log(comItems.items);
    }
  };
  useEffect(() => {
    fatchChinaldata();
  }, [videoData]);

  return (
    <>
      {videoData && (
        <div
          className={`video_play md:flex  relative  md:w-[65%] hide-scrollbar overflow-y-scroll     w-[100vw] flex flex-col  ${
            deviseMobile && (commentShow || showDiscription) ? "h-[100%]" : ""
          }
    
    ${!deviseMobile && "h-[100%] "}`}
        >
          {/* <video
      ref={videoRef}
      src={Video}
      controls
      className="md:rounded-2xl aspact-video w-full   "
    ></video> */}

          <iframe
            src={`https://www.youtube.com/embed/${videoId}?autoplay=0`}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            className=" w-full h-[35vh] lg:min-h-[80%] lg:rounded-xl"
          ></iframe>

          <div
            className={`vidoe_info px-2 py-5  sm:flex sm:flex-col flex-1 overflow-y-hidden sm:overflow-y-visible relative`}
          >
            <h1 className="lg:text-[1.2rem] text-[1.1rem] font-semibold  font-Roboto sm:order-1 md:font-bold md:text-[1.3rem] ">
              {videoData && videoData.snippet.title}
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
                }
              }}
            >
              {/* add */}
              <div className="relative top-0 h-full">
                {deviseMobile && showDiscription && (
                  <div className="flex justify-between items-center pb-4  sticky top-0 left-0 z-10 bg-white border-b-2 border-b-gray-400  py-5">
                    <h2 className="font-semibold text-[1.1rem] font-Roboto">
                      Discription
                    </h2>
                    <FontAwesomeIcon
                      icon={faXmark}
                      className="text-[1.5rem] pr-2"
                      onClick={() => {
                        setShowDiscription(false);
                        // console.log(showDiscription);
                      }}
                    />
                  </div>
                )}
                {deviseMobile && showDiscription && (
                  <div>
                    <h1 className="py-4 font-Roboto font-semibold text-[0.9rem]">
                      {videoData && videoData.snippet.title}
                    </h1>

                    <div className="about-vidoe mb-5">
                      <div className="flex justify-around text-center">
                        <p className="flex flex-col">
                          <span className="font-bold font-Roboto ">
                            {videoData.statistics.likeCount}
                          </span>
                          <span className="text-[0.8rem] italic">Likes</span>
                        </p>
                        <p className="flex flex-col">
                          <span className="font-bold font-Roboto ">
                            {" "}
                            {videoData.statistics.viewCount}
                          </span>
                          <span className="text-[0.8rem] italic">Views</span>
                        </p>
                        <p className="flex flex-col">
                          <span className="font-bold font-Roboto ">
                            {" "}
                            {videoData &&
                              localDateConvorter(videoData.snippet.publishedAt)
                                .year}
                          </span>
                          <span className="text-[0.8rem] italic">
                            {
                              localDateConvorter(videoData.snippet.publishedAt)
                                .monthDate
                            }
                          </span>
                        </p>
                      </div>
                    </div>
                  </div>
                )}
                {(!showDiscription || !deviseMobile) && (
                  <div className="md:text-[1rem] md:gap-1 md:font-medium md:flex-col py-2 text-[0.8rem] text-[#5a5a5a]  md:text-[1rem] md:font-semibold md:text-black flex  gap-2">
                    <div className="views-tiem flex md:flex-row italic items-center ">
                      <span className="font-semibold flex gap-1 ">
                        {value_convorter(videoData.statistics.viewCount)}
                        <span className="font-medium md:font-semibold">
                          views
                        </span>
                      </span>

                      <span className="pl-2">
                        {" "}
                        {dateConvorter(videoData.snippet.publishedAt)}
                      </span>
                    </div>

                    {!deviseMobile && (
                      <p className="font-normal font-Roboto ">
                        Learn How to crate YouTube clone using React JS and
                        YouTube Data API. Build website like YouTube with React
                        JS. React JS project for beginners.
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
                  <div
                    onClick={() => {
                      setShowLessDiscIN_info("overflow-auto h-auto");
                    }}
                    className="md:text-[0.9rem] extrate-info bg-[#f2f2f2] rounded-2xl p-2 text-[0.7rem] font-inter"
                  >
                    <div
                      className={`relative whitespace-pre-line  ${showLessDiscIN_info}`}
                    >
                      {videoData &&
                        discriptionManage(videoData.snippet.description)}
                      {deviseMobile &&
                        showLessDiscIN_info !== "overflow-auto h-auto" && (
                          <p className="absolute bottom-0 right-0">...More</p>
                        )}
                    </div>
                  </div>
                )}

                {showDiscription && (
                  <div className=" px-2 w-full  bootom py-4">
                    <div>
                      <div className="left flex justify-between items-center md:gap-5 pb-5">
                        <div className="flex items-center gap-2 cursor-pointer">
                          <div>
                            <img
                              src={
                                chinalData &&
                                chinalData.snippet.thumbnails.medium.url
                              }
                              alt="profile_img"
                              className="w-8 rounded-full md:w-10 "
                            />
                          </div>
                          <div className="flex  text-[0.7rem] font-Roboto font-Roboto   flex-col">
                            <p className=" text-[0.9rem] md:text-[1.1rem] md:font-semibold">
                              {videoData && videoData.snippet.channelTitle}
                            </p>
                            <p className="md:text-[0.8rem] after:content-['subscribers'] font-normal text-[#5e5e5e] after:pl-1">
                              {chinalData &&
                                value_convorter(
                                  chinalData.statistics.subscriberCount
                                )}
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
                          <FontAwesomeIcon
                            className="text-[1rem]"
                            icon={faUser}
                          />
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
            </div>

            {/* like shaire */}
            <div className="vidos_actions sm:order-2 md:flex md:justify-between">
              <div className="left flex justify-between items-center md:gap-5 gap-2">
                <div className="flex items-center gap-2 cursor-pointer">
                  <div>
                    <img
                      src={
                        chinalData && chinalData.snippet.thumbnails.medium.url
                      }
                      alt="profile_img"
                      className="w-10 rounded-full "
                    />
                  </div>
                  <div className="flex   gap-2 text-[0.9rem] sm:font-semibold  font-Roboto sm:font-semibold  md:flex-col md:gap-0">
                    <p className=" md:text-[1.1rem]  inline-flex ">
                      {" "}
                      {videoData && videoData.snippet.channelTitle}
                    </p>
                    <p className="md:after:content-['subscribers'] md:font-normal md:after:pl-1">
                      {chinalData &&
                        value_convorter(chinalData.statistics.subscriberCount)}
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
                  <span className="text-[0.8rem] ">
                    {" "}
                    {videoData &&
                      value_convorter(videoData.statistics.likeCount)}
                  </span>
                  |
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
                      {videoData &&
                        value_convorter(videoData.statistics.commentCount)}{" "}
                      Comments
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
                    <div
                      className={`min-w-8 h-8  rounded-full  bg-cover `}
                      style={{
                        backgroundImage: `url(${
                          oneComment &&
                          (oneComment.snippet.topLevelComment.snippet
                            .authorProfileImageUrl
                            ? oneComment.snippet.topLevelComment.snippet
                                .authorProfileImageUrl
                            : comProfileImg)
                        })`,
                      }}
                    ></div>
                    <div className="comment-info flex flex-col gap-1.5 ">
                      <p className="text-[1rem] font-Roboto line-clamp-1">
                        {oneComment &&
                          oneComment.snippet.topLevelComment.snippet
                            .textDisplay}
                      </p>
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
                {commentsData &&
                  commentsData.map((item, index) => {
                    return (
                      <div key={index} className="comment flex gap-3">
                        <div
                          className={`min-w-8 h-8  rounded-full  bg-cover `}
                          style={{
                            backgroundImage: `url(${
                              item.snippet.topLevelComment.snippet
                                .authorProfileImageUrl
                                ? item.snippet.topLevelComment.snippet
                                    .authorProfileImageUrl
                                : comProfileImg
                            })`,
                          }}
                        ></div>
                        <div className="comment-info flex flex-col gap-1.5 ">
                          {commentShow && (
                            <div className="flex gap-4 text-[#5a5a5a] text-sm">
                              <p>
                                {
                                  item.snippet.topLevelComment.snippet
                                    .authorDisplayName
                                }
                              </p>
                              <span> &bull; 1 day ago</span>
                            </div>
                          )}
                          <p
                            className={`text-[1rem] font-Roboto ${
                              deviseMobile && !commentShow && "line-clamp-1"
                            }`}
                          >
                            {item.snippet.topLevelComment.snippet.textDisplay}
                          </p>
                          {commentShow && (
                            <div className="flex items-center  gap-5 text-lg">
                              <p className="flex gap-2 items-center cursor-pointer ">
                                <FontAwesomeIcon
                                  className=""
                                  icon={faThumbsUp}
                                />
                                <span className="text-sm font-Roboto italic">
                                  {value_convorter(
                                    item.snippet.topLevelComment.snippet
                                      .likeCount
                                  )}
                                </span>
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
                    );
                  })}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default VideoPlay;
