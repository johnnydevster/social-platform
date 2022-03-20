import { useState } from "react";
import { Link } from "next";
import Layout from "../components/layout/Layout";
import Sidebar from "../components/layout/sidebar/Sidebar";
import UpcomingGames from "../components/modules/UpcomingGames";

export default function Home({ upcomingGames }) {
  return (
    <Layout>
      <Sidebar />
      <div className="p-5 bg-primary-50 rounded-lg col-span-3 lg:col-span-2">
        <UpcomingGames upcomingGames={upcomingGames} />
      </div>
    </Layout>
  );
}

export async function getStaticProps(context) {
  const upcomingGamesResponse = await fetch(
    "http://localhost:3000/api/upcominggames"
  );
  const upcomingGames = await upcomingGamesResponse.json();

  return {
    props: {
      upcomingGames,
    }, // will be passed to the page component as props
  };
}
