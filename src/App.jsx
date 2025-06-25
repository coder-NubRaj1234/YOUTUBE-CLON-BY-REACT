import React  , {useEffect, useState} from "react";
import Navbar from "./Components/Navbar/Navbar";
import Main from "./Components/Main/Main";
import { Context } from "./Context/Context";

const App = () => {
  const [deviseMobile, setdeviseMobile] = useState(true);
  const [sideBarState, setsideBarState] = useState(false);
  const [videoOpen , setVideoOpen] =  useState(false)


useEffect(() =>{
  window.innerWidth > 1025 ? setdeviseMobile(false) : setdeviseMobile(true);
  
} , []);

  window.addEventListener("resize", () => {
    window.innerWidth > 1025 ? setdeviseMobile(false) : setdeviseMobile(true);
    
  });

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
        }}
      >
        {!videoOpen && <Navbar />}
        <Main deviseMobile={deviseMobile} />
      </Context.Provider>
    </>
  );
};

export default App;
