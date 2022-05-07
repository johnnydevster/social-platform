import { Timestamp } from "firebase/firestore";
import { db } from "./firebase-server-config";

export async function uploadToken({ access_token, expires_in }) {
  const currentTime = Timestamp.now().seconds;
  const expirationTime = currentTime + expires_in;
  const docRef = db.collection("auth").doc("token");
  const token = {
    token: access_token,
    expirationTime,
  };

  await docRef.set(token);
  return token;
}

export async function getToken() {
  const tokenRef = db.collection("auth").doc("token");
  const doc = await tokenRef.get();

  if (!doc.exists) {
    console.log("Couldn't find token");
  } else {
    return doc.data();
  }
}
