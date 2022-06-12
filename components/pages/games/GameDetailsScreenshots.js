import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";
import { Skeleton } from "@mantine/core";

export default function GameDetailsScreenshots({ fallback, screenshots }) {
  if (fallback) {
    return <Skeleton className="w-full h-[480px] relative"></Skeleton>;
  }
  return (
    <Carousel infiniteLoop>
      {screenshots?.map((screenshot) => {
        return (
          <div key={screenshot.id} className="w-full h-[480px] relative">
            <Image
              alt="game screenshot"
              objectFit="cover"
              layout="fill"
              src={screenshot.url}
            />
          </div>
        );
      })}
    </Carousel>
  );
}
