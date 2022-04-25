import * as admin from "firebase-admin";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { Timestamp } from "firebase/firestore";
const serviceAccount = require("./serviceworker.json");
import { GoogleAuthProvider } from "firebase/auth";

// Import the functions you need from the SDKs you need

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

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDQI_QL6CZRyAVqFgz9iKaFKy_okXERSYs",
  authDomain: "gametray-55b3f.firebaseapp.com",
  projectId: "gametray-55b3f",
  storageBucket: "gametray-55b3f.appspot.com",
  messagingSenderId: "602383237845",
  appId: "1:602383237845:web:525f8e2921264db36ed85c",
  measurementId: "G-76MJWVDFJY",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

function loginWithGoogle() {
  signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      return user;
      // ...
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    });
}

export { db, uploadToken, getToken, loginWithGoogle };
