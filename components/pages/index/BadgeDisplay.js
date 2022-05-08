import Badge from "../../layout/utils/Badge";

function BadgeDisplay({ badges, className, badgeClass }) {
  return (
    <ul className={`flex flex-wrap ${className}`}>
      {badges.map((badge, i) => {
        return (
          <Badge key={i} className={badgeClass}>
            {badge.name}
          </Badge>
        );
      })}
    </ul>
  );
}

export default BadgeDisplay;
