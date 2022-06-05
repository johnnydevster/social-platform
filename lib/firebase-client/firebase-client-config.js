import { initializeApp } from "firebase/app";
import { getAuth, connectAuthEmulator } from "firebase/auth";

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
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
connectAuthEmulator(auth, "http://localhost:9099");
