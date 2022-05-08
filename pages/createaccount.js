import React from "react";
import Layout from "../components/layout/Layout";
import SectionWrapper from "../components/layout/SectionWrapper";
import Sidebar from "../components/layout/sidebar/Sidebar";

export default function CreateAccount() {
  return (
    <Layout>
      <Sidebar />
      <SectionWrapper>Create account</SectionWrapper>
    </Layout>
  );
}
