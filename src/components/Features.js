import React from "react";
import Card from "./Card";

function Features() {

  let cardDeata1 = {
    heading: "Development",
    content: "I'm a passionate full stack developer specializing in creating dynamic and user-friendly web applications. With expertise in Node.js, JavaScript, and React.js, I bring ideas to life by seamlessly integrating frontend and backend technologies. I love tackling complex challenges and crafting elegant solutions.",
    className: "fa-solid fa-code text-4xl text-pink-600 mb-3"
  }
  let cardDeata2 = {
    heading: "UI Design",
    content: "As a UI designer, I love creating    user-friendly interfaces and designing visually appealing experiences. It's all about making sure that the user's journey through an app or website is smooth and enjoyable. I get to use my creativity and problem-solving skills to make things look great and work seamlessly.",
    className: "fa-solid fa-palette text-4xl text-pink-600 mb-3"
  }
  let cardDeata3 = {
    heading: "Photography",
    content: "As a photographer, I really enjoy capturing beautiful moments and telling stories through my photos. It's an amazing feeling to freeze a moment in time and create memories that last forever. I love exploring different techniques and experimenting with composition and lighting to create unique and stunning images.",
    className: "fa-solid fa-camera-retro text-4xl text-pink-600 mb-3"
  }




  return (
    <div className="pt-20">
      <div>
        <h1 className="md:text-5xl text-4xl font-bold text-center pb-10">
          What I <span className="text-pink-600">Do</span>
        </h1>
        <div className="flex flex-wrap justify-center gap-10">
          <Card cardData={cardDeata1} />
          <Card cardData={cardDeata2} />
          <Card cardData={cardDeata3} />
        </div>
      </div>
    </div>
  );
}

export default Features;
