import Badge from "../utils/Badge";

function BadgeDisplay({ badges }) {
  return (
    <ul className="flex">
      {badges.map((badge) => {
        return <Badge className={badge.className}>{badge.name}</Badge>;
      })}
    </ul>
  );
}

export default BadgeDisplay;
