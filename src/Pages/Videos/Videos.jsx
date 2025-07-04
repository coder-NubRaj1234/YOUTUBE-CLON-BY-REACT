import React, { useContext, useEffect } from "react";
import VideoPlay from "../../Components/VideoPlay/VideoPlay";
import Recommented from "../../Components/Recommented/Recommented";

import { Context } from "../../Context/Context";
import { useLocation, useParams } from "react-router-dom";

const Videos = ({ deviseMobile }) => {
  const { commentShow, setCommentShow, showDiscription, setShowNavBar } = useContext(Context);
  

  const location = useLocation();

 
   useEffect(() => {
    
     if(location.pathname == "/video"  && deviseMobile){
       setShowNavBar(false);
     }     
   }, [location]);

   const{ categoryId, videoId }= useParams();

  return (
    <>
      <div className="md:flex  flex w-[100vw] box-border hide-scrollbar h-[100%]  flex-wrap justify-between  md:px-[6%] md:pt-[1.5%]">

        <VideoPlay categoryId={categoryId} videoId={videoId}  deviseMobile={deviseMobile} location={useLocation()} />

        {((!commentShow && !showDiscription) || !deviseMobile) && (
          <Recommented />
        )}
      </div>
    </>
  );
};

export default Videos;
