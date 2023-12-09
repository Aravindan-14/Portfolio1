import React from "react";
import Skill from './Skill';

function Frontend(props) {
  console.log();
  return (
    <div className="mb-10">
      <div className="flex justify-between items-center mb-2">
        <span>{props.skillData.skill}</span>
        <span>{props.skillData.value}%</span>
      </div>
      <div className="w-full relative">
        <div className=" bg-white h-1 w-full absolute "></div>
        <div style={{ width: `${props.skillData.value}%` }} className=" bg-pink-600 h-1 absolute "></div>
      </div>
    </div >
  );
}

export default Frontend;
