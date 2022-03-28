import Layout from "../components/layout/Layout";
import Sidebar from "../components/layout/sidebar/Sidebar";
import TopGames from "../components/modules/TopGames";
import getTopGames from "../utils/getTopGames";

export default function Home({ topGames }) {
  return (
    <Layout>
      <Sidebar />
      <div className="lg:p-5 rounded-lg col-span-3 lg:col-span-2">
        <TopGames topGames={topGames} />
      </div>
    </Layout>
  );
}

export async function getStaticProps(context) {
  const topGames = (await getTopGames()) || null;

  return {
    props: {
      topGames,
    }, // will be passed to the page component as props
  };
}
