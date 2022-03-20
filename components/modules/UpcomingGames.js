import React from "react";
import GamePreview from "../GamePreview";

export default function UpcomingGames({ upcomingGames }) {
  return (
    <div>
      {upcomingGames.map((game) => {
        return (
          <GamePreview
            key={game.id}
            name={game.name}
            cover={game.coverUrl}
            rating={game.rating}
            ratingCount={game.rating_count}
            summary={game.summary}
          />
        );
      })}
    </div>
  );
}
