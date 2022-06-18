import { LoadingOverlay } from "@mantine/core";
import { useRouter } from "next/router";
import { useEffect } from "react";
import Layout from "../../components/layout/Layout";
import ModuleWrapper from "../../components/layout/ModuleWrapper";
import Sidebar from "../../components/layout/sidebar/Sidebar";
import Heading from "../../components/layout/utils/Heading";
import { auth } from "../../lib/firebase-client/firebase-client-config";
import { useAuth } from "../../lib/hooks/authContext";

export default function User({}) {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!user && !loading) {
      router.push("/login");
    }
  }, [user, loading]);

  if (loading) {
    return (
      <Layout>
        <Sidebar />
        <ModuleWrapper>
          <div className="h-[40vh] w-full relative">
            <LoadingOverlay
              visible
              loaderProps={{ size: "xl", color: "black" }}
            />
          </div>
        </ModuleWrapper>
      </Layout>
    );
  }

  if (user) {
    return (
      <Layout>
        <Sidebar />
        <ModuleWrapper>
          <Heading size="xl" className="font-bold">
            User profile for
            <span className="font-semibold"> {user.userName}</span>
          </Heading>
        </ModuleWrapper>
      </Layout>
    );
  }

  return null;
}

export async function getServerSideProps(context) {
  return {
    props: {},
  };
}
