import React from 'react'

export default function Cardservice({src,alt,title,description}) {
  return (
  <div className='flex pr-3'>
        <div>
            <img src={src} alt={alt}/>
        </div>
        <div>
            <h3>{title}</h3>
            <p>
                {description}
            </p>
        </div>
        </div>
  )
  
}
