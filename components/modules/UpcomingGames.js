import React from "react";
import GamePreviewHero from "../GamePreviewHero";

export default function UpcomingGames({ upcomingGames }) {
  return (
    <div className="grid grid-cols-4 gap-4">
      <h1 className="font-bold text-lg">Upcoming games</h1>
      <GamePreviewHero
        key={upcomingGames[0].id}
        name={upcomingGames[0].name}
        cover={upcomingGames[0].cover.url}
        rating={upcomingGames[0].rating}
        ratingCount={upcomingGames[0].rating_count}
        summary={upcomingGames[0].summary}
        genres={upcomingGames[0].genres}
      />
    </div>
  );
}
