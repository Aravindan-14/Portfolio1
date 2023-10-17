import React from "react";

function Frontend() {
  return (
    <div className="mb-10">
      <div className="flex justify-between items-center mb-2">
        <span>HTML/CSS</span>
        <span>90%</span>
      </div>
      <div className="w-full relative">
        <div className=" bg-white h-1 w-full absolute "></div>
        <div className=" bg-pink-600 h-1 w-[80%] absolute "></div>
      </div>
    </div>
  );
}

export default Frontend;
