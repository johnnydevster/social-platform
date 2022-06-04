import Image from "next/image";
import Link from "next/link";
import BadgeDisplay from "./BadgeDisplay";

function GamePreviewHero({
  name,
  cover,
  rating,
  ratingCount,
  summary,
  genres,
  slug,
}) {
  return (
    <div className="col-span-4 flex h-56">
      <div className="relative -top-3 w-32 hidden md:flex">
        <h1 className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 text-4xl text-gray-600 font-extrabold z-10 ">
          1
        </h1>
        <span className="absolute top-[calc(50%+10px)] transform -translate-y-1/2 left-2 z-0 material-icons font-extrabold text-8xl bg-clip-text text-opacity-0 text-blue-100 bg-gradient-to-r from-amber-400 to-amber-200">
          emoji_events
        </span>
      </div>

      <div className="border-2 rounded border-primary-100 w-full flex justify-between">
        <div className="flex p-2 sm:p-4">
          <div className="flex flex-shrink-0">
            <Image
              alt={`game cover for ${name}`}
              src={cover}
              height={140}
              width={120}
              className="object-cover"
            />
          </div>

          <div className="px-4 flex flex-col justify-between">
            <Link href={`/games/${slug}`}>
              <a className="hover:underline font-semibold text-primary-800">
                {name}
              </a>
            </Link>
            <p className="text-sm pt-3 text-gray-600 line-clamp-4">{summary}</p>

            <Link href={`/games/${slug}`}>
              <a className="hover:underline font-semibold text-blue-400">
                Go to summary
              </a>
            </Link>
            <div className="">
              <BadgeDisplay badges={genres} />
              <p className="text-gray-500 text-sm"></p>
            </div>
          </div>
        </div>
        <div className="w-32 rounded-r bg-green-500 hidden md:flex flex-col flex-shrink-0 items-center justify-center">
          <h1 className="text-5xl text-white font-extrabold">
            {Math.floor(rating)}
          </h1>
          <h2 className="font-semibold text-xs mt-2 text-white">
            {ratingCount} reviews
          </h2>
        </div>
      </div>
    </div>
  );
}

export default GamePreviewHero;
