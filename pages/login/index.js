import { LoadingOverlay } from "@mantine/core";
import Layout from "../../components/layout/Layout";
import ModuleWrapper from "../../components/layout/ModuleWrapper";
import Sidebar from "../../components/layout/sidebar/Sidebar";
import LoginCard from "../../components/pages/login/LoginCard";

export default function Login() {
  return (
    <Layout>
      <Sidebar />
      <ModuleWrapper>
        <LoginCard setShowLoginModal={() => {}} />
      </ModuleWrapper>
    </Layout>
  );
}
