import React from 'react';
import Navigation from '../Navigation/Navigation';
import Footer from '../Footer';
export default function Layout({children}) {
  return (
    <div className="">
      <Navigation/>
      <main className="">
        {children}
        </main>
      <Footer />
    </div>
  );
}
