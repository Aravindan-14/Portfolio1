import React from "react";
import Card from "./Card";

function Features() {
  return (
    <div className="pt-20">
      <div>
        <h1 className="md:text-5xl text-4xl font-bold text-center pb-10">
          What I <span className="text-pink-600">Do</span>
        </h1>
        <div className="flex flex-wrap justify-center gap-10">
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
}

export default Features;
