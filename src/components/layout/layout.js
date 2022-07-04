import React from 'react';
import Navigation from '../Navigation/Navigation';
import Footer from '../Footer';
export default function Layout({children}) {
  return (
    <div className="">
      <Navigation />
      <main className="">
        <div></div>
        <div>{children}</div>
      </main>
      p
      <Footer />
    </div>
  );
}
