import React from "react";

function EducationData(props) {

  const { data } = props


  return (
    <div className="relative ">
      <div className=" ml-5 hover:bg-black/90 bg-black/40 mb-5 ">
        <div className="border-2 border-pink-600 p-5">
          <div className="pb-2 text-pink-600 ">
            <i class="pr-3 fa-regular fa-calendar"></i>{" "}
            <span className="font-semibold">{data.duration}</span>
          </div>

          <h2 className="text- font-bold pb-2">
            {data.heading}
          </h2>
          <p className=" text-justify font-semibold text-sm ">
            {data.content}
          </p>
        </div>
      </div>
      <div className=" bg-pink-600 h-2 w-5 absolute top-20"></div>
    </div>
  );
}

export default EducationData;
