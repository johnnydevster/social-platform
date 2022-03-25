import Image from "next/image";
import BadgeDisplay from "./layout/BadgeDisplay";

function GamePreviewHero({
  name,
  cover,
  rating,
  ratingCount,
  summary,
  genres,
}) {
  return (
    <div className="col-span-4 flex ">
      <div className="relative w-32 flex items-center justify-center">
        <h1 className="text-4xl text-gray-600 font-extrabold relative z-10">
          1
        </h1>
        <span className="absolute left-2 top-12 z-0 material-icons font-extrabold text-8xl bg-clip-text text-opacity-0 text-blue-100 bg-gradient-to-r from-amber-400 to-amber-200">
          emoji_events
        </span>
      </div>

      <div className="border-2 rounded p-4 border-primary-100 w-full">
        <div className="flex">
          <div className="flex flex-shrink-0">
            <Image
              src={cover}
              height={140}
              width={110}
              className="object-cover"
            />
          </div>

          <div className="px-2 flex flex-col justify-between">
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
    </div>
  );
}

export default GamePreviewHero;
