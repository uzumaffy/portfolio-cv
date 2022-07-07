import React from "react";
import CarouselItem from "./CarouselItem";

export default function CarouselTestimony() {
  return (
    <div id="default-carousel" className="relative " data-carousel="static">
      {/* <!-- Carousel wrapper --> */}
      <div className=" relative h-56 rounded-lg sm:h-64 xl:h-80 2xl:h-96">
        {/* <!-- Item 1 --> */}
        <div
          className="duration-700 ease-in-out absolute inset-0 transition-all transform translate-x-0 z-20"
          data-carousel-item=""
        >
          <div className="flex">
            <div>
              <CarouselItem
                titlecarousel="Rapide et efficace"
                src="images/man1.Webp"
                alt="homme à bgauche"
              />
            </div>
            <div>
              <CarouselItem
                titlecarousel="Fort de proposition"
                src="images/man2.Webp"
                alt="image l'homme au milieu"
              />
            </div>
            <div>
              <CarouselItem
                titlecarousel="Agréable et professionnel"
                src="images/femme.Webp"
                alt="image femmen à droite"
              />
            </div>
          </div>
        </div>
        {/* <!-- Item 2 --> */}
        <div></div>
        {/* <!-- Item 3 --> */}
        <div></div>
      </div>
      {/* <!-- Slider indicators --> */}
      <div className="flex absolute bottom-5 left-1/2 z-30 space-x-3 -translate-x-1/2">
        <button
          type="button"
          className="w-3 h-3 rounded-full bg-[#a5a5a5] hover:bg-white"
          aria-current="true"
          aria-label="Slide 1"
          data-carousel-slide-to="0"
        ></button>
        <button
          type="button"
          className="w-3 h-3 rounded-full bg-[#a5a5a5] hover:bg-white"
          aria-current="false"
          aria-label="Slide 2"
          data-carousel-slide-to="1"
        ></button>
        <button
          type="button"
          className="w-3 h-3 rounded-full bg-[#a5a5a5] hover:bg-white"
          aria-current="false"
          aria-label="Slide 3"
          data-carousel-slide-to="2"
        ></button>
      </div>
      {/* <!-- Slider controls --> */}
      <button
        type="button"
        className="flex absolute top-0 left-0 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none"
        data-carousel-prev=""
      >
        <span className="inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg
            className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 19l-7-7 7-7"
            ></path>
          </svg>
          <span className="hidden">Previous</span>
        </span>
      </button>
      <button
        type="button"
        className="flex absolute top-0 right-0 z-30 justify-center items-center px-4 h-full cursor-pointer group focus:outline-none"
        data-carousel-next=""
      >
        <span className="inline-flex justify-center items-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg
            className="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5l7 7-7 7"
            ></path>
          </svg>
          <span className="hidden">Next</span>
        </span>
      </button>
    </div>
  );
}