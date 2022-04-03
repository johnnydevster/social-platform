import { Badge, Skeleton } from "@mantine/core";
import Image from "next/image";

export default function GameDetailsHero({ gameData, fallback }) {
  const developers =
    gameData?.involved_companies
      ?.filter((company) => {
        return company.developer;
      })
      ?.map((developer) => {
        return developer.company.name;
      }) || null;

  if (fallback) {
    return (
      <div className="bg-primary-50 flex flex-col rounded">
        <div className="bg-primary-500 rounded-t flex items-center">
          <div className="text-white text-2xl rounded-tl font-bold p-3 h-14 w-14"></div>
        </div>
        <div className="md:p-4 h-full md:flex">
          <Skeleton className="bg-primary-400 h-80 w-56 md:rounded relative flex-shrink-0 mx-auto my-2 md:my-0 " />
          <ul className="w-full p-4 md:p-8 text-sm flex flex-col space-y-4">
            <Skeleton height={20} width="100%" />
            <Skeleton height={20} width="100%" />
            <Skeleton height={20} width="80%" />
            <div className="h-3 md:h-10" />
            <Skeleton height={20} width="100%" />
            <Skeleton height={20} width="50%" />
          </ul>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-primary-50 flex flex-col rounded">
      <div className="bg-primary-500 rounded-t flex items-center">
        <div className="bg-green-500 text-white text-2xl rounded-tl font-bold p-3">
          <h2>{Math.floor(gameData?.rating || null)}</h2>
        </div>
        <h1 className="text-primary-50 font-bold ml-2">
          {gameData?.name || null}
        </h1>
      </div>
      <div className="md:p-4 h-full md:flex">
        <div className="bg-primary-400 h-80 w-56 md:rounded relative flex-shrink-0 mx-auto my-2 md:my-0">
          <Image
            priority
            layout="fill"
            src={gameData?.cover?.url || null}
            className="object-cover md:rounded"
          />
        </div>

        <ul className="w-full grid md:grid-cols-2 gap-2 p-2 md:p-4 text-sm">
          <li>
            <h3 className="font-semibold">Released</h3>
            <span>{gameData?.release_dates[0]?.human || null}</span>
          </li>
          <li>
            <h3 className="font-semibold">Platforms</h3>
            {gameData?.platforms?.map((platform) => {
              return (
                <Badge
                  key={platform.id}
                  className="bg-primary-200 text-primary-800 mb-1 "
                >
                  {platform.name}
                </Badge>
              );
            }) || null}
          </li>
          <li>
            <h3 className="font-semibold">Genre(s)</h3>
            {gameData?.genres?.map((genre) => {
              return (
                <Badge
                  key={genre.id}
                  className="bg-primary-200 text-primary-800 mb-1"
                >
                  {genre.name}
                </Badge>
              );
            }) || null}
          </li>
          <li>
            <h3 className="font-semibold">Developers</h3>
            {developers.map((developer) => {
              return <span key={developer}>{developer}</span>;
            })}
          </li>
          <li>
            <h3 className="font-semibold">Website</h3>
            <span>Releasedate</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
