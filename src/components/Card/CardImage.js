import React from 'react'

export default function CardImage({src,alt, title, description}) {
  return (
    <div>
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
