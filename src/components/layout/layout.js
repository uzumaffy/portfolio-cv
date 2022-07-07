import React from "react";
import Navigation from "../Navigation/Navigation";
import Footer from "../Footer";
import SectionLayoutInfo from "./SectionLayoutInfo";
export default function Layout({ children }) {
  return (
    <div className="container">
      <Navigation />
      <main className="lg-flex-col md:flex  sm:flex">
        <div className=" bg-[#100f3a]">
          <SectionLayoutInfo />
        </div>
        <div className="px-2   bg-[#f5f0f0]">{children}</div>
      </main>
      <Footer />
    </div>
  );
}
