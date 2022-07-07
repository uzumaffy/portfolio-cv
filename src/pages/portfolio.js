import React from "react";
import Layout from "../components/Layout/Layout";
import PortfolioSectionTitle from "../components/Portfolio/PortfolioSectionTitle";
import SectionCardPorfolio from "../components/Portfolio/SectionCardPorfolio";

export default function portfolio() {
  return (
    <Layout>
      <PortfolioSectionTitle />
      <SectionCardPorfolio />
    </Layout>
  );
}
