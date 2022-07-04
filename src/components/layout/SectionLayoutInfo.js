import React from 'react'
import CardLayout from './CardLayout';

export default function SectionLayoutInfo() {
  return (
    <div className="flex flex-col h-screen">
      <div>
        <img src="images/image-jb.webp" alt=" image_justin-b" />
      </div>
      <div className=" bg-[#100f3a]">
        <h2>General Information</h2>
        <CardLayout
          src="images/name.webp"
          alt=" logo name"
          titlecard="Name"
          descriptiontiltecard="Justin Bieber"
        />
        <CardLayout
          src="images/email.webp"
          alt=" logo email"
          titlecard="contactme@templatname.com"
          descriptiontiltecard=""
        />
        <CardLayout
          src="images/appel.webp"
          alt=" logo appel "
          titlecard="+76 6524 5678622 763"
          descriptiontiltecard=""
        />
        <CardLayout
          src="images/ecran.webp"
          alt=" logo écran"
          titlecard="www.mytemplatename.com"
          descriptiontiltecard=""
        />
      </div>
    </div>
  );
}
