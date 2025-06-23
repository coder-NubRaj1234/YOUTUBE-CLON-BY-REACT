import React  , {useEffect, useState} from "react";
import Navbar from "./Components/Navbar/Navbar";
import Main from "./Components/Main/Main";
import { Context } from "./Context/Context";

const App = () => {
  const [deviseMobile, setdeviseMobile] = useState(true);
  const [sideBarState, setsideBarState] = useState(false);


useEffect(() =>{
  window.innerWidth > 1025 ? setdeviseMobile(false) : setdeviseMobile(true);
  
} , []);

  window.addEventListener("resize", () => {
    window.innerWidth > 1025 ? setdeviseMobile(false) : setdeviseMobile(true);
    
  });

  return (
    <>
      <Context.Provider
        value={{ deviseMobile, setdeviseMobile, sideBarState, setsideBarState }}
      >
        <Navbar />
        <Main />
      </Context.Provider>
    </>
  );
};

export default App;
