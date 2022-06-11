import { doc, setDoc } from "firebase/firestore";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "./firebase-client-config";
import { showNotification } from "@mantine/notifications";

export async function addUser(user) {
  try {
    await setDoc(doc(db, "users", user.uid), {
      userName: user.userName,
    });
  } catch (e) {
    console.error("Failed to add user attributes to firestore: ", user, e);
  }
}

export async function signIn(email, password) {
  const uid = await signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      showNotification({
        title: "Success",
        message: "Logged in successfully",
        icon: <i className="material-icons">close</i>,
        className: "bg-green-500",
      });
      return userCredential.user.uid;
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
    });

  return uid;
}
