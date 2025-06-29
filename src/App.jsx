import React  , {useEffect, useState} from "react";
import Navbar from "./Components/Navbar/Navbar";
import Main from "./Components/Main/Main";
import { Context } from "./Context/Context";

const App = () => {
  const [deviseMobile, setdeviseMobile] = useState(true);
  const [sideBarState, setsideBarState] = useState(false);
  const [videoOpen , setVideoOpen] =  useState(false);
  const [showNavBar, setShowNavBar] = useState(true);


    const [commentShow, setCommentShow] = useState(false);
    const [showDiscription, setShowDiscription] = useState(false);




useEffect(() =>{
  window.innerWidth > 1025 ? setdeviseMobile(false) : setdeviseMobile(true);
  
} , []);

  window.addEventListener("resize", () => {
    window.innerWidth > 1025 ? setdeviseMobile(false) : setdeviseMobile(true);
    
  });

  useEffect(() =>{
    if(deviseMobile && videoOpen){
      setShowNavBar(false);
    };
  } , [deviseMobile, videoOpen]);

  return (
    <>
      <Context.Provider
        value={{
          deviseMobile,
          setdeviseMobile,
          sideBarState,
          setsideBarState,
          videoOpen,
          setVideoOpen,
          commentShow,
          setShowDiscription,
          showDiscription,
          setCommentShow,
          showNavBar,
          setShowNavBar,
        }}
      >
        {showNavBar && <Navbar />}
        <Main deviseMobile={deviseMobile} />
      </Context.Provider>
    </>
  );
};

export default App;
