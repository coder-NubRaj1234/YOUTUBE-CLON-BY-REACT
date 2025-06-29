import React , {useContext}from "react";
import VideoPlay from "../../Components/VideoPlay/VideoPlay";
import Recommented from "../../Components/Recommented/Recommented";


import { Context } from "../../Context/Context";

const Videos = ({ deviseMobile }) => {
    const { commentShow, setCommentShow, showDiscription, setShowDiscription } =
      useContext(Context);
  return (
    <>
      <div className="flex w-[100vw] box-border hide-scrollbar h-[92vh]  flex-wrap justify-between  md:px-[6%] md:py-[1.5%]">
        <VideoPlay deviseMobile={deviseMobile} />
        {(!commentShow && !showDiscription) && <Recommented />}
      </div>
    </>
  );
};

export default Videos;
