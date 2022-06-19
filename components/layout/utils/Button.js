import { Button as MantineButton } from "@mantine/core";

export default function Button({
  children,
  className,
  type,
  buttonType = "primary",
  onClick,
}) {
  let buttonClass;

  switch (buttonType) {
    case "primary":
      buttonClass = "bg-blue-500 hover:bg-blue-400";
      break;
    case "secondary":
      buttonClass = "bg-blue-100 hover:bg-blue-50 text-blue-500";
      break;
  }

  return (
    <MantineButton
      type={type}
      onClick={onClick}
      className={`${buttonClass} ${className} transition`}
    >
      {children}
    </MantineButton>
  );
}
