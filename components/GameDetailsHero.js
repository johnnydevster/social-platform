import Image from "next/image";

export default function GameDetailsHero({ gameData }) {
  return (
    <div className="bg-primary-50 flex flex-col rounded">
      <div className="bg-primary-500 rounded-t flex items-center">
        <div className="bg-green-500 text-white text-2xl rounded-tl font-bold p-3">
          <h2>{Math.floor(gameData.rating)}</h2>
        </div>
        <h1 className="text-primary-50 font-bold ml-2">{gameData.name}</h1>
      </div>
      <div className="p-4 h-full flex">
        <div className="bg-primary-400 lg:w-56 lg:h-80 rounded relative flex-shrink-0">
          <Image
            priority
            layout="fill"
            src={gameData.cover.url}
            className="object-cover rounded"
          />
        </div>
        <ul className="w-full grid grid-cols-2 lg:grid-cols-3 p-4">
          <li>
            <h3>Released</h3>
            <span>Releasedate</span>
          </li>
          <li>
            <h3>Platforms</h3>
          </li>
          <li>
            <h3>Genre(s)</h3>
          </li>
          <li>
            <h3>Developers</h3>
            <span>Releasedate</span>
          </li>
          <li>
            <h3>Website</h3>
            <span>Releasedate</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
