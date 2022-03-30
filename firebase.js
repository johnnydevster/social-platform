import * as admin from "firebase-admin";
import { Timestamp } from "firebase/firestore";
const serviceAccount = require("./serviceworker.json");

// When using firebase on the server, you should ONLY use the 'firebase-admin' variant of the firebase package
// Also, for adding & removing docs, you should ONLY use the 'node-js' versions in the firebase documentation

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });
}

const db = admin.firestore();

async function uploadToken({ access_token, expires_in }) {
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

async function getToken() {
  const tokenRef = db.collection("auth").doc("token");
  const doc = await tokenRef.get();

  if (!doc.exists) {
    console.log("Couldn't find token");
  } else {
    return doc.data();
  }
}

export { db, uploadToken, getToken };
