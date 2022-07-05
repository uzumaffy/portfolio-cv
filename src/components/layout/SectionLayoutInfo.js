import React from 'react'
import CardLayoutAppel from './CardLayoutAppel';
import CardLayoutMail from './CardLayoutMail';
import CardLayoutName from './CardLayoutName';
import CardLayoutWeb from './CardLayoutWeb';

export default function SectionLayoutInfo() {
  return (
    <div className="flex flex-col">
      <div>
        <img className='h-screen' src="images/image-jb.webp" alt=" image_justin-b" />
      </div>
      <div className='container'>
        <h3 className=' py-4 text-center text-[#fff] text-xl'>General Information</h3>
        <CardLayoutName/>
        <CardLayoutMail/>
        <CardLayoutWeb/>
        <CardLayoutAppel/>
      </div>
    </div>
  );
}
