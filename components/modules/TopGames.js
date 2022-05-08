import React from "react";
import GameList from "../pages/index/GameList";
import GamePreviewHero from "../pages/index/GamePreviewHero";

export default function TopGames({ topGames }) {
  const heroGame = topGames[0];
  const top9Games = topGames.slice(1, 10);
  return (
    <div className="grid grid-cols-4 gap-4">
      <h1 className="font-bold text-lg col-span-4">Top games</h1>
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
