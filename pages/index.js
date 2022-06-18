import Head from "next/head";
import Layout from "../components/layout/Layout";
import ModuleWrapper from "../components/layout/ModuleWrapper";
import Sidebar from "../components/layout/sidebar/Sidebar";
import TopGames from "../components/modules/TopGames";
import getTopGames from "../utils/getTopGames";

export default function Home({ topGames }) {
  return (
    <>
      <Head>
        <title>Bro Gamers</title>
      </Head>
      <Layout>
        <Sidebar />
        <ModuleWrapper className="lg:col-span-2 w-full">
          <TopGames topGames={topGames} />
        </ModuleWrapper>
      </Layout>
    </>
  );
}

export async function getStaticProps() {
  const topGames = (await getTopGames()) || null;

  return {
    props: {
      topGames,
    }, // will be passed to the page component as props
  };
}
