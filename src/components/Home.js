import React, { useEffect } from "react";
import FindMe from "./FindMe";
import Aos from "aos";

function Home() {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, [])

  return (
    <div className="h-full w-full  md:flex justify-center items-center pt-5 md:pt-0">
      <div className="h-full w-full flex flex-col justify-center">
        <span className="nd:text-5xl text-3xl font-bold ">Hi, I'm </span>
        <h1 className="md:text-[5rem] text-5xl text-pink-600 font-bold md:mb-8 mb-2 mt-2">
          Aravindan
        </h1>
        <span className="md:text-2xl font-bold md:-mt-5 ">
          Full Stack Developer
        </span>
        <p className="mt-3 mb-10 md:pr-20 text-sm font-semibold">
          I design and code beautifully simple things, and I love what I do. I
          use animation as a third dimension by which Lorem ipsum dolor sit amet
          consectetur adipisicing.
        </p>
        <FindMe />
      </div>
      <div data-aos="fade-left"
        className="h-full w-full">
        <img
          className="w-full md:scale-125 mt-12 "
          src="Aravind.png"
          alt=""
        ></img>
      </div>
    </div >
  );
}



export default Home;
