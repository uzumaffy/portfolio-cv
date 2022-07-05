import React from "react";

export default function CardLayout({ src, alt, titlecard, descriptiontiltecard}) {
  return (
    <div className="flex">
      <div className="pr-5 py-2">
        <img src={src} alt={alt} />
      </div>
      <div>
        <p>
          {titlecard}
          <span className="text-[#fff]">{descriptiontiltecard}</span>
        </p>
      </div>
    </div>
  );
}
