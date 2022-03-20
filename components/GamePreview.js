import Image from "next/image";

function GamePreview({ name, cover, rating, ratingCount, summary }) {
  return (
    <div>
      <h2 className="font-semibold text-primary-800">{name}</h2>
      <div className="relative w-32 h-32">
        <Image src={cover} layout="fill" />
      </div>
    </div>
  );
}

export default GamePreview;
