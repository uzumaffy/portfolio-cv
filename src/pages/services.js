import React from "react";
import Layout from "../components/Layout/Layout";
import SectionCardservice from "../components/Servicepage/SectionCardservice";
import ServicesSectionTitle from "../components/Servicepage/ServicesSectionTitle";
export default function services() {
  return (
    <Layout>
      <ServicesSectionTitle />
      <SectionCardservice/>
    </Layout>
  );
}
