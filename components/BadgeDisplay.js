import Badge from "./utils/Badge";

function BadgeDisplay({ badges, className, badgeClass }) {
  return (
    <ul className={`flex flex-wrap ${className}`}>
      {badges.map((badge) => {
        return <Badge className={badgeClass}>{badge.name}</Badge>;
      })}
    </ul>
  );
}

export default BadgeDisplay;
