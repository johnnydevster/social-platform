import { TextInput } from "@mantine/core";
import { useState } from "react";
import Button from "../layout/utils/Button";

export default function CreateAccountModule() {
  const [userName, setUserName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [repeatPassword, setRepeatPassword] = useState();

  return (
    <form>
      <div className="flex flex-col space-y-4">
        <TextInput
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          placeholder="Username"
          label="Username"
          required
        />
        <TextInput
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email address"
          label="Email address"
          required
          type="email"
        />
        <TextInput
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          label="Password"
          required
          type="password"
        />
        <TextInput
          value={repeatPassword}
          onChange={(e) => setRepeatPassword(e.target.value)}
          placeholder="Repeat password"
          label="Repeat password"
          required
          type="password"
        />
      </div>
      <div className="flex space-x-2 w-full mt-6">
        <Button className={""}>Submit</Button>
        <Button type="secondary" className={""}>
          Submit
        </Button>
      </div>
    </form>
  );
}
