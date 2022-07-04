import React from 'react';
import Navigation from '../Navigation/Navigation';
import Footer from '../Footer';
import SectionLayoutInfo from './SectionLayoutInfo';
export default function Layout({children}) {
  return (
    <div className="">
      <Navigation />
      <main className="flex">
       <div>
        <SectionLayoutInfo/>
       </div>
        <div className='bg-[#f5f0f0]'>{children}
        </div>
      </main>
      <Footer />
    </div>
  );
}
