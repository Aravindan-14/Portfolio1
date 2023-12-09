import React from "react";
import Professional from "./Professional";

function Skill() {
  return (
    <div className="h-full w-full pt-20 ">
      <div>
        <h1 className="text-5xl font-bold text-center mb-10">
          My <span className="text-pink-600">Skill</span>
        </h1>
        <div className="flex flex-wrap justify-center gap-5 mb-10">
          <div data-aos="fade-up" data-aos-duration="1000" className="bg-black/50 h-16 rounded w-48 flex justify-center items-center p-3 hover:bg-gray-800">
            <img src="React.png" alt=""></img>
          </div>
          <div data-aos="fade-up" data-aos-duration="1000" className="bg-black/50 h-16 rounded w-48 flex justify-center items-center p-3 hover:bg-gray-800">
            <img src="Ps.png" alt=""></img>
          </div>
          <div data-aos="fade-up" data-aos-duration="1000" className="bg-black/50 h-16 rounded w-48 flex justify-center items-center p-3 hover:bg-gray-800">
            <img src="Fg.png" alt=""></img>
          </div>
          <div data-aos="fade-up" data-aos-duration="1000" className="bg-black/50 h-16 rounded w-48 flex justify-center items-center p-3 hover:bg-gray-800">
            <img src="Ai.png" alt=""></img>
          </div>
        </div>
      </div>
      <div className=" md:px-40">
        <Professional />
      </div>
    </div>
  );
}

export default Skill;
