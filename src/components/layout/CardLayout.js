import React from "react";

export default function CardLayout({ src, alt, titlecard, descriptiontiltecard}) {
  return (
    <div className="flex">
      <div className="px-5">
        <img src={src} alt={alt} />
      </div>
      <div>
        <p className="text-[#f5f0f0]">
          {titlecard}:
          <span className="text-[#fff]">{descriptiontiltecard}</span>
        </p>
      </div>
    </div>
  );
}
