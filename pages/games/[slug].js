import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";

import { Skeleton } from "@mantine/core";

import Layout from "../../components/layout/Layout";
import Sidebar from "../../components/layout/sidebar/Sidebar";
import getGameInfo from "../../utils/getGameInfo";
import getTopGames from "../../utils/getTopGames";
import GameDetailsHero from "../../components/GameDetailsHero";

export default function Game({ gameData }) {
  const router = useRouter();

  return (
    <Layout>
      <Sidebar />
      <div className="rounded-lg col-span-3 lg:col-span-2">
        <GameDetailsHero fallback={router.isFallback} gameData={gameData} />
        <h2>Summary</h2>
        <p>{gameData?.summary || null}</p>
      </div>
    </Layout>
  );
}

export async function getStaticPaths() {
  const gameData = (await getTopGames()) || null;

  const paths = gameData.map((game) => {
    return { params: { slug: game.slug } };
  });
  return {
    paths, // needs to be an array of objects with params
    fallback: true, // false or 'blocking'
  };
}

export async function getStaticProps({ params }) {
  const gameData = (await getGameInfo(params.slug)) || null;
  if (!gameData) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      gameData,
    }, // will be passed to the page component as props
  };
}
