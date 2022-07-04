import React from 'react'

export default function CardDesciption({ titledesciption,desciption}) {
  return (
    <div>
      <h3 className='pt-4 pb-6 text-2xl font-extrabold'>{titledesciption}</h3>
        <p>
            {desciption}
        </p>
    </div>
  )
}
