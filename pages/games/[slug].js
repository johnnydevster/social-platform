import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";

import { Skeleton } from "@mantine/core";

import Layout from "../../components/layout/Layout";
import Sidebar from "../../components/layout/sidebar/Sidebar";
import getGameInfo from "../../utils/getGameInfo";
import getTopGames from "../../utils/getTopGames";
import GameDetailsHero from "../../components/GameDetailsHero";
import GameDetailsScreenshots from "../../components/GameDetailsScreenshots";

export default function Game({ gameData }) {
  const router = useRouter();

  return (
    <Layout>
      <Sidebar />
      <div className="rounded-lg col-span-3 lg:col-span-2">
        <GameDetailsHero fallback={router.isFallback} gameData={gameData} />
        <div className="py-6 md:py-10">
          <h2 className="font-bold mb-2 text-gray-600">Summary</h2>
          <p className="px-2">{gameData?.summary || null}</p>
        </div>
        <GameDetailsScreenshots screenshots={gameData.screenshots} />
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
