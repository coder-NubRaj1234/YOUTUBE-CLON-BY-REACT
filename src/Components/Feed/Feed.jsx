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

import API_KEY from "../../data";
import { value_convorter } from "../../data";
import moment from "moment";

const Feed = () => {
  const { deviseMobile, videoOpen, setVideoOpen, category } =
    useContext(Context);

  console.log(API_KEY);

  const [data, setData] = useState([]);
  const fearchData = async () => {
    try {
      const response = await fetch(
        `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&videoCategoryId=${category}&key=${API_KEY}`
      );
      const videoData = await response.json();
      setData(videoData.items);
      console.log("data:", videoData.items);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fearchData();
  }, [category]);

  let videos_day = "";

  return (
    <div className=" sm:justify-center sm:items-center   flex lg:gap-4  flex-wrap gap-1 w-[100%] sm:gap-2  sm:pt-5 ">
      {data &&
        data.map((items, index) => {
          
          if (moment(items.snippet.publishedAt).fromNow() == "a day ago") {
            videos_day = "1 day ago";
          } else {
            videos_day = moment(items.snippet.publishedAt).fromNow();
          }

          return (
            <Link
              key={index}
              to={`video/${items.snippet.categoryId}/${items.id}`}
              className="lg:w-[30%] lg:h-auto sm:w-[47%] cursor-pointer   w-[100vw] min-h-[17rem]  "
              onClick={() => {
                setVideoOpen(true);
              }}
            >
              <img
                src={`${items.snippet.thumbnails.medium.url}`}
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
                    {items.snippet.title}
                  </h2>
                  <p className="lg:text-[0.9rem]  lg:font-semibold  font-medium  text-[0.8rem] text-[#555] lg:flex flex-col">
                    <span className=" "> {items.snippet.channelTitle}</span>{" "}
                    <span className="italic">
                      {deviseMobile ? <>&bull;</> : ""}
                      {value_convorter(items.statistics.viewCount)} &bull;{" "}
                      {videos_day}
                    </span>
                  </p>
                </div>
              </div>
            </Link>
          );
        })}
    </div>
  );
};

export default Feed;
