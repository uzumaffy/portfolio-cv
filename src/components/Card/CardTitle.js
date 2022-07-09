import React from 'react'

export default function CardTitle({littletitle, title}) {
  return (
    <div>
        <h2 className='font-semibold text-[30px] pt-10'>{littletitle}</h2>
        <h1 className="text-[72px] font-bold">{title}</h1>
    </div>
  )
}
