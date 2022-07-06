import React from 'react'

export default function Cardservice({src,alt,title,description}) {
  return (
    <div className="flex">
      <div className="pr-4">
        <img className="w-[10vw] max-w-[80px] max-h-[60px] h-[10vh]"src={src} alt={alt} />
      </div>
      <div className='px-5'>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
  
}
