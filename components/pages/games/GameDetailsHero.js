import { Badge, Skeleton } from "@mantine/core";
import Image from "next/image";
import Heading from "../../layout/utils/Heading";

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
        <div className="bg-primary-700 rounded-t flex items-center">
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
      <div className="bg-primary-700 rounded-t flex items-center h-14">
        <h1 className="text-primary-50 font-bold mx-4 md:text-lg">
          {gameData?.name || null}
        </h1>
      </div>
      <div className="md:p-4 h-full md:flex">
        <div className="bg-primary-400 h-80 w-56 relative flex-shrink-0 mx-auto my-2 md:my-0">
          <Image
            alt="game cover"
            priority
            layout="fill"
            src={gameData?.cover?.url || null}
            className="object-cover "
          />
        </div>
        <ul className="p-4 md:p-6">
          <li className="mb-3 flex space-x-6">
            <div>
              <Heading className="font-bold text-gray-600">Released</Heading>
              <span>{gameData.release_dates[0].human}</span>
            </div>
            <div>
              <Heading className="font-bold text-gray-600">
                Developed by
              </Heading>
              <span>{developers[0]}</span>
            </div>
          </li>
          <li>
            <Heading className="font-bold text-gray-600">Summary</Heading>
            <p className="">{gameData?.summary || null}</p>
          </li>
        </ul>
      </div>
    </div>
  );
}
