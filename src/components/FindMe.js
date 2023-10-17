import React from "react";

function FindMe() {
  return (
    <div className=" hover:rounded-full">
      <span className="font-semibold uppercase ">Find with me</span>
      <div className="flex gap-5 mt-3">
        <div className="h-8 w-8 bg-gray-950 flex justify-center items-center rounded text-pink-600 hover:text-white hover:rounded-full">
          <i class="fa-brands fa-linkedin-in"></i>
        </div>
        <div className="h-8 w-8 bg-gray-950 flex justify-center items-center rounded text-pink-600 hover:text-white hover:rounded-full">
          <i class="fa-brands fa-github"></i>
        </div>
        <div className="h-8 w-8 bg-gray-950 flex justify-center items-center rounded text-pink-600 hover:text-white hover:rounded-full">
          <i class="fa-brands fa-facebook"></i>
        </div>
        <div className="h-8 w-8 bg-gray-950 flex justify-center items-center rounded text-pink-600 hover:text-white hover:rounded-full">
          <i class="fa-brands fa-instagram"></i>
        </div>
      </div>
    </div>
  );
}

export default FindMe;
