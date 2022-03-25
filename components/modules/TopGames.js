import React from "react";
import GamePreviewHero from "../GamePreviewHero";

export default function TopGames({ topGames }) {
  return (
    <div className="grid grid-cols-4 gap-4">
      <h1 className="font-bold text-lg col-span-4">Top games</h1>
      <GamePreviewHero
        key={topGames[0].id}
        name={topGames[0].name}
        cover={topGames[0].cover.url}
        rating={topGames[0].rating}
        ratingCount={topGames[0].rating_count}
        summary={topGames[0].summary}
        genres={topGames[0].genres}
      />
    </div>
  );
}
