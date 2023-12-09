import React from "react";


function About() {
  return (
    <div className=" md:flex gap-14 justify-center items-center pt-28 2xl:w-[2000px]">
      <div data-aos="fade-right" data-aos-duration="1000" className="h-full w-full flex md:justify-end justify-center items-center"  >
        <div className="p-5 bg-black/50 rounded overflow-hidden">
          <div className="h-full w-full overflow-hidden rounded ">
            <img
              className="h-96 rounded hover:scale-150  overflow-hidden"
              src="Aravind1.jpg"
              alt=""
            ></img>
          </div>
        </div>
      </div>
      <div data-aos="fade-left" data-aos-duration="1000">
        <h1 className="text-5xl font-bold mb-5 text-center">
          About <span className="text-5xl font-bold text-pink-600">Me!</span>
        </h1>

        <p className=" mb-10 md:pr-28 text-center">
          Hi, I'm Aravindan! I'm a full stack developer, UI designer, and editor. In my spare time, I enjoy photography, playing guitar, and exploring new technologies. I'm passionate about creating amazing digital experiences and constantly learning and growing in my field.
        </p>
        <button className="uppercase bg-black/50 px-5 py-3 rounded text-pink-600 font-semibold hover:text-white hover:bg-pink-600">
          download cv
        </button>
      </div>
    </div>
  );
}

export default About;
