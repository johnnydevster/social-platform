import { Button as MantineButton } from "@mantine/core";

export default function Button({ children, className, type = "primary" }) {
  let buttonClass;

  switch (type) {
    case "primary":
      buttonClass = "bg-indigo-500 hover:bg-indigo-400";
      break;
    case "secondary":
      buttonClass = "bg-indigo-100 hover:bg-indigo-50 text-indigo-500";
      break;
  }

  return (
    <MantineButton className={`text-lg ${buttonClass} ${className} transition`}>
      {children}
    </MantineButton>
  );
}
