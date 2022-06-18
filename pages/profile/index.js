import { Divider, LoadingOverlay } from "@mantine/core";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect } from "react";
import CardWrapper from "../../components/layout/CardWrapper";
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
          <Heading size="lg" className="font-bold">
            User settings
          </Heading>
          <CardWrapper className="my-4">
            <div className="flex">
              <div className="h-48 w-48 bg-gray-200 rounded-full"></div>
              <div className="px-5 flex flex-col gap-4 justify-center">
                <div>
                  <Heading size="lg" className="font-bold">
                    {user.userName}
                  </Heading>
                  <span className={"text-gray-500 text-sm"}>{user.email}</span>
                </div>
                <div>
                  <Heading size="lg" className="font-bold">
                    Account created
                  </Heading>
                  <span className={"text-gray-500 text-sm"}>
                    {user.accountCreated}
                  </span>
                </div>
              </div>
            </div>
          </CardWrapper>
          <Divider></Divider>
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
