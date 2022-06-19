import { Badge, Skeleton } from "@mantine/core";
import Heading from "../../layout/utils/Heading";

export default function GameDetailsInfo({ fallback, gameData }) {
  let officialWebsite = gameData?.websites?.filter((website) => {
    return website.category === 1;
  })[0].url;

  if (fallback) {
    // render fallback ui while fetching
    return (
      <ul className="flex flex-col space-y-4 w-2/3 px-2 py-5">
        <Skeleton height={20} width="70%" />
        <Skeleton height={20} width="70%" />
        <Skeleton height={20} width="70%" />
      </ul>
    );
  }

  return (
    <ul className="flex flex-col space-y-4 w-2/3">
      <li>
        <Heading className="font-semibold mb-1 lg:mb-0">Platforms</Heading>
        {gameData?.platforms?.map((platform) => {
          return (
            <Badge
              key={platform.id}
              className="bg-gradient-to-r from-fuchsia-500 to-fuchsia-400 text-white mb-1 mr-1"
            >
              {platform.name}
            </Badge>
          );
        }) || null}
      </li>
      <li>
        <Heading className="font-semibold mb-1 lg:mb-0">Genre(s)</Heading>
        {gameData?.genres?.map((genre) => {
          return (
            <Badge
              key={genre.id}
              className="bg-gradient-to-r from-fuchsia-500 to-fuchsia-400 text-white mb-1 mr-1"
            >
              {genre.name}
            </Badge>
          );
        }) || null}
      </li>
      {officialWebsite && (
        <li>
          <Heading className="font-semibold">Website</Heading>
          <a
            className="text-blue-500 hover:underline font-semibold"
            target="_none"
            href={officialWebsite}
          >
            Official website
          </a>
        </li>
      )}
    </ul>
  );
}
