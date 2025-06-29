import React from "react";
import VideoPlay from "../../Components/VideoPlay/VideoPlay";
import Recommented from "../../Components/Recommented/Recommented";

const Videos = ({ deviseMobile }) => {
  return (
    <>
      <div className="flex w-[100vw] box-border hide-scrollbar h-[92vh]  flex-wrap justify-between  md:px-[6%] md:py-[1.5%]">
        <VideoPlay deviseMobile={deviseMobile} />
        <Recommented />
      </div>
    </>
  );
};

export default Videos;
