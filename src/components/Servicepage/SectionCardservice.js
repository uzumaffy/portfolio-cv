import React from 'react'
import CardServicedevweb from './CardServicedevweb';
import CardServiceMaintenace from './CardServiceMaintenace';
import CardServiceSeo from './CardServiceSeo';

export default function SectionCardservice() {
  return (
    <div className="py-9 md:flex sm:flex">
      <CardServicedevweb />
      <CardServiceMaintenace />
      <CardServiceSeo />
    </div>
  );
}
