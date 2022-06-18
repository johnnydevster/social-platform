import React from "react";
import Heading from "../layout/utils/Heading";
import GameList from "../pages/index/GameList";
import GamePreviewHero from "../pages/index/GamePreviewHero";

export default function TopGames({ topGames }) {
  const heroGame = topGames[0];
  const top9Games = topGames.slice(1, 10);
  return (
    <div className="grid grid-cols-4 gap-4">
      <Heading size="lg" className="font-bold col-span-4">
        Top games
      </Heading>
      <GamePreviewHero
        key={heroGame.id}
        name={heroGame.name}
        cover={heroGame.cover.url}
        rating={heroGame.rating}
        ratingCount={heroGame.rating_count}
        summary={heroGame.summary}
        genres={heroGame.genres}
        slug={heroGame.slug}
      />
      <GameList topGames={top9Games} />
    </div>
  );
}
