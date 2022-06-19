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
  const [value, setValue] = useState();
  function sliderLabel(value) {
    if (value < 25) {
      return "😣";
    }
    if (value < 50) {
      return "😐";
    }
    if (value < 75) {
      return "🙂";
    }
    return "😃";
  }

  return (
    <div className="p-2">
      <Heading size="xl" className="font-semibold">
        How did you like this game?
      </Heading>
      <Slider
        value={value}
        onChange={setValue}
        label={sliderLabel}
        className="mt-8 mb-12 sm:mx-10"
        classNames={{
          bar: "bg-gradient-to-r from-red-400 via-yellow-400 to-lime-400",
          mark: "opacity-0",
          thumb: "border-lime-500 border-[6px] w-8 h-8",
          label: "text-5xl absolute top-[-4.2rem] bg-white bg-opacity-0",
        }}
        size="xl"
        defaultValue={50}
        min={1}
        max={100}
        marks={MARKS}
      />
    </div>
  );
}
