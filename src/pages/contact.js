import React from "react";
import ContactSectionDescription from "../components/Contactpage/ContactSectionDescription";
import ContactSectionTitle from "../components/Contactpage/ContactSectionTitle";
import Layout from "../components/Layout/Layout";
import ContactSectionformulaires from "../components/Contactpage/ContactSectionformulaires";
export default function contact() {
  return (
    <Layout>
      <ContactSectionTitle />
      <ContactSectionDescription />
      <ContactSectionformulaires />
    </Layout>
  );
}
