import { getFirestore, collection, addDoc } from "firebase/firestore";
import * as admin from "firebase-admin";
const serviceAccount = require("./serviceworker.json");

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });
}

const db = admin.firestore();

async function addUser() {
  const docRef = db.collection("users").doc("alovelace");

  await docRef.set({
    first: "Ola",
    last: "Lovelace",
    born: 1815,
  });
}

export { db, addUser };
