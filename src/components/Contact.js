import React from "react";

function Contact() {
  return (
    <div className="">
      <h1 className="md:text-5xl text-4xl font-bold text-center mt-20 mb-10">
        Contact <span className="text-pink-600">Me</span>
      </h1>
      <div className="flex justify-center items-center">
        <div className="w-[500px] gap-5 grid grid-cols-2 bg-black/40 p-10 rounded-xl text-white  ">
          <div className="flex flex-col col-span-2 md:col-span-1">
            <label className="pb-2 uppercase">Your Name</label>
            <input className="bg-black/30 p-2 " />
          </div>
          <div className="flex flex-col col-span-2 md:col-span-1">
            <label className="pb-2 uppercase">Phone No</label>
            <input className="bg-black/30 p-2 " />
          </div>
          <div className="flex flex-col col-span-2">
            <label className="pb-2 uppercase">Email</label>
            <input className="bg-black/30 p-2 " />
          </div>
          <div className="flex flex-col  col-span-2">
            <label className="pb-2 uppercase">Subject</label>
            <input className="bg-black/30 p-2 " />
          </div>
          <div className="flex flex-col  col-span-2">
            <label className="pb-2 uppercase">your message</label>
            <input className="bg-black/30 p-2 " />
          </div>
          <div className=" flex flex-col col-span-2 ">
            <button className="bg-black hover:bg-pink-600  py-3">submit</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
