import React from "react";

export default function CardPortfolio({ titlecard, src, alt }) {
  return (
    <ul className="flex  flex-col mt-4 md:flex-row md:mt-0 md:text-sm md:font-medium">
      <div>
        <img className="bg-cover" src={src} alt={alt} />
      </div>
      <li
        to="Services.js"
        className="block py-2 pr-4 pl-3 text-[#a5a5a5] rounded md:bg-transparent md:p-0 "
      >
        {titlecard}
      </li>
    </ul>
  );
}
