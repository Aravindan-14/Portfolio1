import React from "react";
import FindMe from "./FindMe";

function Footer() {
  return (
    <div className="md:flex justify-between md:px-40 bg-black text-white py-8 text-center">
      <div className="flex justify-center mb-8">
        <FindMe />
      </div>
      <div>
        <span className="text-xl font-bold ">Contact Me</span>
        <h2 className="pt-2">aravindan2518@gmail.com</h2>
        <h2>9150102475</h2>
      </div>
    </div>
  );
}

export default Footer;
