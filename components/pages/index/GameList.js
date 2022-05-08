import React from "react";
import GamePreview from "./GamePreview";

export default function GameList({ topGames }) {
  return (
    <div className="col-span-4">
      {topGames.map((game, i) => {
        return (
          <GamePreview
            key={game.id}
            place={i + 2}
            name={game.name}
            cover={game.cover.url}
            rating={game.rating}
            ratingCount={game.rating_count}
            summary={game.summary}
            genres={game.genres}
            slug={game.slug}
          />
        );
      })}
    </div>
  );
}
