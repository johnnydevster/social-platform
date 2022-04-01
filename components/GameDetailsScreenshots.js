import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";

export default function GameDetailsScreenshots({ screenshots }) {
  return (
    <div className="">
      <Carousel infiniteLoop>
        {screenshots.map((screenshot) => {
          return (
            <div key={screenshot.id} className="w-full h-96">
              <Image objectFit="cover" layout="fill" src={screenshot.url} />
            </div>
          );
        })}
      </Carousel>
    </div>
  );
}
