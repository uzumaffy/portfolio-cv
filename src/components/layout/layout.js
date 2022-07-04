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
        <div>{children}</div>
      </main>
      <Footer />
    </div>
  );
}
