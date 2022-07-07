import React from "react";

export default function CarouselItem({ titlecarousel, src, alt }) {
  return (
    <div className="bg-[#fff] w-[200px] h-[450px] px-5 mx-4 border-3">
      <div className="py-3">
        <h2 className="text-[#444] font-bold">{titlecarousel}</h2>
        <p>
          Etiam nec odio vestibulum est mattis effic iturut magna. Pallentesque
          sit amer teillus blandit.Etiam nec odio vestibulum est mattiseffic
          iturut magna. Pallentesque sit
        </p>
      </div>
      <div className="">
        <img className="rounded-full py-2" src={src} alt={alt} />
        <div className="flex">
          <div>
            <h4 className="text-[#8583e1]">Diane Smith</h4>
          </div>
          <div>
            <span className="text-[#a5a5a5]font-semibold">Customer</span>
          </div>
        </div>
      </div>
    </div>
  );
}
