import React from "react";
import VideoPlay from "../../Components/VideoPlay/VideoPlay";

const Videos = ({ deviseMobile }) => {
  return (
    <>
      <div>
        <VideoPlay deviseMobile={deviseMobile} />
      </div>
    </>
  );
};

export default Videos;
