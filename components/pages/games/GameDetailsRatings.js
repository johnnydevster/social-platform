import { useState } from "react";

export default function GameDetailsRatings() {
  const [isFilled, setIsFilled] = useState(true);

  return (
    <div className="p-2">
      <h2 className="text-xl font-semibold">Did you like this game?</h2>
      <span
        style={{
          fontVariationSettings: `'wght' ${isFilled ? "100" : "700"};`,
        }}
        className="material-symbols-rounded text-5xl text-yellow-400"
      >
        grade
      </span>
      <span
        style={{
          fontVariationSettings: `'wght' 100;`,
        }}
        className="material-symbols-rounded text-4xl text-yellow-400"
      >
        grade
      </span>
      <button onClick={() => setIsFilled(!isFilled)}>fill</button>
    </div>
  );
}
