import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";

export default function GameDetailsScreenshots({ screenshots }) {
  return (
    <Carousel infiniteLoop>
      {screenshots?.map((screenshot) => {
        return (
          <div key={screenshot.id} className="w-full h-[480px] relative">
            <Image objectFit="cover" layout="fill" src={screenshot.url} />
          </div>
        );
      })}
    </Carousel>
  );
}
