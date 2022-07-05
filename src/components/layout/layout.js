import React from "react";
import Navigation from "../Navigation/Navigation";
import Footer from "../Footer";
import SectionLayoutInfo from "./SectionLayoutInfo";
export default function Layout({ children }) {
  return (
    <div>
      <Navigation />
      <main className="flex">
        <div className=" bg-[#100f3a]">
          <SectionLayoutInfo />
        </div>
        <div className="container bg-[#f5f0f0]">{children}</div>
      </main>
      <Footer />
    </div>
  );
}
