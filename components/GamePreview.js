import Image from "next/image";
import BadgeDisplay from "./layout/BadgeDisplay";

function GamePreview({ name, cover, rating, ratingCount, summary, genres }) {
  return (
    <div className="border-2 border-primary-100 mb-4 p-4 rounded-lg">
      <div className="mb-2">
        <h2 className="font-semibold text-primary-800">{name}</h2>
      </div>
      <div className="inline-block">
        <div className="flex">
          <div className="border flex flex-shrink-0">
            <Image
              src={cover}
              width={150}
              height={200}
              className="object-cover"
            />
          </div>
          <div className="p-4">
            <BadgeDisplay badges={genres} />
            <p className="text-gray-500 text-sm pt-2">{summary}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default GamePreview;
