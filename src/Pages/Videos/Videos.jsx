import React from "react";
import VideoPlay from "../../Components/VideoPlay/VideoPlay";

const Videos = ({ deviseMobile }) => {
  return (
    <>
      <div className="flex w-[100vw] box-border hide-scrollbar  flex-wrap justify-between  md:px-[6%] md:py-[1.5%]">
        <VideoPlay deviseMobile={deviseMobile} />
      </div>
    </>
  );
};

export default Videos;
