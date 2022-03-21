import Image from "next/image";
import BadgeDisplay from "./layout/BadgeDisplay";

function GamePreview({ name, cover, rating, ratingCount, summary, genres }) {
  return (
    <div className="shadow border border-primary-100 col-span-4 lg:col-span-2">
      <div className="flex">
        <div className="flex flex-shrink-0">
          <Image
            src={cover}
            height={250}
            width={180}
            className="object-cover"
          />
        </div>
        <div className="p-2 flex flex-col justify-between">
          <div className="">
            <h2 className="font-semibold text-primary-800">{name}</h2>
            <h2>Rating</h2>
          </div>
          <div className="overflow-hidden">
            <BadgeDisplay badges={genres} />
            <p className="text-gray-500 text-sm"></p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GamePreview;
