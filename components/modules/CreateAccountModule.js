import { TextInput } from "@mantine/core";
import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../lib/firebase-client/firebase-client-config";
import { showNotification } from "@mantine/notifications";

import Button from "../layout/utils/Button";
import { useRouter } from "next/router";
import { addUser } from "../../lib/firebase-client/firebase-client-firestore";

export default function CreateAccountModule() {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const router = useRouter();

  function handleClearFields() {
    setUserName("");
    setEmail("");
    setPassword("");
    setRepeatPassword("");
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (password.length > 0 && password === repeatPassword) {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const { uid } = userCredential.user;
          // Add some custom fields to user in firestore
          addUser({ uid, userName });
          // Signed in
          showNotification({
            title: "Success",
            message: "Account successfully created",
            icon: <i className="material-icons">close</i>,
            className: "bg-green-500",
          });
          router.push("/");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          showNotification({
            title: "Failed",
            message: errorMessage,
            icon: <i className="material-icons">close</i>,
            className: "bg-red-500",
          });
          // ..
        });
    }
  }

  return (
    <form onSubmit={(e) => handleSubmit(e)}>
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
        <Button type="submit" className={""}>
          Submit
        </Button>
        <Button
          onClick={handleClearFields}
          buttonType="secondary"
          className={""}
        >
          Clear
        </Button>
      </div>
    </form>
  );
}
