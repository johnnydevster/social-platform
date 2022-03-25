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
      <div className="-top-2 relative w-32 flex items-center justify-center">
        <h1 className="text-4xl text-gray-600 font-extrabold relative z-10 ">
          1
        </h1>
        <span className="absolute left-2 top-12 z-0 material-icons font-extrabold text-8xl bg-clip-text text-opacity-0 text-blue-100 bg-gradient-to-r from-amber-400 to-amber-200">
          emoji_events
        </span>
      </div>

      <div className="border-2 rounded border-primary-100 w-full flex justify-between">
        <div className="flex p-4">
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
            </div>
            <div className="overflow-hidden">
              <BadgeDisplay badges={genres} />
              <p className="text-gray-500 text-sm"></p>
            </div>
          </div>
        </div>
        <div className="w-32 rounded-r bg-green-500 flex flex-col items-center justify-center">
          <h1 className="text-5xl text-white font-extrabold">
            {Math.floor(rating)}
          </h1>
          <h2 className="font-bold text-sm mt-2 text-white">
            {ratingCount} reviews
          </h2>
        </div>
      </div>
    </div>
  );
}

export default GamePreviewHero;
