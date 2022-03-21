import React from "react";
import GamePreview from "../GamePreview";

export default function UpcomingGames({ upcomingGames }) {
  return (
    <div className="grid grid-cols-4 gap-4">
      {upcomingGames.map((game) => {
        return (
          <GamePreview
            key={game.id}
            name={game.name}
            cover={game.cover.url}
            rating={game.rating}
            ratingCount={game.rating_count}
            summary={game.summary}
            genres={game.genres}
          />
        );
      })}
    </div>
  );
}
