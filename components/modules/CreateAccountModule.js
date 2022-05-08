import { TextInput } from "@mantine/core";
import Button from "../layout/utils/Button";

export default function CreateAccountModule() {
  return (
    <form>
      <TextInput placeholder="Username" label="Username" required />
      <TextInput
        placeholder="Email address"
        label="Email address"
        required
        type="email"
      />
      <TextInput
        placeholder="Password"
        label="Password"
        required
        type="password"
      />
      <TextInput
        placeholder="Repeat password"
        label="Repeat password"
        required
        type="password"
      />
      <Button type="primary" color="red">
        Submit
      </Button>
    </form>
  );
}
