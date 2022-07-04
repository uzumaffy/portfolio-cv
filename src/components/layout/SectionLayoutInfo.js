import React from 'react'
import CardLayoutAppel from './CardLayoutAppel';
import CardLayoutMail from './CardLayoutMail';
import CardLayoutName from './CardLayoutName';
import CardLayoutWeb from './CardLayoutWeb';

export default function SectionLayoutInfo() {
  return (
    <div className="h-screen flex flex-col">
      <div>
        <img src="images/image-jb.webp" alt=" image_justin-b" />
      </div>
      <div>
        <h2>General Information</h2>
        <CardLayoutName/>
        <CardLayoutMail/>
        <CardLayoutWeb/>
        <CardLayoutAppel/>
      </div>
    </div>
  );
}
