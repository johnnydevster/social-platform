import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";

import { Skeleton } from "@mantine/core";

import Layout from "../../components/layout/Layout";
import Sidebar from "../../components/layout/sidebar/Sidebar";
import getGameInfo from "../../utils/getGameInfo";
import getTopGames from "../../utils/getTopGames";
import Error from "../_error";

export default function Game({ gameData }) {
  const router = useRouter();
  // fallback ui to render if
  if (router.isFallback) {
    return (
      <Layout>
        <Sidebar />
        <div className="lg:p-5 rounded-lg col-span-3 lg:col-span-2">
          <div className="bg-primary-50 h-96 flex flex-col rounded">
            <div className="bg-primary-500 rounded-t flex items-center h-120">
              <div className="rounded-tl font-bold h-14 w-14" />
            </div>
            <div className="p-4 h-full flex">
              <div className="bg-primary-400 w-48 rounded relative">
                <Skeleton width="100%" height="100%" />
              </div>
            </div>
          </div>
        </div>
      </Layout>
    );
  }
  if (gameData) {
    return (
      <Layout>
        <Sidebar />
        <div className="lg:p-5 rounded-lg col-span-3 lg:col-span-2">
          {/* Game details hero component */}
          <div className="bg-primary-50 h-96 flex flex-col rounded">
            <div className="bg-primary-500 rounded-t flex items-center">
              <div className="bg-green-500 text-white text-2xl rounded-tl font-bold p-3">
                <h2>{Math.floor(gameData.rating)}</h2>
              </div>
              <h1 className="text-primary-50 font-bold">{gameData.name}</h1>
            </div>
            <div className="p-4 h-full flex">
              <div className="bg-primary-400 w-48 rounded relative">
                <Image
                  priority
                  layout="fill"
                  src={gameData.cover.url}
                  className="object-cover rounded"
                />
              </div>
            </div>
          </div>

          {/* /Game details hero component */}
        </div>
      </Layout>
    );
  }
  return <Error statusCode="404" />;
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
