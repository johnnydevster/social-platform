import { Slider } from "@mantine/core";
import { useState } from "react";
import Heading from "../../layout/utils/Heading";

const MARKS = [
  { value: 1, label: "Terrible" },
  { value: 25, label: "Not good" },
  { value: 50, label: "Meh" },
  { value: 75, label: "Good" },
  { value: 100, label: "Incredible!" },
];

export default function GameDetailsRatings() {
  const [isFilled, setIsFilled] = useState(true);

  return (
    <div className="p-2">
      <Heading size="xl" className="font-semibold">
        How did you like this game?
      </Heading>
      {/*       <span
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
      </span> */}
      <Slider
        className="mt-9 mb-12 mx-10"
        classNames={{
          bar: "bg-gradient-to-r from-red-400 via-yellow-400 to-lime-400",
          mark: "opacity-0",
          thumb: "border-lime-500 border-[6px] w-8 h-8",
        }}
        size="xl"
        min={1}
        max={100}
        marks={MARKS}
      />
    </div>
  );
}
