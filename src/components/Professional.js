import React from "react";
import Frontend from "./Frontend";

function Professional() {
  return (
    <div>
      <div className="border-solid border-black mt-5">
        <h1 className="md:text-3xl text-lg font-semibold text-center uppercase mb-5">
          Professional <span className="text-pink-600">Skills</span>
        </h1>
        <Frontend />
        <Frontend />
        <Frontend />
        <Frontend />
      </div>
    </div>
  );
}

export default Professional;
