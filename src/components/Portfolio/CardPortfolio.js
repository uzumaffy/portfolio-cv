import React from "react";
import { Link } from "react-router-dom";

export default function CardPortfolio({ titlecard, src, alt }) {
  return (
    <ul className="flex flex-col mt-4 md:flex-row md:mt-0 md:text-sm md:font-medium">
      <Link to="Nauto.com" className="block py-2 pr-4 pl-3 text-[#a5a5a5] rounded md:bg-transparent md:p-0 ">
        {titlecard}
        <img className="w-[100%] h-[100%]" src={src} alt={alt}></img>
      </Link>
    </ul>
  );
}
