import React from "react";
import Layout from "../components/Layout/Layout";
import SkillsSectionDescription from "../components/Skillspage/SkillsSectionDescription";
import SkillsSectionTitle from "../components/Skillspage/SkillsSectionTitle";

export default function skills() {
  return (
    <Layout>
      <SkillsSectionTitle/>
      <SkillsSectionDescription/>
    </Layout>
  );
}
