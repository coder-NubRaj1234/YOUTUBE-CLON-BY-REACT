import React, { useContext  , useEffect} from "react";
import Feed from "../../Components/Feed/Feed";
import Sidebar from "../../Components/Navbar/Sidebar";
import { Context } from "../../Context/Context";

import { useLocation } from "react-router-dom";
const home = ({ deviseMobile }) => {
  const {
    videoOpen,
    setVideoOpen,
    showNavBar,
    setShowNavBar,
    setsideBarState,
  } = useContext(Context);

  const location = useLocation();

  useEffect(() => {
    if(location.pathname == "/" ){
      setShowNavBar(true);
      setVideoOpen(false)
    }     
  }, [location]);

  return (
    <>
      <div
        className={`lg:pb-[0] lg:px-0 lg:flex    h-[92vh] w-[100vw]  hide-scrollbar  `}
      >
        {window.innerWidth > 1025 && <Sidebar />}
        <div
          className={`min-h-[92vh] overflow-y-scroll flex-1
           ${deviseMobile && !videoOpen ? "pb-[8vh]" : "pb-0"}
          `}
        >
          <Feed deviseMobile={deviseMobile} />
        </div>
      </div>
    </>
  );
};

export default home;
