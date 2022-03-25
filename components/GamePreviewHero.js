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
  const truncatedSummary = summary.split(" ").slice(0, 35);
  return (
    <div className="col-span-4 flex h-56">
      <div className="relative -top-3 w-32 flex">
        <h1 className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 text-4xl text-gray-600 font-extrabold z-10 ">
          1
        </h1>
        <span className="absolute top-[calc(50%+10px)] transform -translate-y-1/2 left-2 z-0 material-icons font-extrabold text-8xl bg-clip-text text-opacity-0 text-blue-100 bg-gradient-to-r from-amber-400 to-amber-200">
          emoji_events
        </span>
      </div>

      <div className="border-2 rounded border-primary-100 w-full flex justify-between">
        <div className="flex p-4">
          <div className="flex flex-shrink-0">
            <Image
              src={cover}
              height={140}
              width={120}
              className="object-cover"
            />
          </div>

          <div className="px-4 flex flex-col justify-between">
            <div className="">
              <h2 className="font-semibold text-primary-800">{name}</h2>
              <p className="text-sm py-3 text-gray-600 max-h-36">
                {truncatedSummary.join(" ")}
                {truncatedSummary.length >= 35 && <span>...</span>}
              </p>
            </div>
            <div className="">
              <BadgeDisplay badges={genres} />
              <p className="text-gray-500 text-sm"></p>
            </div>
          </div>
        </div>
        <div className="w-32 rounded-r bg-green-500 flex flex-col flex-shrink-0 items-center justify-center">
          <h1 className="text-5xl text-white font-extrabold">
            {Math.floor(rating)}
          </h1>
          <h2 className="font-bold text-xs mt-2 text-green-900">
            {ratingCount} reviews
          </h2>
        </div>
      </div>
    </div>
  );
}

export default GamePreviewHero;
