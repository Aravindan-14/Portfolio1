import React from "react";

function Card() {
  return (
    <div>
      <div className="h-80 w-72 bg-black/50 hover:bg-black/80 rounded-xl p-6">
        <div>
          <i class="text-5xl text-pink-600 mb-5 fa-solid fa-code"></i>
        </div>
        <h2 className="text-3xl font-bold mb-5">Development</h2>
        <p className="font-semibold text-clip">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum in eos
          saepe ipsa cupiditate accusantium voluptatibus quidem nam,
        </p>
      </div>
    </div>
  );
}

export default Card;
