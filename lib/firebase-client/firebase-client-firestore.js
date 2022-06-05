import { doc, setDoc } from "firebase/firestore";
import { db } from "./firebase-client-config";

export async function addUser(user) {
  try {
    await setDoc(doc(db, "users", user.uid), {
      userName: user.userName,
    });
  } catch (e) {
   console.error("Failed to add user: ", user, e)
  }
}


export async function getUser()
