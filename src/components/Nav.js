import React from "react";

function Nav() {
  return (
    <div className="text-white">
      <div className="h-16 w-screen bg-black  flex justify-between items-center px-5 md:px-20">
        <h1 className="md:text-3xl font-bold">Aravindan</h1>
        <ul className="hidden md:flex gap-8 font-bold">
          <a href=""><li className="hover:text-pink-600">Home</li></a>
          <a href="about"><li className="hover:text-pink-600">About</li></a>
          <a href="skill"><li className="hover:text-pink-600">Skill</li></a>
          <a href="education"><li className="hover:text-pink-600">Education</li></a>
        </ul>
        <div className="md:hidden">
          <i class="fa-solid fa-bars"></i>
        </div>
      </div>
    </div>
  );
}

export default Nav;
