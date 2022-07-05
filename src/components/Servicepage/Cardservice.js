import React from 'react'

export default function Cardservice({src,alt,title,description}) {
  return (
    <div className="flex">
      <div className="pr-3">
        <img className="w-[150px]"src={src} alt={alt} />
      </div>
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
  
}
