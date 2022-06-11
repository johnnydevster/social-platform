import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { auth } from "../firebase-client/firebase-client-config";
import { getUserInformation } from "../firebase-client/firebase-client-firestore";

export function useAuth() {
  const [user, setUser] = useState();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const uid = user.uid;
        const userInfo = await getUserInformation(uid);

        setUser({ ...user, ...userInfo });
      } else {
        setUser(null);
      }
    });
    return () => unsubscribe();
  }, []);
  return user;
}
