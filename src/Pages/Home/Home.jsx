import React from 'react'
import Feed from '../../Components/Feed/Feed';

const home = ({ deviseMobile }) => {
console.log(deviseMobile)
  return (
    <>
      <div className={`flex-1  max-h-[92vh] overflow-y-scroll  box-border   `}>
        <div
          className={`min-h-[100%] overflow-y-scroll 
           ${deviseMobile ? "pb-[8vh]" : "pb-0"}
          `}
        >
          <Feed />
        </div>
      </div>
    </>
  );
};

export default home
