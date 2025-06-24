import React from 'react'
import Feed from '../../Components/Feed/Feed';
import Sidebar from '../../Components/Navbar/Sidebar';

const home = ({ deviseMobile }) => {
console.log(deviseMobile)
  return (
    <>
      <div
        className={`lg:pb-[0] lg:px-0 lg:flex    h-[92vh] w-[100vw]  hide-scrollbar  `}
      >
        {window.innerWidth > 1025 && <Sidebar />}
        <div
          className={`min-h-[92vh] overflow-y-scroll flex-1
           ${deviseMobile ? "pb-[8vh]" : "pb-0"}
          `}
        >
          <Feed deviseMobile={deviseMobile} />
        </div>
      </div>
    </>
  );
};

export default home
