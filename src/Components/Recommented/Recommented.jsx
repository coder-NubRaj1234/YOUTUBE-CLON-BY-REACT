import React, { useContext, useEffect, useState } from "react";

import thumbnail1 from "../../assets/thumbnail1.png";
import thumbnail2 from "../../assets/thumbnail2.png";
import thumbnail3 from "../../assets/thumbnail3.png";
import thumbnail4 from "../../assets/thumbnail4.png";
import thumbnail5 from "../../assets/thumbnail5.png";
import thumbnail6 from "../../assets/thumbnail6.png";
import thumbnail7 from "../../assets/thumbnail7.png";
import thumbnail8 from "../../assets/thumbnail8.png";

import profileImg from "../../img/profile.png";

import { Context } from "../../Context/Context";
import ApiKey, { dateConvorter, value_convorter } from "../../data";
import { Link } from "react-router-dom";

const Recommented = ({ categoryId }) => {
  const { deviseMobile } = useContext(Context);
  const [apiData , setApiData] = useState([]);


  const featchApiData = async() =>{
    const Api_URl = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=US&videoCategoryId=${categoryId}&key=${ApiKey}`;
    const response = await fetch(Api_URl);
    const data = await response.json();
    setApiData(data.items)
    // console.log(data.items);
  };
  useEffect(() =>{
    featchApiData();
  } , []);

  return (
    <div className="recommented md:basis-[33%] hide-scrollbar  md:h-[100%]  md:overflow-y-scroll w-[100vw] flex flex-col gap-4 pb-2 ">
      {apiData &&(
        apiData.map((items , index) =>{
         return (
           <Link
             to={`/video/${items.snippet.categoryId}/${items.id}`}
             key={index}
             className=" md:flex gap-2 w-[100%] cursor-pointer"
           >
             <div className="left  md:w-[50%] w-[100%]">
               <img
                 src={items.snippet.thumbnails.medium.url}
                 alt="thumbnal1"
                 className="md:rounded-lg w-[100%]"
               />
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
                   {items.snippet.title}
                 </h2>
                 <div className=" md:flex-col md:gap-0 md:pt-2 flex gap-2 text-[0.8rem] font-inter text-[#5e5e5e]">
                   <p> {items.snippet.channelTitle}</p>
                   <p>
                     <span>{value_convorter(items.statistics.viewCount)}</span>{" "}
                     <span>views</span> &bull;{" "}
                     <span> {dateConvorter(items.snippet.publishedAt)}</span>
                   </p>
                 </div>
               </div>
             </div>
           </Link>
         );
        })
      )}
  
    </div>
  );
};

export default Recommented;
