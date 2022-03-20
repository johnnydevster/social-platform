import Image from "next/image";

function GamePreview({ name, cover, rating, ratingCount, summary }) {
  return (
    <div className="border-2 border-primary-100 m-4 p-4 rounded-lg">
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
          <p className="p-4 text-gray-500 text-sm">{summary}</p>
        </div>
      </div>
    </div>
  );
}

export default GamePreview;
