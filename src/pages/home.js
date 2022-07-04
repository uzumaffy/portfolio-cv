import React from "react";
import HomeSectionDescription from "../components/Homepage/HomeSectionDescription";
import HomeSectiontitle from "../components/Homepage/HomeSectiontitle";
import Layout from "../components/Layout/Layout";

export default function home() {
  return (
    <Layout>
      <HomeSectiontitle />
      <HomeSectionDescription />
    </Layout>
  )
}
