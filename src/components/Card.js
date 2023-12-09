import React from "react";

function Card(props) {

  const { cardData } = props

  return (
    <div data-aos="fade-up" data-aos-duration="1500">
      <div className="h-[370px] w-72 bg-black/50 hover:bg-black/80 rounded-xl p-7">
        <div>
          <i className={cardData.className}  ></i>
        </div>
        <h2 className="text-2xl font-bold mb-5">{cardData.heading}</h2>
        <p className=" text-justify text-sm mt-5">
          {cardData.content}
        </p>
      </div>
    </div >
  );
}

export default Card;
