import { Button as MantineButton } from "@mantine/core";

export default function Button(props) {
  console.log(props);
  return (
    <MantineButton {...props} className={props.className}>
      {props.children}
    </MantineButton>
  );
}
