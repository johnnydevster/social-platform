import * as admin from "firebase-admin";
const serviceAccount = require("./serviceworker.json");

// When using firebase on the server, you should ONLY use the 'firebase-admin' variant of the firebase package
// Also, for adding & removing docs, you should ONLY use the 'node-js' versions in the firebase documentation

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });
}

const db = admin.firestore();

async function uploadToken({ token, expiresIn }) {
  const docRef = db.collection("auth").doc("token");

  await docRef.set({
    token,
    expiresIn,
  });
}

async function addUser() {
  const docRef = db.collection("users").doc("alovelace");

  await docRef.set({
    first: "Ola",
    last: "Lovelace",
    born: 1815,
  });
}

export { db, addUser };
