import React from "react";
import { useRouter } from "next/router";

import Layout from "../../components/layout/Layout";
import Sidebar from "../../components/layout/sidebar/Sidebar";
import getGameInfo from "../../utils/getGameInfo";
import getTopGames from "../../utils/getTopGames";
import GameDetailsHero from "../../components/GameDetailsHero";
import GameDetailsScreenshots from "../../components/GameDetailsScreenshots";
import GameDetailsOtherGames from "../../components/GameDetailsOtherGames";
import { Badge, Skeleton } from "@mantine/core";
import Head from "next/head";
import GameDetailsInfo from "../../components/GameDetailsInfo";

export default function Game({ gameData }) {
  const router = useRouter();
  //const router = { isFallback: true };
  return (
    <Layout>
      <Head>
        <title>{gameData?.name}</title>
      </Head>
      <Sidebar />
      <div className="rounded-lg col-span-3 lg:col-span-2">
        <GameDetailsHero fallback={router.isFallback} gameData={gameData} />
        <div className="flex p-2 md:p-6 ">
          <GameDetailsInfo fallback={router.isFallback} gameData={gameData} />
          <div className="w-1/2 flex items-center justify-center">
            {router.isFallback ? (
              <Skeleton height={80} circle />
            ) : (
              <div className="bg-green-500 h-32 w-32 rounded flex flex-col items-center justify-center shadow-lg">
                <h1 className="text-5xl font-bold text-green-50 mb-2">
                  {gameData?.rating && Math.floor(gameData?.rating)}
                </h1>
                <p className="text-green-900 font-semibold text-sm">
                  {gameData?.rating_count} reviews
                </p>
              </div>
            )}
          </div>
        </div>
        <GameDetailsScreenshots
          fallback={router.isFallback}
          screenshots={gameData?.screenshots}
        />
        <GameDetailsOtherGames />
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
