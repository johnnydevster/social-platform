import React from "react";
import BadgeDisplay from "./BadgeDisplay";

export default function GamePreview({
  place,
  name,
  cover,
  rating,
  ratingCount,
  summary,
  genres,
}) {
  return (
    <div className="flex justify-between m-1 py-2 bg-gray-50 rounded">
      <div className="flex justify-center items-center">
        <h1 className="font-bold text-center align-middle p-2 h-10 w-10 flex-shrink-0">
          {place}
        </h1>
        <div className="bg-green-500 rounded text-white font-bold p-2">
          <h2>{Math.floor(rating)}</h2>
        </div>
        <h3 className="font-semibold p-2">{name}</h3>
      </div>
      <BadgeDisplay
        badges={genres}
        className="justify-end content-center"
        badgeClass="h-5"
      />
    </div>
  );
}
