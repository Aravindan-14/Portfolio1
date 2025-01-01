import React from "react";
import Resume from "./ARAVINDAN E RESUME-F.2024.pdf"

function About() {
  return (
    <div  id="about" className=" md:flex gap-14 justify-center items-center pt-28 2xl:w-full">
      <div data-aos="fade-right" data-aos-duration="2000" className="h-full w-full flex md:justify-end justify-center items-center"  >
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
      <div data-aos="fade-left" data-aos-duration="2000">
        <h1 className="text-5xl font-bold mb-5 text-center mt-5">
          About <span className="text-5xl font-bold text-pink-600">Me!</span>
        </h1>

        <p className=" mb-10 md:pr-28 text-center">
          I am actively seeking opportunities as a full-stack developer. In addition to my technical expertise, I have skills in designing posters and logos, incorporating my editing skills into front-end development. My unique skill set and passion for both coding and design position me as a versatile candidate ready to contribute to innovative projects.
        </p>
        <a href={Resume} download="Aravindan CV 2024" ><button className="uppercase bg-black/50 px-5 py-3 rounded text-pink-600 font-semibold hover:text-white hover:bg-pink-600">
          download cv
        </button></a>
      </div>
    </div>
  );
}

export default About;
