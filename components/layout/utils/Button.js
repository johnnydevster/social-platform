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
      buttonClass = "bg-indigo-500 hover:bg-indigo-400";
      break;
    case "secondary":
      buttonClass = "bg-indigo-100 hover:bg-indigo-50 text-indigo-500";
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
