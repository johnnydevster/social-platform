import { Divider } from "@mantine/core";
import React from "react";
import Layout from "../components/layout/Layout";
import ModuleWrapper from "../components/layout/ModuleWrapper";
import Sidebar from "../components/layout/sidebar/Sidebar";
import Heading from "../components/layout/utils/Heading";
import CreateAccountModule from "../components/modules/CreateAccountModule";

export default function CreateAccount() {
  return (
    <Layout>
      <Sidebar />
      <ModuleWrapper>
        <Heading size="medium">Create new account</Heading>
        <Divider className="mb-6" />
        <CreateAccountModule />
      </ModuleWrapper>
    </Layout>
  );
}
